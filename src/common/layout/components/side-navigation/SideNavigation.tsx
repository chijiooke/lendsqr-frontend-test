import { Link } from "react-router-dom";
import { navigation } from "./navigationData";
import "./SideNavigation.styles.scss";

export const SideNavigation = () => {
  return (
    <div className="navigation__wrapper">
      {navigation.map((it) => (
        <div>
          <p className="side__nav__group">{it.group}</p>
          <nav className="side__nav__links">
            {it.links.map((link) => (
              <Link to={link.url} className="side__nav__link active">
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
