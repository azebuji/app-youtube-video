import React from "react";
import { PropsWithChildren } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Main from "../components/Main";
import Wrapper from "../components/Wrapper";

const Blank: React.FC<PropsWithChildren> = ({ children }) => (
  <React.Fragment>
    <Wrapper>
      <Main>
        <Container className="d-flex flex-column h-100" fluid>
          {children}
          <Outlet />
        </Container>
      </Main>
    </Wrapper>
  </React.Fragment>
);

export default Blank;
