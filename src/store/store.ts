import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import agendaReducer from "./slices/agendaSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        agenda: agendaReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
