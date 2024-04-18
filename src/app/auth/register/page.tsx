"use client";

import { useForm } from "@/hook/useForm";
import { useRouter } from "next/navigation";
import { auth_thunks } from "@/store/thunks/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import "./register-page.scss";
import { InputText } from "@/components/atoms/input";

interface formDataProps {
    nameUser: string;
    lasNameUser: string;
    numberPhone: number;
    document: number;
    email: string;
    password1: string;
    password2: string;
}

const initialForm = {
    nameUser: '',
    lasNameUser: '',
    numberPhone: 0,
    document: 0,
    email: '',
    password1: '',
    password2: '',
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
    const { nameUser, lasNameUser, numberPhone, document, email, password1, password2, onInputChange } = useForm<formDataProps>(initialForm);
    const { status } = useAppSelector( state => state.auth);
    
    const handleOnSubmit = async(event:any) => {
        event.preventDefault()

        const resp = await dispatch(auth_thunks(email, password1))
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
            console.log(error);
        }
    }

    return (
        <main className="register-page" onSubmit={(event) => handleOnSubmit(event)}>
            <h1>Regístrate ahora</h1>
            <form  className="register-page__form">
                <InputText type='text' value={nameUser} idInput='nameUser' onInputChange={onInputChange} nameLabel='Nombre:'/>
                <InputText type='text' value={lasNameUser} idInput='lasNameUser' onInputChange={onInputChange} nameLabel='Apellidos:'/>
                <InputText type='number' value={numberPhone} idInput='numberPhone' onInputChange={onInputChange} nameLabel='Teléfono:'/>
                <InputText type='number' value={document} idInput='document' onInputChange={onInputChange} nameLabel='Documento:'/>
                <InputText type='email' value={email} idInput='email' onInputChange={onInputChange} nameLabel='Email:'/>
                <InputText type='password' value={password1} idInput='password1' onInputChange={onInputChange} nameLabel='Contraseña:'/>
                <InputText type='password' value={password2} idInput='password2' onInputChange={onInputChange} nameLabel='Contraseña:'/>
            
                <button type="submit" disabled={status === 'checking'}>
                    Registrar
                </button>
            
            </form>
        </main>
    );
}

export default RegisterPage