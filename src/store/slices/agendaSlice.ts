import { createSlice } from '@reduxjs/toolkit'
import { parseISO } from 'date-fns';

interface Agenda {
  title: string;
  nameArtist: string;
  description: string;
  dateInit: Date;
  dateEnd: Date;
  user: {
    uid: string;
    name: string;
  };
  id: string;
}

interface AgendaState {
  agenda: Agenda[];
  errorMessage?: string | undefined;
  isLoading: boolean
}

const initialState: AgendaState = {
  agenda: [],
  errorMessage: undefined,
  isLoading: false
};

export const agendaSlice = createSlice({
  name: 'agenda',
  initialState,
  reducers: {
    onLoading: (state) => {
      state.isLoading = true;
    },
    onAddingAgenda: (state, { payload }) => {
      state.agenda = payload.agenda;
      state.isLoading = false;
    },
    onAddNewAgenda: (state, { payload }) => {
      console.log(payload);
      payload.dateInit = parseISO(payload.dateInit);
      payload.dateEnd = parseISO(payload.dateEnd);
      state.agenda.push(payload);
      state.isLoading = false;
    },
  }
});

export const { onLoading, onAddingAgenda, onAddNewAgenda } = agendaSlice.actions;

export default agendaSlice.reducer;