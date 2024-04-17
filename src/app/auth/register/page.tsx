"use client";

import { useForm } from "@/hook/useForm";
import { useRouter } from "next/navigation";
import { auth_thunks } from "@/store/thunks/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import "./register-page.scss";

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

interface RegisterPageProps {
    searchParams: Params;
}


const RegisterPage: React.FC<RegisterPageProps>  = (props) => {
    
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
    <main className="register-page" onSubmit={(event) => handleOnSubmit(event)}>
        <h1>Regístrate ahora</h1>
        <form  className="register-page__form" >
            <input type="email" className="register-page__form__input" name="email" value={email} onChange={onInputChange}/>
            <input type="password" className="register-page__form__input" name="password" value={password} onChange={onInputChange}/>
            <button type="submit" disabled={status === 'checking'}>Registrar</button>
        </form>
    </main>
  );
}

export default RegisterPage