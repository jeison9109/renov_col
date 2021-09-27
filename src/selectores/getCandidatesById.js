import { candidates } from "../data/candidates";

export const getCandidatesById = (id) => {
  return candidates.find((candidate) => candidate.id === id);
};
