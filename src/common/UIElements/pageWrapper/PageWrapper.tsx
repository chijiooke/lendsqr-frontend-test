import React, { FC, ReactElement } from "react";
import { Location, useLocation } from "react-router-dom";
import { capitalizeText } from "../../utils/capitalizeText";

import "./PageWrapper.styles.scss";

const PageWrapper: FC<{ children: ReactElement; showPath?: boolean }> = ({
  children,
  showPath,
}) => {
  const location: Location = useLocation();
  return (
    <div className="page__wrapper">
      {showPath && (
        <p className="pathname">
          {capitalizeText(location.pathname.replace("/", ""))}
        </p>
      )}
      {children}
    </div>
  );
};

export default PageWrapper;
