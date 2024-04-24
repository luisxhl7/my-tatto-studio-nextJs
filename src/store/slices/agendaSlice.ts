import { createSlice } from '@reduxjs/toolkit'

interface Agenda {
  title: string;
  nameArtist: string;
  appointmentType: string;
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
  activeAgenda: Agenda | null,
}

const initialState: AgendaState = {
  agenda: [],
  errorMessage: undefined,
  isLoading: false,
  activeAgenda: null,
};

export const agendaSlice = createSlice({
  name: 'agenda',
  initialState,
  reducers: {
    onLoading: (state) => {
      state.isLoading = true;
    },
    onSetActiveAgenda: (state, { payload }) => {
      state.activeAgenda = payload;
    },
    onAddingAgenda: (state, { payload }) => {
      state.agenda = payload.agenda;
      state.isLoading = false;
    },
    onAddNewAgenda: (state, { payload }) => {
      state.agenda.push(payload);
      state.isLoading = false;
    },
  }
});

export const { onLoading, onSetActiveAgenda, onAddingAgenda, onAddNewAgenda } = agendaSlice.actions;

export default agendaSlice.reducer;