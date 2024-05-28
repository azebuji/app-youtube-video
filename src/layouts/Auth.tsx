import React from "react";
import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "react-bootstrap";

import Main from "../components/Main";

const Auth: React.FC<PropsWithChildren> = ({ children }) => (
  <React.Fragment>
    <Main className="d-flex w-100 h-100 justify-content-center bg-white">
      <Container className="d-flex flex-column h-100" fluid>
        <div className="d-table h-100">
          <div className="d-table-cell align-middle">
            {children}
            <Outlet />
          </div>
        </div>
      </Container>
    </Main>
  </React.Fragment>
);

export default Auth;
