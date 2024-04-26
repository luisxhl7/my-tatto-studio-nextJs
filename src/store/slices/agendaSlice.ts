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
    onDeleteAgenda: (state) => {
      if (state.activeAgenda !== null) {
        const activeAgendaId = state.activeAgenda.id;
        state.agenda = state.agenda.filter(
          (event) => event.id !== activeAgendaId
        );
        state.activeAgenda = null;
      }
    }
    
  }
});

export const { onLoading, onSetActiveAgenda, onAddingAgenda, onAddNewAgenda, onUpdateAgenda, onDeleteAgenda } = agendaSlice.actions;

export default agendaSlice.reducer;