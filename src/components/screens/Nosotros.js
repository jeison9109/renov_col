import React from "react";
import "../styles/candidatos.css";
import cardimg from "../images/guio.webp";
import { Footer } from "./Footer";

export const Nosotros = () => {
  return (
    <>
      <div className="fondcandi"></div>
      <div className="container-candi">
        <h1 style={{ textAlign: "center" }}>DIRECTIVA</h1>
        <div className="container-card">
          <div className="row">
            <div className="card">
              <img className="card-img" src={cardimg} alt={cardimg} />
              <div className="card-body">
                <h5 className="card-title">GUSTAVO GUIO</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>

            <div className="card">
              <img className="card-img" src={cardimg} alt={cardimg} />
              <div className="card-body">
                <h5 className="card-title">GUSTAVO GUIO</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>

            <div className="card">
              <img className="card-img" src={cardimg} alt={cardimg} />
              <div className="card-body">
                <h5 className="card-title">GUSTAVO GUIO</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
