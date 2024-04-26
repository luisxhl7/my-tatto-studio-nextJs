import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { clearError, onChecking, onLogin, onLogout } from "../slices/authSlice";
import { setCookie } from "@/helpers/setCookie";
import { myTattoStudioApi } from "@/api";
import { clearCookie } from "@/helpers/clearCookie";
import { RegisterUserProps } from "@/interface";

export const auth_thunks = (email: string, password:string) => {
    return async(dispatch: Dispatch, getState: () => RootState) => {
        try {
            await dispatch(onChecking())

            const resp = await myTattoStudioApi.post('/auth', {
                email, 
                password
            });

            await setCookie('token', resp.data.user.token, 7);
            await localStorage.setItem('token', resp.data.user.token);
            
            dispatch(onLogin({
                name: resp.data.user.name,
                uid: resp.data.user.uid,
            }))
            
            return resp

        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas'))
            setTimeout(() => {
                dispatch(clearError()) 
            }, 2000);
        }
            
    }
}

export const validateUser_thunks = () => {
    return async(dispatch: Dispatch, getState: () => RootState) => {
        try {
            await dispatch(onChecking())

            const token = await localStorage.getItem('token')
            
            if (!token) {
                return dispatch( onLogout(undefined) )
            }

            const { data } = await myTattoStudioApi.get('/auth/renew');
            
            await localStorage.setItem('token', data.token);
            await setCookie('token', data.token, 7);
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
            
        } catch (error) {
            localStorage.clear()
            await clearCookie('token');
            dispatch( onLogout('') )
        }
            
    }
}

export const logout_thunks = () => {
    return async(dispatch: Dispatch, getState: () => RootState) => {
        try {
            await dispatch(onChecking())
            setTimeout(() => {
                dispatch(onLogout(undefined))
                localStorage.clear()
                clearCookie('token');
            }, 1000);
            return true

        } catch (error) {
            console.log(error);
        }
            
    }
}

export const register_thunks = (user:RegisterUserProps) => {
    return async(dispatch: Dispatch, getState: () => RootState) => {
        try {
            await dispatch(onChecking())

            const resp = await myTattoStudioApi.post('/auth/register', user);

            await setCookie('token', resp.data.user.token, 7);
            await localStorage.setItem('token', resp.data.user.token);
            
            dispatch(onLogin({
                name: resp.data.user.name,
                uid: resp.data.user.uid,
            }))
            
            return resp

        } catch (error:any) {
            dispatch( onLogout('Credenciales incorrectas'))
            setTimeout(() => {
                dispatch(clearError()) 
            }, 2000);
            return error.response.data
        }
            
    }
}
