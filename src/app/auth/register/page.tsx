"use client";

import { useForm } from "@/hook/useForm";
import { useAppSelector } from "@/store/hooks";
import { InputText } from "@/components/atoms/input";
import "./register-page.scss";
import { useEffect } from "react";

interface formDataProps {
  email: string;
  nameUser: string;
  lasNameUser: string;
  numberPhone: number | undefined;
  document: number | undefined;
  password1: string;
  password2: string;
}

interface Params {
  p?: string;
}

interface RegisterPageProps {
  searchParams: Params;
}

const initialForm1 = {
  nameUser: "",
  lasNameUser: "",
  numberPhone: undefined,
  document: undefined,
  email: "",
  password1: "",
  password2: "",
};

const RegisterPage: React.FC<RegisterPageProps> = (props) => {
  const {
    nameUser,
    lasNameUser,
    numberPhone,
    document,
    email,
    password1,
    password2,
    onInputChange,
    onResetForm
  } = useForm<formDataProps>(initialForm1);
  const { status } = useAppSelector((state) => state.auth);

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();
    console.log({
      nameUser,
      lasNameUser,
      numberPhone,
      document,
      email,
      password1,
      password2,
    });
  };
  useEffect(() => {
    onResetForm()
  }, [])
  

  return (
    <main className="register-page">
      <h1>Regístrate ahora</h1>
      <form
        className="register-page__form"
        autoComplete="off"
        onSubmit={(event) => handleOnSubmit(event)}
      >
        <InputText
          nameLabel="Nombre:"
          type="text"
          value={nameUser}
          idInput="nameUser"
          onInputChange={onInputChange}
          validationRegex={/^[a-zA-ZÀ-ÿ']+$/}
          alertMessage="Por favor, introduce tu nombre sin caracteres especiales ni números."
          placeholder="Nombre"
        />
        <InputText
          nameLabel="Apellidos:"
          type="text"
          value={lasNameUser}
          idInput="lasNameUser"
          onInputChange={onInputChange}
          validationRegex={/^[a-zA-ZÀ-ÿ']+$/}
          alertMessage="Por favor, introduce tu apellido sin caracteres especiales ni números."
          placeholder="Apellido"
        />
        <InputText
          nameLabel="Teléfono:"
          type="number"
          value={numberPhone}
          idInput="numberPhone"
          onInputChange={onInputChange}
          validationRegex={/^\d{10}$/}
          alertMessage="El número de teléfono debe contener exactamente 10 dígitos."
          placeholder="1234567890"
        />
        <InputText
          nameLabel="Documento:"
          type="number"
          value={document}
          idInput="document"
          onInputChange={onInputChange}
          validationRegex={/^\d{9,11}$/}
          alertMessage="Por favor, ingresa un número de documento válido."
          placeholder="1234567890"
        />
        <InputText
          nameLabel="Email:"
          type="email"
          value={email}
          idInput="email"
          onInputChange={onInputChange}
          validationRegex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
          alertMessage="Por favor, ingresa un correo electrónico válido."
          placeholder="Nombre@example.com"
        />
        <InputText
          nameLabel="Contraseña:"
          type="password"
          value={password1}
          idInput="password1"
          onInputChange={onInputChange}
          placeholder="Ingresa tu contraseña"
        />
        <InputText
          nameLabel="Contraseña:"
          type="password"
          value={password2}
          idInput="password2"
          onInputChange={onInputChange}
          placeholder="Repite tu contraseña"
        />

        <button type="submit" disabled={status === "checking"}>
          Registrar
        </button>
      </form>
    </main>
  );
};

export default RegisterPage;
