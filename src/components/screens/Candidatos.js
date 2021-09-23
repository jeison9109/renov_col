import React from "react";
import "../styles/candidatos.css";
import cardimg from "../images/guio.jpg";

export const Candidatos = () => {
  return (
    <>
      <div className="fond-candi"></div>
      <div className="container-candi">
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
    </>
  );
};
