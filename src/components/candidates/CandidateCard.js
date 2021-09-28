import React from "react";
import { Link } from "react-router-dom";

export const CandidateCard = ({
  id,
  candidato,
  publisher,
  alter_ego,
  departamento,
  characters,
}) => {
  return (
    <>
      <div className="row">
        <div className="col-md-7">
          <div className="card">
            <img
              src={`./assets/candidatos/${id}.jpg`}
              alt={candidato}
              className="card-img"
            />
            {/* <img className="card-img" src={cardimg} alt={cardimg} />*/}

            <div className="card-body">
              <h5 className="card-title">{candidato}</h5>
              <p className="card-text">{publisher} </p>
              <p>{departamento}</p>
              <p>{characters}</p>
              <Link to={`./candidate/${id}`}>Más</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
