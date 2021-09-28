import { candidates } from "../data/candidates";

export const getCandidateByName = (name = "") => {
  if (name === "") {
    return [];
  }

  name = name.toLocaleLowerCase();

  return candidates.filter((candidate) =>
    candidate.candidato.toLocaleLowerCase().includes(name)
  );
};
