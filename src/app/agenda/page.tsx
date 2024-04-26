"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, View } from "react-big-calendar";
import { registerLocale } from "react-datepicker";
import { parseISO, set } from "date-fns";
import { getMessagesES, localizer } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getAgenda_thunks } from "@/store/thunks/agenda-thunks";
import { MenuCalendar } from "@/components/molecules/menu-calendar";
import { CardEvent } from "@/components/molecules/card-event/Card-event";
import { ModalFormAgenda } from "@/components/molecules/modal-form-agenda/ModalFormAgenda";

import { es } from "date-fns/locale";

import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./agenda-page.scss";
import { onSetActiveAgenda } from "@/store/slices/agendaSlice";
import { onOpenDateModal } from "@/store/slices/uiSlice";

registerLocale("es", es);

interface Params {
  id?: string;
}

interface DiaryPageProps {
  params: Params;
}

const DiaryPage: React.FC<DiaryPageProps> = (props) => {
  const dispatch = useAppDispatch()
  const authState = useAppSelector( state => state.auth)
  const { agenda, isLoading } = useAppSelector( state => state.agenda)
  const [agenda2, setAgenda2] = useState<any>([]);
  const { params } = props;
  const router = useRouter();
  const [view, setView] = useState<View>("month");
  const [date, setDate] = useState(new Date());
  const [artist, setArtist] = useState<string>(params.id ? params.id : "todos");
  const user = authState.user;

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

  useEffect(() => {

    const updatedAgenda = agenda.map(event => {
      if (typeof event.dateInit === 'string' && typeof event.dateEnd === 'string') {
        return {
          ...event,
          dateInit: parseISO(event.dateInit),
          dateEnd: parseISO(event.dateEnd)
        };
      }
      return event;
    });
    setAgenda2(updatedAgenda)
  }, [agenda]);

  const onViewChanged = (event: any) => {
    localStorage.setItem("lastView", event);
  };

  const eventStyleGetter = (event: any) => {
    let style
    if (user) {
      const isMyEvent = user.uid === event.user._id || user.uid === event.user.uid;
      style = {
        backgroundColor: isMyEvent ? "#347CF7" : "#465660",
        borderRadius: "0px",
        opacity: 0.8,
        color: "chite",
      };

    }
    return {
      style,
    };
  };

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  const handleOpenModal = async() => {
    await dispatch(onSetActiveAgenda( null ))
    dispatch(onOpenDateModal())
  };

  const HandleOnSelect = async(event:any) => {
    const updatedEvent = await{
      ...event,
      dateInit: event.dateInit instanceof Date ? event.dateInit.toISOString() : event.dateInit,
      dateEnd: event.dateEnd instanceof Date ? event.dateEnd.toISOString() : event.dateEnd
    };
  
    dispatch(onSetActiveAgenda( updatedEvent ))
  }

  const onDoubleClick = () => {
    dispatch(onOpenDateModal())
  }

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
          events={isLoading ? [] : agenda2}
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
          onSelectEvent={HandleOnSelect}
          onDoubleClickEvent={onDoubleClick}
        />
      </div>
      
      <ModalFormAgenda/>

      <button className="agenda-page__button-adding" onClick={handleOpenModal}>
        +
      </button>
    </main>
  );
};

export default DiaryPage;
