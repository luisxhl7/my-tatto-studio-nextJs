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
import { useAppDispatch } from "@/store/hooks";
import { createAppointment__thunks } from "@/store/thunks/agenda";
import { useForm } from "@/hook/useForm";
import { InputText } from "@/components/atoms/inputText";

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
    description: string;
    nameArtist: string;
    dateInit: Date | null;
    dateEnd: Date | null;
}

const initialForm = {
    appointmentType: "",
    title: "",
    description: "",
    nameArtist: '',
    dateInit: set(realTime, { hours: 9, minutes: 0, seconds: 0 }),
    dateEnd: set(realTime, { hours: 11, minutes: 0, seconds: 0 }),
};

export const ModalFormAgenda = ({setOpenModal}:any) => {
    const dispatch = useAppDispatch()

    const hourMin = set(realTime, { hours: 9, minutes: 0, seconds: 0 });
    const hourMax = set(realTime, { hours: 17, minutes: 0, seconds: 0 });
    const {
        title,
        description,
        dateInit,
        dateEnd,
        appointmentType,
        nameArtist,
        onInputChange,
        setDateInit,
        onSelectChange
    } = useForm<formDataProps>(initialForm)
  
    useEffect(() => {
        setDateInit(dateInit, "dateEnd")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateInit])

    const handleOnSubmit = async(event: any) => {
        event.preventDefault();
        try {
            const appointment = {
                appointmentType,
                title,
                description,
                nameArtist,
                dateInit,
                dateEnd,
            }
            
            const resp = await dispatch(createAppointment__thunks(appointment))
            
        } catch (error) {
            console.log(error);
        }
        
    };

    return (
        <Modal>
            <div className="modal-content-form">
                <form onSubmit={(event) => handleOnSubmit(event)}>
                    <button onClick={() => setOpenModal(false)}>x</button>
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
                        value={description}
                        idInput="description"
                        type="text"
                        onInputChange={onInputChange}
                    />
                    
                    <ThemeProvider theme={darkTheme}>
                        <FormControl fullWidth
                                className="modal-content-form__selector"
                        
                        >
                            <InputLabel id="demo-simple-select-label">
                                Cita
                            </InputLabel>
                            
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={appointmentType}
                                label="Age"
                                name="appointmentType"
                                onChange={(event) => onSelectChange( "appointmentType", event.target.value )}                    >
                                <MenuItem value={"Consultas Iniciales"}>
                                    Consulta Inicial
                                </MenuItem>
                                <MenuItem value={"Citas para Diseño Personalizado"}>
                                    Cita para Diseño Personalizado
                                </MenuItem>
                                <MenuItem value={"Citas para Sesiones de Tatuaje"}>
                                    Cita para Sesión de Tatuaje
                                </MenuItem>
                                <MenuItem value={"Citas de Retoque"}>
                                    Cita de Retoque
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </ThemeProvider>

                    <ThemeProvider theme={darkTheme}>
                        <FormControl fullWidth className="modal-content-form__selector">
                            <InputLabel id="demo-simple-select-label">
                                Tatuadores
                            </InputLabel>
                            
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={nameArtist}
                                label="Age"
                                name="nameArtist"
                                onChange={(event) => onSelectChange( "nameArtist", event.target.value )}                    >
                                <MenuItem value={"Keneth"}>
                                    Keneth
                                </MenuItem>
                                <MenuItem value={"Luis"}>
                                    Luis
                                </MenuItem>
                                <MenuItem value={"Veronica"}>
                                    Veronica
                                </MenuItem>
                                <MenuItem value={"Yeison"}>
                                    Yeison
                                </MenuItem>
                                <MenuItem value={"Juan"}>
                                    Juan
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </ThemeProvider>

                    <button type="submit">Agendar</button>
                
                </form>
            </div>
        </Modal>
    );
};
