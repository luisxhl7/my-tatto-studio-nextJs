"use client";

import { useEffect, useState } from "react";
import { useForm } from "@/hook/useForm";
import { useAppSelector } from "@/store/hooks";
import { InputText } from "@/components/atoms/input";
import "./register-page.scss";

interface formDataProps {
  email: string;
  name: string;
  lastName: string;
  numberPhone: number | undefined;
  document: number | undefined;
  password: string;
  passwordCompare: string;
}

interface Params {
  p?: string;
}

interface RegisterPageProps {
  searchParams: Params;
}

const initialForm = {
  name: "",
  lastName: "",
  numberPhone: undefined,
  document: undefined,
  email: "",
  password: "",
  passwordCompare: "",
};

const RegisterPage: React.FC<RegisterPageProps> = (props) => {
  const {
    name,
    lastName,
    numberPhone,
    document,
    email,
    password,
    passwordCompare,
    onInputChange
  } = useForm<formDataProps>(initialForm);
  const { status } = useAppSelector((state) => state.auth);
  const [haveMessage, setHaveMessage] = useState('')

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();

    const isValid = () => {
      if (
        name.trim() === "" ||
        lastName.trim() === "" ||
        !numberPhone ||
        !document ||
        email.trim() === "" ||
        password.trim() === "" ||
        passwordCompare.trim() === ""
      ) {
        setHaveMessage('Por favor, completa todos los campos')
        return false;
      }
  
      if (
        password.length <= 5 ||
        !/^[a-zA-ZÀ-ÿ\s']+$/.test(name) ||
        !/^[a-zA-ZÀ-ÿ\s']+$/.test(lastName) ||
        !/^\d{10}$/.test(numberPhone.toString()) ||
        !/^\d{9,11}$/.test(document.toString()) ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d.*\d)[A-Za-z\d]{8,}$/.test(password) ||
        !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d.*\d)[A-Za-z\d]{8,}$/.test(passwordCompare)
      ) {
        setHaveMessage('Por favor, verifica los campos ingresados.')
        return false;
      }
      if (password === passwordCompare) {
        setHaveMessage('')
        return true;
      }else{
        setHaveMessage('las Contraseñas no coinciden')
      }
    };
  
    if (isValid()) {
      console.log({
        name,
        lastName,
        numberPhone,
        document,
        email,
        password,
      });
  
    } else {
      console.log("Por favor, completa todos los campos correctamente.");
    }
  };

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
          value={name}
          idInput="name"
          onInputChange={onInputChange}
          validationRegex={/^[a-zA-ZÀ-ÿ\s']+$/}
          alertMessage="Por favor, introduce tu nombre sin caracteres especiales ni números."
          placeholder="Nombre"
        />
        <InputText
          nameLabel="Apellido:"
          type="text"
          value={lastName}
          idInput="lastName"
          onInputChange={onInputChange}
          validationRegex={/^[a-zA-ZÀ-ÿ\s']+$/}
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
          value={password}
          idInput="password"
          onInputChange={onInputChange}
          validationRegex={/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d.*\d)[A-Za-z\d]{8,}$/}
          alertMessage="La contraseña requiere: 1 mayúscula, 1 minúscula, 3 números, y mínimo 8 caracteres."
          placeholder="Ingresa tu contraseña"
        />
        <InputText
          nameLabel="Contraseña:"
          type="password"
          value={passwordCompare}
          idInput="passwordCompare"
          onInputChange={onInputChange}
          validationRegex={/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d.*\d)[A-Za-z\d]{8,}$/}
          alertMessage="La contraseña requiere: 1 mayúscula, 1 minúscula, 3 números, y mínimo 8 caracteres."
          placeholder="Repite tu contraseña"
        />
        {haveMessage && 
        <span className="register-page__form__message-alert">
          {haveMessage}
        </span>}
        <button type="submit" disabled={status === "checking"}>
          Registrar
        </button>
      </form>
    </main>
  );
};

export default RegisterPage;
