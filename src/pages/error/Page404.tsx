import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Button } from "react-bootstrap";

const Page404 = () => (
  <React.Fragment>
    <Helmet title="404 Erro" />
    <div className="text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="h1">Pagina não encontrada.</p>
      <p className="h3 fw-normal mt-3 mb-5">
        Parece que nada foi encontrado por aqui, <br />
        essa página não existe.
      </p>
      <Link to="/">
        <Button variant="primary">Voltar para o início</Button>
      </Link>
    </div>
  </React.Fragment>
);

export default Page404;
