import React from "react";
import { Redirect, useParams } from "react-router";

import { getCandidatesById } from "../../selectores/getCandidatesById";
import { Footer } from "../screens/Footer";

import "../styles/candidatoperfil.css";

export const CandidatePerfil = ({ history }) => {
  const { candidatoId } = useParams();

  const candidate = getCandidatesById(candidatoId);

  if (!candidate) {
    return <Redirect to="/" />;
  }

  const { candidato, publisher, alter_ego, departamento, characters } =
    candidate;

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <>
      <div className="fondcandi"></div>
      <div className="container-perfil">
        <div className="row">
          <div className="card">
            <div className="col-md-12">
              <img
                src={`../assets/candidatos/${candidatoId}.jpg`}
                className="card-img  animate__animated animate__fadeInLeft"
                alt={candidato}
              />
            </div>
            <div className="col-8">
              <h3>{candidato}</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Profesion: </b>
                  {alter_ego}
                </li>
                <li className="list-group-item">
                  <b>Departamento: </b>
                  {departamento}
                </li>
                <li className="list-group-item">{characters}</li>
              </ul>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  className="btn btn-outline-info btn-sm"
                  onClick={handleReturn}
                >
                  Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
