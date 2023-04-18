import React, { FC, ReactElement } from "react";
import { Location, useLocation } from "react-router-dom";
import { screenSize } from "../../../pages/users/types/ScreenSize.enum";
import { UseMediaQuery } from "../../hooks/useMediaQuery";
import { useLayout } from "../../layout/components/layout-wapper/LayoutContext";
import { capitalizeText } from "../../utils/capitalizeText";

import "./PageWrapper.styles.scss";

const PageWrapper: FC<{ children: ReactElement; showPath?: boolean }> = ({
  children,
  showPath,
}) => {
  const currentDeviceSize = UseMediaQuery();
  const location: Location = useLocation();
  return (
    <div
      style={
        currentDeviceSize === screenSize.DESKTOP
          ? { marginLeft: "350px", marginRight: "100px" }
          : { margin: "100px 1rem ", width: "auto" }
      }
      className="page__wrapper"
    >
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
