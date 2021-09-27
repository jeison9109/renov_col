import { candidates } from "../data/candidates";

export const getCandidatesByPublisher = (publisher) => {
  const validPublishers = ["Camara de Representantes", "Lideres Juveniles"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher"${publisher}" No es correcto`);
  }

  return candidates.filter((candidate) => candidate.publisher === publisher);
};
