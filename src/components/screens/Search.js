import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import { Footer } from "../screens/Footer";

import { useForm } from "../../hooks/useForm";
import { CandidateCard } from "../candidates/CandidateCard";
import "../styles/search.css";
import { getCandidateByName } from "../../selectores/getCandidateByName";

export const Search = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInpuntChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const candidateFiltered = useMemo(() => getCandidateByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <>
      <div className="container-search">
        <h1>BUSCAR</h1>
        <hr />
      </div>
      <div className="container-buscador">
        <div className="row">
          <div className="col-md-5">
            <h2>Candidatos Renovemos Colombia</h2>
            <hr />

            <form onSubmit={handleSearch}>
              <input
                autoComplete="off"
                type="text"
                placeholder="Encontrar candidato"
                className="form-control"
                name="searchText"
                value={searchText}
                onChange={handleInpuntChange}
              />
              <button
                type="submit"
                className="btn m-1 btn-block btn-outline-primary"
              >
                Buscar
              </button>
            </form>
          </div>
          <div className="col-7">
            <h4 style={{ marginTop: "87px" }}>Resultados</h4>
            <hr />

            {q === "" && <div className="alert alert-info">Buscador..</div>}

            {q !== "" && candidateFiltered.length === 0 && (
              <div className="alert alert-danger">
                Nombre Erroneo por favor verifique sus datos {q}
              </div>
            )}

            {candidateFiltered.map((candidate) => (
              <CandidateCard key={candidate.id} {...candidate} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
