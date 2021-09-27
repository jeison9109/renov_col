import React from "react";
import { getCandidatesByPublisher } from "../../selectores/getCandidatesByPublisher";

export const CandidateList = ({ publisher }) => {
  const candidates = getCandidatesByPublisher(publisher);

  return (
    <ul>
      {candidates.map((candidate) => (
        <li key={candidate.id}>{candidate.candidato}</li>
      ))}
    </ul>
  );
};
