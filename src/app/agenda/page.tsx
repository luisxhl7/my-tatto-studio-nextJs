'use client'

import { Calendar, View } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours, format } from 'date-fns';
import { CardEvent } from "@/components/molecules/card-event/Card-event";
import { getMessagesES, localizer } from "@/helpers";
import { useState } from "react";
import './agenda-page.scss'
import { Modal } from "@/components/atoms/modal/Modal";

interface Params {
  id?: string;
}

interface DiaryPageProps {
  params: Params;
}

const myEventsList = [
  {
    title: 'cumpleaños',
    notes: 'cumpleaños de fulano',
    dateInit: new Date(), 
    dateEnd: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Fernando'
    }
  },
  {
    title: 'cumpleaños',
    notes: 'cumpleaños de fulano',
    dateInit: new Date(),
    dateEnd: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Fernando'
    }
  },
];

const DiaryPage: React.FC<DiaryPageProps> = (props) => {
  const [view, setView] = useState<View>('month');
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);

  // const { params } = props;
  // if (params.id) {
  //   console.log('consulta personalizada');
  // } else {
  //   console.log('consulta general');
  // }

  const onViewChanged = (event:any) => {
    localStorage.setItem('lastView', event)
    console.log(event);
  }

  const eventStyleGetter = (event:any) => {
    
    const isMyEvent = ('123' === event.user._id) || ('123' === event.user.uid)

    const style ={
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'chite'
    }

    return {
      style
    }
  }

  const handlePrev = () => {
    if (view === 'month') {
      setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    } else if (view === 'week') {
      setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() - 7));
    } else if (view === 'day') {
      setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() - 1));
    }
  };

  const handleNext = () => {
    if (view === 'month') {
      setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    } else if (view === 'week') {
      setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 7));
    } else if (view === 'day') {
      setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 1));
    }
  };

  const handleInitValue = () => {
    setDate(new Date());
  }

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };
  
  const handleOpenModal = () => {
    setOpenModal(true)
  }

  return (
    <main className="agenda-page">
      <div className="agenda-page__menu"> 
        <div className="agenda-page__menu__content-arrows">
          <button onClick={handlePrev}>{'<'}</button>
          <button onClick={handleInitValue}>Hoy</button>
          <button onClick={handleNext}>{'>'}</button>
        </div>
        <button onClick={() => setView('month')} className="agenda-page__menu__btn">Mes</button>
        <button onClick={() => setView('week')} className="agenda-page__menu__btn">Semana</button>
        <button onClick={() => setView('day')} className="agenda-page__menu__btn">Día</button>

        <label htmlFor="selectArtist">
          Tatuador
        </label>
        <select name="" id="selectArtist">
          <option value="Luis">Luis</option>
          <option value="Keneth">Keneth</option>
          <option value="Veronica">Veronica</option>
          <option value="Yeison">Yeison</option>
          <option value="Juan">Juan</option>
        </select>
      </div>
      <div className="agenda-page__content-agenda">
        <Calendar
          culture='es'
          localizer={localizer}
          events={myEventsList}
          startAccessor="dateInit"
          endAccessor="dateEnd"
          style={{ height: 'calc(100vh - 80px)'}}
          messages={ getMessagesES() }
          eventPropGetter={eventStyleGetter}
          components={{
            event: CardEvent
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
      {
        openModal &&
        <Modal>
          <div>
            <form action="" >
              <h2>Cita</h2>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </form>
          </div>
        </Modal>
      }
    </main>
  );
}

export default DiaryPage;
