import { Banner } from "@/components/molecules/banner";
import React from "react";
import "./cuidados-page.scss";

const Cuidados = () => {
  return (
    <main className="cuidadosPage">
      <Banner
        imagesList="https://foolhardytattoocom.files.wordpress.com/2020/06/tattoo-artist-wrapping-client-s-arm-in-plastic-clingfilm-to-encourage-tattoo-healing.jpg"
        title="cuidados"
      />

      <section className="cuidadosPage__Section-description">
        <p>
          El cuidado de los tatuajes es fundamental para mantener la apariencia
          y la salud de la piel a largo plazo. Aquí hay algunas razones
          importantes por las cuales el cuidado adecuado de los tatuajes es
          crucial:
        </p>
        <ol>
          <li>
            <strong>Prevención de infecciones: </strong> Después de que se realiza un tatuaje, la
            piel está abierta a bacterias y otros microorganismos que podrían
            causar infecciones. Siguiendo las instrucciones de cuidado
            proporcionadas por el tatuador, que generalmente incluyen lavar y
            aplicar ungüentos o cremas específicas, se puede reducir en gran
            medida el riesgo de infección.
          </li>
          <li>
            <strong>Curación adecuada:</strong> Los tatuajes pasan por un proceso de curación que
            puede durar varias semanas. Durante este tiempo, es esencial
            mantener el área limpia y protegida para permitir que la piel se
            recupere correctamente. Esto implica evitar el rascado, la
            exposición excesiva al sol y el uso de productos químicos que
            podrían irritar la piel.
          </li>
          <li>
            <strong>Preservación del diseño:</strong> Un cuidado adecuado ayuda a mantener la
            claridad y el color del tatuaje. Esto significa protegerlo del sol,
            ya que la exposición excesiva a los rayos UV puede hacer que los
            colores se desvanezcan con el tiempo. Además, mantener la piel
            hidratada puede ayudar a evitar que el tatuaje se vuelva opaco.
          </li>
          <li>
            <strong>Minimización de la decoloración:</strong> El cuidado inadecuado, como el
            lavado excesivo o el uso de productos agresivos, puede causar
            decoloración en el tatuaje. Esto puede hacer que los colores pierdan
            intensidad o que las líneas se difuminen prematuramente. Siguiendo
            las recomendaciones de cuidado, se puede minimizar este riesgo.
          </li>
          <li>
            <strong>Prevención de complicaciones futuras:</strong> Un tatuaje mal cuidado puede
            llevar a complicaciones a largo plazo, como cicatrices elevadas,
            queloides o incluso infecciones crónicas. El cuidado adecuado desde
            el principio puede ayudar a prevenir estas complicaciones y
            garantizar que el tatuaje se vea bien durante muchos años.
          </li>
        </ol>
        <p>
          En resumen, el cuidado adecuado de los tatuajes es esencial para
          proteger la inversión en arte corporal, mantener la salud de la piel y
          asegurar que el tatuaje se vea lo mejor posible durante muchos años.
        </p>
      </section>

      <section className="cuidadosPage__Section-steps">
        <h3>Antes de hacer el tatuaje:</h3>
        <p>
          <strong>Investiga al tatuador: </strong>
          Investiga y elige un tatuador con experiencia y buena reputación.
          Revisa su portafolio para asegurarte de que su estilo y calidad de
          trabajo coincidan con lo que deseas.
        </p>
        <p>
          <strong>Mantén la piel limpia y saludable: </strong>
          Antes de la cita para hacer el tatuaje, asegúrate de que la piel esté
          limpia y libre de cualquier irritación o herida. Evita el consumo de
          alcohol y drogas, ya que pueden diluir la sangre y aumentar el riesgo
          de sangrado excesivo.
        </p>
        <p>
          <strong>Hidratación: </strong>
          Mantén la piel bien hidratada bebiendo suficiente agua y aplicando
          regularmente una crema hidratante para mantenerla flexible y
          saludable.
        </p>
        <h3>Durante la sesión de tatuaje:</h3>
        <p>
          <strong>Sigue las instrucciones del tatuador: </strong>
          Escucha atentamente las instrucciones de cuidado proporcionadas por tu
          tatuador. Esto puede incluir cómo sentarte o acostarte durante la
          sesión, así como cualquier precaución especial que debas tomar.
        </p>
        <p>
          <strong>Mantente relajado: </strong>
          Trata de mantener la calma y relajado durante la sesión. Esto puede
          ayudar a reducir el dolor y facilitar el trabajo del tatuador.
        </p>
        <p>
          <strong>Mantén la piel limpia: </strong>
          Durante la sesión, el tatuador limpiará y desinfectará la piel varias
          veces. Asegúrate de seguir sus instrucciones y evitar tocar el área
          del tatuaje con las manos sucias.
        </p>
        <h3>Después de hacer el tatuaje:</h3>
        <p>
          <strong>Cubre el tatuaje: </strong> Después de la sesión, el tatuador
          aplicará un vendaje o película protectora sobre el tatuaje para
          protegerlo de bacterias y evitar la fricción con la ropa. Sigue las
          instrucciones del tatuador sobre cuánto tiempo dejar el vendaje
          puesto.
        </p>
        <p>
          <strong>Limpieza suave: </strong> Después de retirar el vendaje, lava
          suavemente el tatuaje con agua tibia y un jabón suave sin fragancia.
          Evita frotar demasiado fuerte y asegúrate de eliminar cualquier
          residuo de sangre o tinta.
        </p>
        <p>
          <strong>Aplica crema para tatuajes: </strong> Después de limpiar el
          tatuaje, aplica una capa delgada de crema para tatuajes recomendada
          por tu tatuador. Esto ayudará a mantener la piel hidratada y acelerar
          el proceso de curación.
        </p>
        <p>
          <strong>Evita la exposición al sol y al agua: </strong> Durante el
          proceso de curación, evita exponer el tatuaje al sol directo y al agua
          durante largos períodos de tiempo. Esto puede causar decoloración y
          retrasar la curación.
        </p>
        <p>
          <strong>No rasques ni peles la piel: </strong> A medida que el tatuaje
          se cure, es posible que sientas picazón o descamación. Evita rascarte
          o pelar la piel, ya que esto puede dañar el tatuaje y aumentar el
          riesgo de infección. Siguiendo estos pasos antes, durante y después de
          hacer un tatuaje, puedes ayudar a garantizar una cicatrización
          adecuada y mantener la apariencia y salud de tu tatuaje a largo plazo.
        </p>
      </section>
    </main>
  );
};

export default Cuidados;
