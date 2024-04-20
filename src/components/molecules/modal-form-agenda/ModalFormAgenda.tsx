"use client";

import React, { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { set } from "date-fns";
import { Modal } from "@/components/atoms/modal/Modal";
import DatePicker, { registerLocale } from "react-datepicker";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    createTheme,
} from "@mui/material";
import { InputText } from "@/components/atoms/inputText";
import { useForm } from "@/hook/useForm";

import { es } from "date-fns/locale";

import "react-datepicker/dist/react-datepicker.css";
import './modalFormAgenda.scss'

registerLocale("es", es);

const realTime  = new Date();

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

interface formDataProps {
    appointmentType: string;
    title: string;
    notes: string;
    dateInit: Date | null;
    dateEnd: Date | null;
}

const initialForm = {
    appointmentType: "Consultas Iniciales",
    title: "Consultas Iniciales",
    notes: "lo que sea",
    dateInit: set(realTime, { hours: 9, minutes: 0, seconds: 0 }),
    dateEnd: set(realTime, { hours: 11, minutes: 0, seconds: 0 }),
};

export const ModalFormAgenda = () => {
    const hourMin = set(realTime, { hours: 9, minutes: 0, seconds: 0 });
    const hourMax = set(realTime, { hours: 17, minutes: 0, seconds: 0 });

    const {
        title,
        notes,
        dateInit,
        dateEnd,
        appointmentType,
        onInputChange,
        setDateInit,
    } = useForm<formDataProps>(initialForm)
  
    const handleOnSubmit = (event: any) => {
        event.preventDefault();
        console.log({
        appointmentType,
        title,
        notes,
        dateInit,
        dateEnd,
        });
    };
    
    useEffect(() => {
        setDateInit(dateInit, "dateEnd")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateInit])
    

    return (
        <Modal>
            <div className="modal-content-form">
                <form onSubmit={(event) => handleOnSubmit(event)}>
                <h2 className="modal-content-form__title">Agenda tu cita</h2>
                <div className="modal-content-form__content-inputs-date">
                    <DatePicker
                        minDate={realTime}
                        minTime={hourMin}
                        maxTime={hourMax}
                        selected={dateInit}
                        onChange={(event) => {setDateInit(event, "dateInit")}}
                        className="inputText__input"
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora"
                    />

                    <DatePicker
                        minDate={dateInit}
                        maxDate={dateInit}
                        minTime={dateInit ? dateInit : undefined} 
                        maxTime={hourMax}
                        selected={dateEnd}
                        onChange={(date) => setDateInit(date, "dateEnd")}
                        className="inputText__input"
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora"
                    />
                </div>

                <InputText nameLabel="Titulo"
                    value={title}
                    idInput="title"
                    type="text"
                    onInputChange={onInputChange}
                />

                <InputText nameLabel="Descripción"
                    value={notes}
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
                        <MenuItem value={"Citas de Retoque"}>Citas de Retoque</MenuItem>
                    </Select>
                    </FormControl>
                </ThemeProvider>
                <button type="submit">Agendar</button>
                </form>
            </div>
        </Modal>
    );
};
