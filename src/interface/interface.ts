import { ReactNode } from "react";
import { Settings } from "react-slick";

export interface ImageItem {
    image: string;
    name: string;
}

export interface TattooArtist {
    name: string;
    photo: string;
    url: string;
    description: string;
    portafolio: string[];
    disenos: string[];
    redesSociales: string[];
    logros: string[];
}

export interface User {
    name: string;
    uid: string;
}

export interface Agenda {
    title: string;
    nameArtist: string;
    appointmentType: string;
    description: string;
    dateInit: Date;
    dateEnd: Date;
    user: {
      uid: string;
      name: string;
    };
    id: string;
}

export interface RegisterUserProps {
    name: string;
    lastName: string;
    numberPhone: number | undefined;
    document: number | undefined;
    email: string;
    password: string;
}

export interface ParamsProps {
    p?: string;
    id?: string;
}

export interface RegisterPageProps {
    searchParams: ParamsProps;
}

export interface LoginPageProps {
    searchParams: ParamsProps;
}

export interface DiaryPageProps {
    params: ParamsProps;
}

// Props Slices

export interface AuthStateProps {
    status: string;
    user: User | undefined;
    errorMessage?: string | undefined;
}

export interface AgendaStateProps {
    agenda: Agenda[];
    errorMessage?: string | undefined;
    isLoading: boolean
    activeAgenda: Agenda | null,
}

// Props Forms

export interface FormRegisterUserProps {
    email: string;
    name: string;
    lastName: string;
    numberPhone: number | undefined;
    document: number | undefined;
    password: string;
    passwordCompare: string;
}

export interface FormDataProps {
    appointmentType: string;
    description?: string;
    nameArtist: string;
    dateInit: Date | null;
    dateEnd: Date | null;
}

export interface FormLoginUser {
    email: string;
    password: string;
}

// Props Components

export interface BannerProps {
    imagesList?: ImageItem[] | string;
    title?: string;
}

export interface CardOfInfoDropdownProps {
    title: string;
    children: ReactNode;
}

export interface ModalImageProps {
    handleOpenModal: (idx?: number) => void;
    images: string[];
    actualImage: number;
    setActualImage: (index: number) => void;
}

export interface InputTextProps {
    value: string | number | undefined;
    nameLabel: string;
    idInput: string;
    type: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    validationRegex?: RegExp;
    alertMessage?: string;
    autoComplete?: string;
    placeholder?: string;
}

export interface ModalProps {
    children: ReactNode;
    className: String;
}

export interface SimpleSliderProps {
    children: ReactNode;
    customSettings?: Settings;
}