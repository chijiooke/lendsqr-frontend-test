import { useState } from "react";
import { Link, Location, useLocation } from "react-router-dom";
import { ReactComponent as DownArrow } from "../../../../assets/down-arrow.svg";
import { ReactComponent as Briefcase } from "../../../../assets/switch-organisation.svg";
import { useLayout } from "../layout-wapper/LayoutContext";
import { navigation } from "./navigationData";
import "./SideNavigation.styles.scss";

export const SideNavigation = () => {
  const location: Location = useLocation();
  const [anchorEl, setanchorEl] = useState<
    null | (EventTarget & HTMLButtonElement)
  >(null);

  const { isSideNavOpen } = useLayout();

  return (
    <div
      style={{ width: !isSideNavOpen ? 0 : "250px" }}
      className="navigation__wrapper"
    >
      <button
        className="switch__organisation__btn"
        onClick={(e) => {
          setanchorEl(e?.currentTarget);
          e.stopPropagation();
        }}
      >
        <Briefcase /> Switch Organization <DownArrow />
      </button>

      {navigation.map((it, key) => (
        <div key={key}>
          <p className="side__nav__group">{it.group}</p>
          <nav className="side__nav__links">
            {it.links.map((link, key) => (
              <Link
                key={key}
                to={link.path}
                className={`side__nav__link ${
                  // if current window path is same as provided path set nav as active
                  location.pathname === link.path && "active"
                }`}
              >
                <link.icon />
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      ))}
    </div>
  );
};
