import React from "react";
import { CandidateList } from "./CandidateList";

export const CandidateScreen = () => {
  return (
    <div>
      <h1>CANDIDATOS ELECCIONES 2022</h1>
      <hr />
      <CandidateList publisher="Camara de Representantes" />
      <CandidateList publisher="Lideres Juveniles" />
    </div>
  );
};
