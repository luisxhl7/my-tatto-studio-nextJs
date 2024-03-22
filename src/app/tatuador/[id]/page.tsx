"use client";
import { useEffect, useState } from "react";
import { Banner } from "@/components/molecules/banner";
import { tattooArtist } from "@/data/tattoo-artist";
import ModalImage from "@/components/molecules/modal-image/Modal-image";
import "./tatuador-page.scss";

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

const Page = ({ params }: { params: PageParams }) => {
  const [tatuador, setTatuador] = useState<TatuadorPageProps | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [actualImage, setActualImage] = useState<number>(0); // Inicializar actualImage como 0

  const handleOpenModal = (idx?: number) => {
    setOpenModal(!openModal);
    if (idx !== undefined) {
      setActualImage(idx);
    }
  };

  useEffect(() => {
    const filterTatuador = tattooArtist.find(
      (tatuador) => tatuador.name === params.id
    );
    if (filterTatuador !== undefined) {
      setTatuador(filterTatuador);
    } else {
      setTatuador(null);
    }
  }, [params.id]);

  return (
    <main className="tatuadorPage">
      <Banner imagesList={tatuador?.photo} title={tatuador?.name} />

      <p className="tatuadorPage__description">{tatuador?.description}</p>

      <h2>Proyectos Realizados</h2>
      <section className="tatuadorPage__content-images">
        {tatuador?.portafolio.map((item, idx) => (
          <img
            key={idx}
            src={item}
            alt=""
            className="tatuadorPage__images"
            onClick={() => handleOpenModal(idx)}
          />
        ))}
      </section>

      {openModal && (
        <ModalImage
          handleOpenModal={handleOpenModal}
          images={tatuador?.portafolio ? tatuador?.portafolio : []}
          actualImage={actualImage}
          setActualImage={setActualImage}
        />
      )}
    </main>
  );
};

export default Page;
