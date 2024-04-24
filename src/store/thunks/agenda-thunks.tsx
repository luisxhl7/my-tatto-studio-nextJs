import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  onLoading,
  onAddingAgenda,
  onAddNewAgenda,
} from "../slices/agendaSlice";
import { myTattoStudioApi } from "@/api";
import { convertEventsToDateEvents } from "@/helpers/convertEventsToDateEvents";

interface Auth {
  name: string;
  uid: string;
}

interface AuthState {
  status: string;
  auth: Auth | {};
  errorMessage?: string | undefined;
}

export const getAgenda_thunks = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      await dispatch(onLoading());
      const { data } = await myTattoStudioApi.get("/agenda");

      const agenda = data.Appointments;
      
      dispatch(
        onAddingAgenda({
          agenda: agenda,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const createAppointment__thunks = (appointment: any) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      await dispatch(onLoading());

      const { auth } = getState() as { auth: AuthState };

      if (auth.auth && "name" in auth.auth) {
        const appointmentData = {
          ...appointment,
          title: `${appointment.nameArtist} - ${auth.auth.name}`,
        };

        const { data } = await myTattoStudioApi.post("/agenda", appointmentData);
        await dispatch(onAddNewAgenda({ ...data.Appointment }));
        
        return data
        
      } else {
        console.log("Nombre de usuario no disponible");
      }

    } catch (error) {
      console.log(error);
    }
  };
};
