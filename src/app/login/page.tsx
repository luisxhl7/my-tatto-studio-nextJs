"use client";

import { useForm } from "@/hook/useForm";
import "./login-page.scss";
import { setCookie } from "@/helpers/setCookie";

interface formDataProps {
    email: string;
    password: string;
}

const initialForm = {
    email: "",
    password: "",
};

export default function Home() {
    const { email, password, onInputChange } = useForm<formDataProps>(initialForm);
    
    const handleOnSubmit = async(event:any) => {
        event.preventDefault()
        console.log({email, password});
        await setCookie('token', 'valor de la cookie', 7);
        location.reload();

    }

  return (
    <main className="login-page" onSubmit={(event) => handleOnSubmit(event)}>
        <h1>Inicia sesión</h1>
        <form  className="login-page__form">
            <input type="email" className="login-page__form__input" name="email" value={email} onChange={onInputChange}/>
            <input type="password" className="login-page__form__input" name="password" value={password} onChange={onInputChange}/>
            <button type="submit">Iniciar sesión</button>
        </form>
    </main>
  );
}
