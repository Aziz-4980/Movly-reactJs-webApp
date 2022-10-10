import React from "react";
import { useParams } from "react-router-dom";

const MoviesForm = () => {
  let { id } = useParams();
  return <h2>showing movie: {id}</h2>;
};

export default MoviesForm;
