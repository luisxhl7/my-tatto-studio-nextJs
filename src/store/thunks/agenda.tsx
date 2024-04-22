import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { onLoading, onAddingAgenda } from "../slices/agendaSlice";
import { myTattoStudioApi } from "@/api";

export const getAgenda_thunks = () => {
    return async(dispatch: Dispatch, getState: () => RootState) => {
        try {
            await dispatch(onLoading())
            const resp = await myTattoStudioApi.get('/agenda');
            
            dispatch(onAddingAgenda({
                agenda: resp.data.Appointments,
            }))
        } catch (error) {
            console.log(error);
        }
    }
}
