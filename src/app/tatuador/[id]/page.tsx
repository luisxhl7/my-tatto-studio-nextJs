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
  disenos: string[];
  redesSociales: string[];
  logros: string[];
}

interface PageParams {
  id: string;
}

const Page = ({ params }: { params: PageParams }) => {
  const [tatuador, setTatuador] = useState<TatuadorPageProps | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [actualImage, setActualImage] = useState<number>(0);
  const [listImages, setListImages] = useState<Array<string> | null>(null);

  const handleOpenModal = (idx?: number, list?: Array<string> | null) => {
    if (idx !== undefined && list !== undefined) {
      setActualImage(idx);
      setListImages(list)
    }
    setOpenModal(!openModal);
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
            onClick={() => handleOpenModal(idx, tatuador?.portafolio)}
          />
        ))}
      </section>

      <section id="sectionPin" className="sectionPin">
        <div className="pin-wrap-sticky">
          <h2>Diseños</h2>
          <div className="pin-wrap">
            {tatuador?.disenos.map((item, idx) => (
              <img
                key={idx}
                src={item}
                alt=""
                className=""
                onClick={() => handleOpenModal(idx, tatuador?.disenos)}
              />
            ))}
          </div>
        </div>
      </section>

      {openModal && (
        <ModalImage
          handleOpenModal={handleOpenModal}
          images={listImages ? listImages : []}
          actualImage={actualImage}
          setActualImage={setActualImage}
        />
      )}
    </main>
  );
};

export default Page;
