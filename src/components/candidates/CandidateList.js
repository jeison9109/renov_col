import React from "react";
import { getCandidatesByPublisher } from "../../selectores/getCandidatesByPublisher";
import { CandidateCard } from "./CandidateCard";

export const CandidateList = ({ publisher }) => {
  const candidates = getCandidatesByPublisher(publisher);

  return (
    <>
      <div className="row">
        <div
          className="card-group animate__animated animate__fadeInUp col-md-12"
          // className="card-group animate__animated animate__fadeInUp"
          //style={{ display: "flex", justifyContent: "center" }}
        >
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.id} {...candidate} />
          ))}
        </div>
      </div>
    </>
  );
};
