"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, View } from "react-big-calendar";
import { registerLocale } from "react-datepicker";
import { set } from "date-fns";
import { getMessagesES, localizer } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getAgenda_thunks } from "@/store/thunks/agenda";
import { MenuCalendar } from "@/components/molecules/menu-calendar";
import { CardEvent } from "@/components/molecules/card-event/Card-event";
import { ModalFormAgenda } from "@/components/molecules/modal-form-agenda/ModalFormAgenda";

import { es } from "date-fns/locale";

import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./agenda-page.scss";

registerLocale("es", es);

interface Params {
  id?: string;
}

interface DiaryPageProps {
  params: Params;
}

const DiaryPage: React.FC<DiaryPageProps> = (props) => {
  const dispatch = useAppDispatch()
  const { agenda, isLoading } = useAppSelector( state => state.agenda)
  const { params } = props;
  const router = useRouter();
  const [view, setView] = useState<View>("month");
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);
  const [artist, setArtist] = useState<string>(params.id ? params.id : "todos");
  
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
      dispatch(getAgenda_thunks())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const realTime  = new Date();
  const hourMin = set(realTime, { hours: 9, minutes: 0, seconds: 0 });
  const hourMax = set(realTime, { hours: 18, minutes: 0, seconds: 0 });
  
  return (
    <main className="agenda-page">
      <MenuCalendar
        setDate={setDate}
        setView={setView}
        setArtist={setArtist}
        artist={artist}
        view={view}
      />

      <div className="agenda-page__content-agenda">
        <Calendar
          culture="es"
          localizer={localizer}
          events={isLoading ? [] : agenda}
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
          min={hourMin}
          max={hourMax}
        />
      </div>
      
      {openModal && (
        <ModalFormAgenda setOpenModal={setOpenModal}/>
      )}

      <button className="agenda-page__button-adding" onClick={handleOpenModal}>
        +
      </button>
    </main>
  );
};

export default DiaryPage;
