import { Link, Location, useLocation } from "react-router-dom";
import { navigation } from "./navigationData";
import "./SideNavigation.styles.scss";


export const SideNavigation = () => {
  const location: Location = useLocation();

  return (
    <div className="navigation__wrapper">
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
