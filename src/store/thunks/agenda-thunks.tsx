import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  onLoading,
  onAddingAgenda,
  onAddNewAgenda,
  onUpdateAgenda,
} from "../slices/agendaSlice";
import { myTattoStudioApi } from "@/api";

interface User {
  name: string;
  uid: string;
}

interface AuthState {
  status: string;
  user: User | {};
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

      if (auth.user && "name" in auth.user) {
        const appointmentData = {
          ...appointment,
          title: `${appointment.nameArtist} - ${auth.user.name}`,
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

export const updateAppointment__thunks = (appointment: any, activeAgenda:any) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      await dispatch(onLoading());
      
      const { auth } = getState() as { auth: AuthState };



      const mutableActiveAgenda = { ...activeAgenda };

      Object.keys(appointment).forEach((key) => {
        if (mutableActiveAgenda.hasOwnProperty(key)) {
          mutableActiveAgenda[key] = appointment[key];
        }
      });


      // const resp = await myTattoStudioApi.put(`/agenda/${mutableActiveAgenda.id}`, mutableActiveAgenda)
      dispatch( onUpdateAgenda({ ...mutableActiveAgenda }) );

      // console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
};
