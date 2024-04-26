import { createSlice } from '@reduxjs/toolkit'

interface User {
  name: string,
  uid: string,
}

interface AuthState {
  status: string;
  user: User | undefined;
  errorMessage?: string | undefined;
}

const initialState: AuthState = {
  status: 'checking',
  user: undefined,
  errorMessage: undefined
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = undefined;
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = undefined;
      state.errorMessage = payload;
    },
    clearError: (state) => {
      state.errorMessage = undefined;
    }
  }
});
  
export const { onChecking, onLogin, onLogout, clearError } = authSlice.actions;

export default authSlice.reducer;