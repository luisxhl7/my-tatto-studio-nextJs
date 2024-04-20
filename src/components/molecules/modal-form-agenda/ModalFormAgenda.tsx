"use client";

import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { addHours } from "date-fns";
import { Modal } from "@/components/atoms/modal/Modal";
import DatePicker, { registerLocale } from "react-datepicker";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    createTheme,
} from "@mui/material";
import { InputText } from "@/components/atoms/inputText";
import { useForm } from "@/hook/useForm";
import "react-datepicker/dist/react-datepicker.css";

import { es } from "date-fns/locale";

registerLocale("es", es);

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
    dateInit: new Date(),
    dateEnd: addHours(new Date(), 2),
};


export const ModalFormAgenda = () => {
    
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

    const horaMin = addHours(new Date(), 13);
    const horaMax = addHours(new Date(), 24);

    return (
        <Modal>
            <div className="modal-content-form">
                <form onSubmit={(event) => handleOnSubmit(event)}>
                <h2>Agenda tu cita</h2>
                <DatePicker
                    minDate={dateInit}
                    minTime={horaMin}
                    maxTime={horaMax}
                    selected={dateInit}
                    onChange={(event) => setDateInit(event, "dateInit")}
                    className="inputText__input"
                    dateFormat="Pp"
                    showTimeSelect
                    locale="es"
                    timeCaption="Hora"
                />

                <DatePicker
                    minDate={dateInit}
                    maxDate={dateInit}
                    minTime={dateInit ? dateInit : undefined} // Hora mínima igual a la hora seleccionada en dateInit
                    maxTime={horaMax} // Utilizar la hora máxima calculada anteriormente
                    selected={dateEnd}
                    onChange={(date) => setDateInit(date, "dateEnd")}
                    className="inputText__input"
                    dateFormat="Pp"
                    showTimeSelect
                    locale="es"
                    timeCaption="Hora"
                />

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
