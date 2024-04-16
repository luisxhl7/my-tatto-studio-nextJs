"use client";

import { Calendar, View } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { CardEvent } from "@/components/molecules/card-event/Card-event";
import { getMessagesES, localizer } from "@/helpers";
import React, { useEffect, useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
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
import Tatuador from "../tatuador/[id]/page";
import { ThemeProvider } from "@emotion/react";
import { useRouter } from "next/navigation";

interface Params {
  id?: string;
}

interface DiaryPageProps {
  params: Params;
}

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
  const [view, setView] = useState<View>("month");
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);

  const [age, setAge] = React.useState(localStorage.getItem('tatuador') || "todos");
  const { params } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const router = useRouter();

  useEffect(() => {
    if (age !== "todos") {
      localStorage.setItem('tatuador', age)
      router.push(`/agenda/${age}`);
    }else{
      localStorage.setItem('tatuador', age)
      router.push(`/agenda`);
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age]);

  useEffect(() => {
    if (params.id) {
      console.log(`consulta personalizada de ${params.id}`);
    } else {
      console.log('consulta general');
    }
  }, [params])
  

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

  const handlePrev = () => {
    if (view === "month") {
      setDate(
        (prevDate) =>
          new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
      );
    } else if (view === "week") {
      setDate(
        (prevDate) =>
          new Date(
            prevDate.getFullYear(),
            prevDate.getMonth(),
            prevDate.getDate() - 7
          )
      );
    } else if (view === "day") {
      setDate(
        (prevDate) =>
          new Date(
            prevDate.getFullYear(),
            prevDate.getMonth(),
            prevDate.getDate() - 1
          )
      );
    }
  };

  const handleNext = () => {
    if (view === "month") {
      setDate(
        (prevDate) =>
          new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
      );
    } else if (view === "week") {
      setDate(
        (prevDate) =>
          new Date(
            prevDate.getFullYear(),
            prevDate.getMonth(),
            prevDate.getDate() + 7
          )
      );
    } else if (view === "day") {
      setDate(
        (prevDate) =>
          new Date(
            prevDate.getFullYear(),
            prevDate.getMonth(),
            prevDate.getDate() + 1
          )
      );
    }
  };

  const handleInitValue = () => {
    setDate(new Date());
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
      <div className="agenda-page__menu">
        <div className="agenda-page__menu__content-arrows">
          <button
            onClick={handlePrev}
            className="agenda-page__menu__content-arrows__button-arrow"
          >
            <KeyboardArrowLeft />
          </button>
          <button onClick={handleInitValue}>Hoy</button>
          <button
            onClick={handleNext}
            className="agenda-page__menu__content-arrows__button-arrow"
          >
            <KeyboardArrowRight />
          </button>
        </div>
        <div className="agenda-page__menu__content-date">
          <button
            onClick={() => setView("day")}
            className="agenda-page__menu__content-date__btn"
          >
            Día
          </button>
          <button
            onClick={() => setView("week")}
            className="agenda-page__menu__content-date__btn"
          >
            Semana
          </button>
          <button
            onClick={() => setView("month")}
            className="agenda-page__menu__content-date__btn"
          >
            Mes
          </button>
        </div>
        <div className="agenda-page__menu__content-selected">
          <ThemeProvider theme={darkTheme}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tatuador</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={"todos"}>Todos</MenuItem>
                <MenuItem value={"keneth"}>Keneth</MenuItem>
                <MenuItem value={"luis"}>Luis</MenuItem>
                <MenuItem value={"veronica"}>Veronica</MenuItem>
                <MenuItem value={"yeison"}>Yeison</MenuItem>
                <MenuItem value={"juan"}>Juan</MenuItem>
              </Select>
            </FormControl>
          </ThemeProvider>
        </div>
      </div>
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
          <div>
            <form action="">
              <h2>Cita</h2>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </form>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default DiaryPage;
