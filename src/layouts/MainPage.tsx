import React, { useState } from "react";
import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

import Content from "../components/Content";
import Footer from "../components/Footer";
import Main from "../components/Main";
import adminItems from "../components/sidebar/adminItems";
import attendantItems from "../components/sidebar/attendantItems";
import Sidebar from "../components/sidebar/Sidebar";
import Wrapper from "../components/Wrapper";

const MainPage: React.FC<PropsWithChildren> = ({ children }) => {

  return (
    <React.Fragment>
      <Wrapper>
        <Main>
          <Content>
            {children}
            <Outlet />
          </Content>
          <Footer />
        </Main>
      </Wrapper>
    </React.Fragment>
  );
};

export default MainPage;