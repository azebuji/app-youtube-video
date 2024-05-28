import React from "react";
import { PropsWithChildren } from "react";

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="wrapper">{children}</div>
);

export default Wrapper;
