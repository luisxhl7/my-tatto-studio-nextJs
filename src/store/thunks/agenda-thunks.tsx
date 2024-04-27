import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  onLoading,
  onAddingAgenda,
  onAddNewAgenda,
  onUpdateAgenda,
  onDeleteAgenda,
} from "../slices/agendaSlice";
import MyTattoStudioService from "@/services/my-tatto-studio";
import { FormDataProps } from "@/interface";

export const getAgenda_thunks = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      await dispatch(onLoading());

      const { data } = await MyTattoStudioService.getAgenda();

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

export const getAgendaByTattooArtist_thunks = (id:string) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      await dispatch(onLoading());

      const { data } = await MyTattoStudioService.getAgendaByTattooArtist(id);

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

export const createAppointment__thunks = (appointment: FormDataProps) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      await dispatch(onLoading());

      const { auth } = await getState();

      if (auth.user && "name" in auth.user) {
        const appointmentData = {
          ...appointment,
          title: `${appointment.nameArtist} - ${auth.user.name}`,
        };

        const { data } = await MyTattoStudioService.createAppointment(appointmentData);
        
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
      const { auth } = await getState();

      await dispatch(onLoading());

      if (auth.user && "name" in auth.user) {
        const mutableActiveAgenda = { ...activeAgenda,
          title: `${appointment.nameArtist} - ${auth.user.name}`,
        };
        Object.keys(appointment).forEach((key) => {
          if (mutableActiveAgenda.hasOwnProperty(key)) {
            mutableActiveAgenda[key] = appointment[key];
          }
        });
  
        const {data} = await MyTattoStudioService.updateAppointment(mutableActiveAgenda.id, mutableActiveAgenda)
        
        dispatch( onUpdateAgenda({ ...mutableActiveAgenda }) );
  
        return data
      }
      
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAppointment__thunks = (id:string) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      await dispatch(onLoading());
      
      const { data } = await MyTattoStudioService.deleteAppointment(id)
      
      await dispatch(onDeleteAgenda())
    
      return data;

    } catch (error) {
      console.log(error);
    }
  };
};