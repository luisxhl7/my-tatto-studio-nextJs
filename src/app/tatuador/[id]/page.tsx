'use client'

import { useEffect, useState } from "react";
import { Banner } from "@/components/molecules/banner";
import { tattooArtist } from "@/data/tattoo-artist";
import './tatuador-page.scss'

interface TatuadorPageProps {
    name: string;
    photo: string;
    url: string;
    description: string;
    portafolio: string[];
    redesSociales: string[];
    logros: string[];
}

interface PageParams {
    id: string;
}

const Page = ({params}: {params: PageParams}) => {
    
    const [tatuador, setTatuador] = useState<TatuadorPageProps | null>(null);

    useEffect(() => {
        const filterTatuador = tattooArtist.find((tatuador) => tatuador.name === params.id);
        if (filterTatuador !== undefined) {
        setTatuador(filterTatuador);
        } else {
        setTatuador(null);
        }
    }, [params.id]);

    return (
        <main className="tatuadorPage">
            <Banner imagesList={tatuador?.photo} title={tatuador?.name}/>

            <p className="tatuadorPage__description">{tatuador?.description}</p>

            <section className="tatuadorPage__content-images">
                {tatuador?.portafolio.map((item, idx) => (
                <img key={idx} src={item} alt="" className="tatuadorPage__images"/>
                ))}
            </section>
        </main>
    )
}

export default Page