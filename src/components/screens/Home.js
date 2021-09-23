import React from "react";
import "../styles/home.css";
import logo from "../images/logo.png";

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 align-self-start">
            <h1>MISION</h1>
            <p>
              Renovemos Colombia busca a través del ejercicio democrático, en
              desarrollo del derecho a la participación política, el derecho al
              trabajo, el derecho a la salud, el derecho a la educación, el
              derecho al desarrollo del campo y al disfrute de un medio ambiente
              sostenible desde una ecología integral, animalista, y así
              fortalecer la administración pública e impulsar el desarrollo
              económico, social y cultural, basados en los principios de la
              confianza, la cooperación, la fraternidad, la libertad, la
              inclusión y la igualdad.
            </p>
            <br></br>
            <div className="col-md-12 align-self-start">
              <h1>VISION</h1>
              <p>
                En el 2024, Renovemos Colombia tendrá un posicionamiento como
                alternativa de poder, con representación a nivel municipal,
                departamental y nacional, con la finalidad de transformar
                significativamente al país, fortaleciendo y generando nuevas
                propuestas que permitan la su consolidación desde desarrollo
                político, económico, social y cultural.{" "}
              </p>
            </div>
          </div>

          <div className="col-md-4 justify-content-center align-self-start">
            <img className="logo" src={logo} alt={logo} />
          </div>

          <div className="col">
            <div className="col-md-12 ">
              <h1>RESEñAS</h1>
              <p>
                La esfera amarilla representa al sol, que es la capacidad de ver
                las realidades por encima de los mismos acontecimientos, para
                contemplarlos y comprenderlos más allá de todo tipo de
                apasionamientos, es la energía, el optimismo y la confianza.
              </p>
              <p>
                Los dos brazos que la protegen, de color Verde y Rojo,
                representan que somos un Movimiento político de ciudadanos con
                un pensamiento incluyente, que, a pesar de las distintas
                posiciones ideológicas, religiosas, raciales, sociales y
                económicas, entre otras, podamos construir en conjunto un
                proyecto de nación para todos y todas
              </p>
              <p>
                El color Verde en sí mismo, hace alusión al potencial de
                recursos naturales que poseen nuestras tierras colombianas para
                proveer desde el campo, y empresas agroindustriales, insumos que
                ayuden a atenuar el hambre en nuestro país y en otras latitudes
                del mundo, y así fortalecer la seguridad alimentaria.{" "}
              </p>
              <p>
                El color Rojo, hace referencia a la libertad de pensamiento:
                vanguardista, defensor incansable del Derecho a la Vida, y todos
                los Derechos constitucionales que salvaguardan el cuidado de
                todos los seres humanos, indistintamente de su edad, género y
                condición social.{" "}
              </p>
              <p>
                El mapa de Colombia Azul significa que somos pacifistas y
                defensores de la naturaleza y todas las comunidades vivientes,
                principalmente de la protección del agua por encima de la
                economía, creemos en un desarrollo sostenible, animalista basado
                en la vida digna.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
