"use client";

import { useForm } from "@/hook/useForm";
import { useRouter } from "next/navigation";
import { auth_thunks } from "@/store/thunks/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import "./login-page.scss";

interface formDataProps {
    email: string;
    password: string;
}

const initialForm = {
    email: "",
    password: "",
};

export default function Home() {
    const dispatch = useAppDispatch()
    const navigate = useRouter();
    const { email, password, onInputChange } = useForm<formDataProps>(initialForm);
    const { status } = useAppSelector( state => state.auth)
    
    const handleOnSubmit = async(event:any) => {
        event.preventDefault()
        
        const resp = await dispatch(auth_thunks(email, password))
        try {
            if ( resp?.status === 200 ) {
                navigate.push('/')
                navigate.refresh()
            }
        } catch (error) {
            
        }
    }

  return (
    <main className="login-page" onSubmit={(event) => handleOnSubmit(event)}>
        <h1>Inicia sesión</h1>
        <form  className="login-page__form">
            <input type="email" className="login-page__form__input" name="email" value={email} onChange={onInputChange}/>
            <input type="password" className="login-page__form__input" name="password" value={password} onChange={onInputChange}/>
            <button type="submit" disabled={status === 'checking'}>Iniciar sesión</button>
        </form>
    </main>
  );
}
