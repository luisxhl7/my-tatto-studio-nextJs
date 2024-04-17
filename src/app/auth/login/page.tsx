"use client";

import { useForm } from "@/hook/useForm";
import { useRouter } from "next/navigation";
import { auth_thunks } from "@/store/thunks/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import "./login-page.scss";
import Link from "next/link";

interface formDataProps {
    email: string;
    password: string;
}

const initialForm = {
    email: "",
    password: "",
};

interface Params {
    p?: string;
}

interface LoginPageProps {
    searchParams: Params;
}


const LoginPage: React.FC<LoginPageProps>  = (props) => {
    
    const dispatch = useAppDispatch()
    const navigate = useRouter();
    const { email, password, onInputChange } = useForm<formDataProps>(initialForm);
    const { status } = useAppSelector( state => state.auth)
    
    const handleOnSubmit = async(event:any) => {
        event.preventDefault()
        
        const resp = await dispatch(auth_thunks(email, password))
        try {
            if ( resp?.status === 200 ) {
                if (props.searchParams.p) {
                    navigate.push(props.searchParams.p)
                    navigate.refresh()
                }else{
                    navigate.push('/')
                    navigate.refresh()
                }
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
            <div className="login-page__content-link-register">
                <span>
                    ¿Aún no estás registrado?{' '}
                </span>
                <Link href="/auth/register" className="login-page__link-register">
                    Crear cuenta nueva
                </Link>
            </div>

        </form>
    </main>
  );
}

export default LoginPage