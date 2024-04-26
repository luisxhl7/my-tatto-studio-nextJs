import { AgendaStateProps } from '@/interface';
import { createSlice } from '@reduxjs/toolkit'

const initialState: AgendaStateProps = {
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
    onUpdateAgenda: (state, { payload }) => {
      console.log(state.agenda);
      // state.agenda = payload.agenda;
      // state.isLoading = false;
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

export const { onLoading, onSetActiveAgenda, onAddingAgenda, onAddNewAgenda, onUpdateAgenda } = agendaSlice.actions;

export default agendaSlice.reducer;