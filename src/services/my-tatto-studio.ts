import { myTattoStudioApi } from "@/api";

class MyTattoStudioService {
  
  static getAgendaByTattooArtist = (id:string) => {
    return myTattoStudioApi.get(`/agenda/${id}`);
  }

  static getAgenda = () => {
    return myTattoStudioApi.get("/agenda");
  }

  static createAppointment = (appointmentData:any) => {
    return myTattoStudioApi.post("/agenda", appointmentData);
  }

  static updateAppointment = (id:string, appointment:any) => {
    return myTattoStudioApi.put(`/agenda/${id}`, appointment);
  }

  static deleteAppointment = (id:string) => {
    return myTattoStudioApi.delete(`/agenda/${id}`);
  }
}

export default MyTattoStudioService;