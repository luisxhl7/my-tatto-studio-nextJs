"use client";

import { Calendar, View } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { CardEvent } from "@/components/molecules/card-event/Card-event";
import { getMessagesES, localizer } from "@/helpers";
import React, { useEffect, useState } from "react";
import { Modal } from "@/components/atoms/modal/Modal";
import "./agenda-page.scss";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useRouter } from "next/navigation";
import { InputText } from "@/components/atoms/inputText";
import { useForm } from "@/hook/useForm";
import { MenuCalendar } from "@/components/molecules/menu-calendar";

interface Params {
  id?: string;
}

interface DiaryPageProps {
  params: Params;
}

interface formDataProps {
  appointmentType: string;
  title: string;
  notes: string;
  dateInit: number;
  dateEnd: number;
}

const initialForm = {
  appointmentType: "",
  title: "",
  notes: "",
  dateInit: 0,
  dateEnd: 0,
};

const myEventsList = [
  {
    title: "cumpleaños",
    notes: "cumpleaños de fulano",
    dateInit: new Date(),
    dateEnd: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Fernando",
    },
  },
  {
    title: "cumpleaños",
    notes: "cumpleaños de fulano",
    dateInit: new Date(),
    dateEnd: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Fernando",
    },
  },
];

const DiaryPage: React.FC<DiaryPageProps> = (props) => {
  const { params } = props;
  const router = useRouter();

  const [view, setView] = useState<View>("month");
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);

  const [artist, setArtist] = useState<string>(params.id ? params.id : "todos");

  const { title, notes, dateInit, dateEnd, appointmentType, onInputChange } =
    useForm<formDataProps>(initialForm);



  useEffect(() => {
    if (artist !== "todos") {
      router.push(`/agenda/${artist}`);
    } else {
      router.push(`/agenda`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist]);

  useEffect(() => {
    if (params.id) {
      console.log(`consulta personalizada de ${params.id}`);
    } else {
      console.log("consulta general");
    }
  }, [params]);

  const onViewChanged = (event: any) => {
    localStorage.setItem("lastView", event);
    console.log(event);
  };

  const eventStyleGetter = (event: any) => {
    const isMyEvent = "123" === event.user._id || "123" === event.user.uid;

    const style = {
      backgroundColor: isMyEvent ? "#347CF7" : "#465660",
      borderRadius: "0px",
      opacity: 0.8,
      color: "chite",
    };

    return {
      style,
    };
  };

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <main className="agenda-page">
      <MenuCalendar setDate={setDate} setView={setView} setArtist={setArtist} artist={artist} view={view}/>
      <div className="agenda-page__content-agenda">
        <Calendar
          culture="es"
          localizer={localizer}
          events={myEventsList}
          startAccessor="dateInit"
          endAccessor="dateEnd"
          style={{ height: "calc(100vh - 80px)" }}
          messages={getMessagesES()}
          eventPropGetter={eventStyleGetter}
          components={{
            event: CardEvent,
          }}
          views={["month", "week", "day"]}
          view={view}
          date={date}
          onView={onViewChanged}
          onNavigate={handleNavigate}
          // toolbar={false}
        />
      </div>
      <button className="agenda-page__button-adding" onClick={handleOpenModal}>
        +
      </button>
      {openModal && (
        <Modal>
          <div className="modal-content-form">
            <form action="">
              <h2>Agenda tu cita</h2>
              <InputText
                value={dateInit}
                nameLabel="Fecha inicial"
                idInput="dateInit"
                type="text"
                onInputChange={onInputChange}
              />
              <InputText
                value={dateEnd}
                nameLabel="Fecha inicial"
                idInput="dateEnd"
                type="text"
                onInputChange={onInputChange}
              />
              <InputText
                value={title}
                nameLabel="Fecha inicial"
                idInput="title"
                type="text"
                onInputChange={onInputChange}
              />
              <InputText
                value={notes}
                nameLabel="Fecha inicial"
                idInput="notes"
                type="text"
                onInputChange={onInputChange}
              />
              <ThemeProvider theme={darkTheme}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Cita</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={appointmentType}
                    label="Age"
                    // onChange={onInputChange}
                  >
                    <MenuItem value={"Consultas Iniciales"}>
                      Consultas Iniciales
                    </MenuItem>
                    <MenuItem value={"Citas para Diseño Personalizado"}>
                      Citas para Diseño Personalizado
                    </MenuItem>
                    <MenuItem value={"Citas para Sesiones de Tatuaje"}>
                      Citas para Sesiones de Tatuaje
                    </MenuItem>
                    <MenuItem value={"Citas de Retoque"}>
                      Citas de Retoque
                    </MenuItem>
                  </Select>
                </FormControl>
              </ThemeProvider>
            </form>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default DiaryPage;
