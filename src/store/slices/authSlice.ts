import { createSlice } from '@reduxjs/toolkit'

interface Auth {
  name: string,
  uid: string,
}

interface AuthState {
  status: string;
  auth: Auth | undefined;
  errorMessage?: string | undefined;
}

const initialState: AuthState = {
  status: 'checking',
  auth: undefined,
  errorMessage: undefined
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.auth = undefined;
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.auth = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.auth = undefined;
      state.errorMessage = payload;
    },
    clearError: (state) => {
      state.errorMessage = undefined;
    }
  }
});
  
export const { onChecking, onLogin, onLogout, clearError } = authSlice.actions;

export default authSlice.reducer;