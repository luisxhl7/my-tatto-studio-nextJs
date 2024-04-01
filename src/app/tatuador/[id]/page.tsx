"use client";
import { useEffect, useState } from "react";
import { Banner } from "@/components/molecules/banner";
import { tattooArtist } from "@/data/tattoo-artist";
import ModalImage from "@/components/molecules/modal-image/Modal-image";
import { SimpleSlider } from "@/components/atoms/simpleSlider/SimpleSlider";
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

const customSettings = {
  infinite: true,
  centerMode: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 100,
  cssEase: "linear",
  arrows: false,
  swipeToSlide: true,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Tatuador = ({ params }: { params: PageParams }) => {
  const [tatuador, setTatuador] = useState<TatuadorPageProps | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [actualImage, setActualImage] = useState<number>(0);
  const [listImages, setListImages] = useState<Array<string> | null>(null);

  const handleOpenModal = (idx?: number, list?: Array<string> | null) => {
    if (idx !== undefined && list !== undefined) {
      setActualImage(idx);
      setListImages(list);
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
            alt={`imagen de proyectos realizados ${idx}`}
            className="tatuadorPage__images"
            onClick={() => handleOpenModal(idx, tatuador?.portafolio)}
          />
        ))}
      </section>

      <section>
        <h2>Diseños</h2>
        <SimpleSlider customSettings={customSettings}>
          {tatuador?.disenos.map((item, idx) => (
            <div className="tatuadorPage__slider" key={item}>
              <img
                src={item}
                alt={`imagen de diseños realizados ${idx}`}
                onClick={() => handleOpenModal(idx, tatuador?.disenos)}
              />
            </div>
          ))}
        </SimpleSlider>
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

export default Tatuador;
