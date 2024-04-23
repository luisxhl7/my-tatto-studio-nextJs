import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { onLoading, onAddingAgenda, onAddNewAgenda } from "../slices/agendaSlice";
import { myTattoStudioApi } from "@/api";
import { convertEventsToDateEvents } from "@/helpers/convertEventsToDateEvents";

export const getAgenda_thunks = () => {
    return async(dispatch: Dispatch, getState: () => RootState) => {
        try {
            await dispatch(onLoading())
            const { data } = await myTattoStudioApi.get('/agenda');
            
            const agenda = convertEventsToDateEvents(data.Appointments)

            dispatch(onAddingAgenda({
                agenda: agenda
            }))
            
        } catch (error) {
            console.log(error);
        }
    }
}

export const createAppointment__thunks = (appointment:any) => {
    return async(dispatch: Dispatch, getState: () => RootState) => {
        try {
            await dispatch(onLoading())
            
            const resp = await myTattoStudioApi.post('/agenda', appointment);
            
            await dispatch(onAddNewAgenda({ ...resp.data.Appointment }))
            
        } catch (error) {
            console.log(error);
        }
    }
}