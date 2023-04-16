import React, { FC, ReactElement } from "react";
import { Location, useLocation } from "react-router-dom";
import { capitalizeText } from "../utils/capitalizeText";
import "./PageWrapper.styles.scss";

const PageWrapper: FC<{ children: ReactElement }> = ({ children }) => {
  const location: Location = useLocation();
  return (
    <div className="page__wrapper">
      <p className="pathname">
        {capitalizeText(location.pathname.replace("/",""))}
      </p>
      {children}
    </div>
  );
};

export default PageWrapper;
