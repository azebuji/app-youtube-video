import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Button } from "react-bootstrap";

const Page500 = () => (
  <React.Fragment>
    <Helmet title="500 Erro" />
    <div className="text-center">
      <h1 className="display-1 fw-bold">500</h1>
      <p className="h1">Erro interno do sistema.</p>
      <p className="h3 fw-normal mt-3 mb-5">
        Ocorreu um problema inesperado no servidor ao fazer sua requisição,
        <br />
        por favor tente novamente.
      </p>
      <Link to="/">
        <Button variant="primary">Voltar para o início</Button>
      </Link>
    </div>
  </React.Fragment>
);

export default Page500;
