"use client";

import { Banner } from "@/components/molecules/banner";
import {Facebook, WhatsApp, Instagram} from '@mui/icons-material';
import Link from "next/link";
import Image from "next/image";
import { imagesList } from "@/data/tattoo-artist";
import { SimpleSlider } from "@/components/atoms/simpleSlider";
import images from "@/assets";
import sponsors from "@/assets/sponsors";
import "./home-page.scss";

const customSettings = {
  infinite: true,
  centerMode: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 100,
  cssEase: "linear",
  arrows: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

export default function Home() {
  return (
    <main className="home-page">
      <Banner imagesList={imagesList} title="my studio tattoo" />

      <section className="home-page__section-welcome">
        <div className="home-page__section-welcome__content-info">
          <h2>¡BIENVENIDOS AL MUNDO DE MY TATTOO STUDIO!</h2>
          <p>DONDE LA CREATIVIDAD FLUYE Y LA TINTA NO DESCANSA...</p>
          <p>
            ¿Estás listo para llevar tu arte corporal al siguiente nivel?
            ¡Estamos aquí para hacerlo realidad! Concertar una cita con nosotros
            es fácil, solo dirígete a nuestra página de contacto y elige la
            opción que más te convenga: teléfono, email o WhatsApp.
          </p>
          <p>
            Explora nuestras galerías llenas de inspiración en las secciones de
            tatuajes y piercings. Desde diseños clásicos hasta los más
            vanguardistas, ¡aquí encontrarás lo que necesitas para expresarte
            sin límites!
          </p>
          <p>
            Y por supuesto, no te pierdas nuestros invaluable consejos sobre
            cuidados higiénicos para mantener tus tatuajes y piercings en
            perfecto estado. En My Tattoo Studio, tu salud y satisfacción son
            nuestra prioridad.
          </p>
          <p>
            ¡Únete a nuestra comunidad de amantes del arte corporal y haz
            realidad tus sueños!
          </p>
        </div>
        <div className="home-page__section-welcome__content-image">
          <Image
            src={images.local_tattoo}
            alt=""
            className="home-page__section-welcome__image"
          />
        </div>
      </section>

      <section className="home-page__section-phrase">
        <Image
          src={images.rasgado_con_negro}
          alt=""
          className="home-page__section-phrase__image1"
          loading="lazy"
        />
        <div className="home-page__section-phrase__content-info">
          <h2>
            {`"Transformando la piel en lienzos vivos, un puntillado a la vez."`}
          </h2>
        </div>
        <Image
          src={images.rasgado_con_negro}
          alt=""
          className="home-page__section-phrase__image2"
          loading="lazy"
        />
      </section>

      <section className="home-page__section-known">
        <div className="home-page__section-known__content-info">
          <h2>CONOCE A MY STUDIO TATTOO Y SU EQUIPO</h2>
          <Image
            src={images.icono_tattoo}
            alt=""
            className="home-page__section-known__icon"
            loading="lazy"
          />
          <p>
            En el corazón del bullicioso distrito artístico de la ciudad, se
            encuentra MY Studio Tatto, un santuario para los amantes del arte
            corporal. Desarrollado por Luis Lopez, este estudio se ha convertido
            rápidamente en un punto de referencia para quienes buscan expresar
            su individualidad a través de la tinta.
          </p>
          <p>
            En MY Studio Tatto, el arte del tatuaje se eleva a nuevas alturas.
            Nuestro equipo de artistas altamente talentosos y apasionados está
            dedicado a transformar las ideas de nuestros clientes en
            impresionantes obras de arte viviente. Desde el realismo meticuloso
            hasta los diseños abstractos y geométricos, cada tatuaje es una
            expresión única de la visión del cliente y la habilidad del artista.
          </p>
          <p>
            En MY Studio Tatto, ofrecemos una amplia gama de servicios para
            satisfacer todas las necesidades de arte corporal. Desde el diseño y
            la creación de tatuajes personalizados hasta la cobertura de
            tatuajes existentes y la eliminación láser, estamos aquí para
            ayudarte a hacer realidad tus visiones.
          </p>
        </div>
      </section>

      <section className="home-page__section-phrase"
        style={{
          backgroundImage: `url('https://foolhardytattoocom.files.wordpress.com/2020/06/tattoo-artist-wrapping-client-s-arm-in-plastic-clingfilm-to-encourage-tattoo-healing.jpg')`,
        }}
      >
        <Image
          src={images.rasgado_con_negro}
          alt=""
          className="home-page__section-phrase__image1"
          loading="lazy"
        />
        <div className="home-page__section-phrase__content-info">
          <h2>{`¿Necesitas consejos sobre el cuidado de tus tatuajes?`}</h2>
          <p>
            {`¡Estás en el lugar correcto! Descubre cómo mantener tus obras de arte en perfecto estado y tu piel radiante con nuestros expertos en el foro de cuidado de tatuajes. ¡No te pierdas esta invaluable información para lucir tus tatuajes con orgullo!`}
          </p>
          <Link href='/cuidados'>Ingrese aquí</Link>
        </div>
        <Image
          src={images.rasgado_con_negro}
          alt=""
          className="home-page__section-phrase__image2"
          loading="lazy"
        />
      </section>

      <section className="home-page__section-end">
        <div className="home-page__section-end__content-image">
          <Image src={images.tatuador_x} alt=""/>
        </div>
        <div className="home-page__section-end__content-contacts">
          <h2>¡Desata tu creatividad! <br /> ¡Estamos aquí para convertir tus ideas en arte!</h2>
          <p>
            ¡Contáctanos ahora y déjanos llevar tus sueños a la vida a través de tinta y pasión!
          </p>
          <div className="home-page__section-end__social-networks">
            <Facebook/> 
            <WhatsApp/>
            <Instagram/> 
          </div>
        </div>
      </section>

      <section className="home-page__section-sponsors">
        <h2>Patrocinadores</h2>
        
        <SimpleSlider  customSettings={customSettings}>
          {sponsors?.map((item, idx) => (
            <div className="" key={idx}>
              <img src={item.src} alt={`imagen`}/>
            </div>
          ))}
        </SimpleSlider>
      </section>
    </main>
  );
}
