"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { parseISO, set } from "date-fns";
import { Modal } from "@/components/atoms/modal/Modal";
import DatePicker, { registerLocale } from "react-datepicker";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  createTheme,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createAppointment__thunks } from "@/store/thunks/agenda-thunks";
import { onCloseDateModal } from "@/store/slices/uiSlice";
import { useForm } from "@/hook/useForm";
import { InputText } from "@/components/atoms/inputText";

import { es } from "date-fns/locale";

import "react-datepicker/dist/react-datepicker.css";
import "./modalFormAgenda.scss";

registerLocale("es", es);

const realTime = new Date();

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface formDataProps {
  appointmentType: string;
  description?: string;
  nameArtist: string;
  dateInit: Date | null;
  dateEnd: Date | null;
}

const initialForm = {
  appointmentType: "",
  description: "",
  nameArtist: "",
  dateInit: set(realTime, { hours: 9, minutes: 0, seconds: 0 }),
  dateEnd: set(realTime, { hours: 11, minutes: 0, seconds: 0 }),
};

export const ModalFormAgenda = () => {
  const dispatch = useAppDispatch();
  const { isLoading, activeAgenda } = useAppSelector( state => state.agenda)
  const { isDateModalOpen } = useAppSelector( state => state.ui)
  const [isAlertDates, setIsAlertDates] = useState<boolean | string>(false)
  const [isAlert, setIsAlert] = useState<boolean>(false)

  const hourMin = set(realTime, { hours: 9, minutes: 0, seconds: 0 });
  const hourMax = set(realTime, { hours: 17, minutes: 0, seconds: 0 });
  
  const {
    description,
    dateInit,
    dateEnd,
    appointmentType,
    nameArtist,
    onInputChange,
    setDateInit,
    onSelectChange,
  } = useForm<formDataProps>(activeAgenda ? activeAgenda : initialForm);

  useEffect(() => {
    setDateInit(dateInit, "dateEnd");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateInit]);

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();
    try {
      if (dateInit === dateEnd) {
        setIsAlertDates('Establece una hora inicial y final de tu cita')
      }else{
        if (appointmentType === "" || nameArtist === "") {
          setIsAlertDates('Por favor, selecciona el tipo de cita y el tutor con el que estarás.');
          return
        }
        const appointment = {
          appointmentType,
          description,
          nameArtist,
          dateInit,
          dateEnd,
        };
        
        const resp = await dispatch(createAppointment__thunks(appointment));
        setIsAlertDates(false)
        
        if (resp.status === 200) {
          setIsAlert(true)
          setTimeout(() => {
          setIsAlert(false)
          }, 2000);
        }

      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    dispatch(onCloseDateModal())
  }

  return (
    <Modal className={`${isDateModalOpen ? '--isOpen' : ''}`}>
      <div className="modal-content-form">
        <form onSubmit={(event) => handleOnSubmit(event)}>
          <button
            onClick={handleCloseModal}
            type="button"
            className="modal-content-form__button-close"
          >
            x
          </button>
          <h2 className="modal-content-form__title">Agenda tu cita</h2>

          <div className="modal-content-form__content-inputs-date">
            <DatePicker
              minDate={realTime ? new Date(realTime) : undefined}
              minTime={hourMin ? new Date(hourMin) : undefined}
              maxTime={hourMax ? new Date(hourMax) : undefined}
              selected={dateInit ? new Date(dateInit) : null}
              onChange={(date) => {
                if (date) {
                  setDateInit(date, "dateInit");
                }
              }}
              className="inputText__input"
              dateFormat="Pp"
              showTimeSelect
              locale="es"
              timeCaption="Hora"
              filterDate={date => {
                return date.getDay() !== 0;
              }}
            />

            <DatePicker
              minDate={dateInit ? new Date(dateInit) : undefined}
              maxDate={dateInit ? new Date(dateInit) : undefined}
              minTime={dateInit ? new Date(dateInit) : undefined}
              maxTime={hourMax ? new Date(hourMax) : undefined}
              selected={dateEnd ? new Date(dateEnd) : null}
              onChange={(date) => {
                if (date) {
                  setDateInit(date, "dateEnd");
                }
              }}
              className="inputText__input"
              dateFormat="Pp"
              showTimeSelect
              locale="es"
              timeCaption="Hora"
            />
          </div>

          <InputText
            nameLabel="Descripción"
            value={description}
            idInput="description"
            type="text"
            placeholder="¿Hay algo que tenemos que tener en cuenta?"
            onInputChange={onInputChange}
          />

          <ThemeProvider theme={darkTheme}>
            <FormControl fullWidth className="modal-content-form__selector">
              <InputLabel id="demo-simple-select-label">Cita</InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={appointmentType}
                label="Age"
                name="appointmentType"
                onChange={(event) =>
                onSelectChange("appointmentType", event.target.value)
                }
              >
                <MenuItem value={"Consultas Iniciales"}>
                Consulta Inicial
                </MenuItem>
                <MenuItem value={"Citas para Diseño Personalizado"}>
                Cita para Diseño Personalizado
                </MenuItem>
                <MenuItem value={"Citas para Sesiones de Tatuaje"}>
                Cita para Sesión de Tatuaje
                </MenuItem>
                <MenuItem value={"Citas de Retoque"}>Cita de Retoque</MenuItem>
              </Select>
            </FormControl>
          </ThemeProvider>

          <ThemeProvider theme={darkTheme}>
            <FormControl fullWidth className="modal-content-form__selector">
              <InputLabel id="demo-simple-select-label">Tatuadores</InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={nameArtist}
                label="Age"
                name="nameArtist"
                onChange={(event) =>
                  onSelectChange("nameArtist", event.target.value)
                } 
              >
                <MenuItem value={"Keneth"}>Keneth</MenuItem>
                <MenuItem value={"Luis"}>Luis</MenuItem>
                <MenuItem value={"Veronica"}>Veronica</MenuItem>
                <MenuItem value={"Yeison"}>Yeison</MenuItem>
                <MenuItem value={"Juan"}>Juan</MenuItem>
              </Select>
            </FormControl>
          </ThemeProvider>

          {isAlertDates && 
            <span className="modal-content-form__message-alert">
              {isAlertDates}
            </span>
          }

          <button 
            type="submit"
            className="modal-content-form__button-submit"
            disabled={isLoading}
          >
            <p>{isLoading ? 'cargando' : 'Agendar'}</p>
          </button>
        </form>
      </div>
      {isAlert &&
        <div className="modal-content-form__alert"> Éxito al guardar </div>
      }
    </Modal>
  );
};
