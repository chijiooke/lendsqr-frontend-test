import React from "react";
import { getIcons } from "../../../utils/getIcon";
import "./SideNavigation.styles.scss";
import { ReactComponent as Briefcase } from "../../../../assets/services.svg";

export const SideNavigation = () => {
  return (
    <div className="navigation__wrapper">
      <>
        <Briefcase />
        
        <{...getIcons("savings")}/>
      </>
    </div>
  );
};
