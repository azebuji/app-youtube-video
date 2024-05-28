import React from "react";
import { PropsWithChildren } from "react";

const Content: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="content">{children}</div>
);

export default Content;
