import React from "react";

import { CandidateList } from "./CandidateList";
import { NavLink } from "react-router-dom";

export const CandidateScreen = () => {
  return (
    <>
      <div
        className="container-candidate"
        style={{ textAlign: "center", top: "0px" }}
      >
        <h1>CANDIDATOS ELECCIONES 2022</h1>
        <hr />
        <div className="container-search1">
          <NavLink exact to="/Search" activeClassName="active">
            Buscar...
          </NavLink>
        </div>

        <CandidateList publisher="Camara de Representantes" />
        <CandidateList publisher="Lideres Juveniles" />
      </div>
    </>
  );
};
