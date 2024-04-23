import { createSlice } from '@reduxjs/toolkit'

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
  }
});

export const { onLoading, onAddingAgenda } = agendaSlice.actions;

export default agendaSlice.reducer;