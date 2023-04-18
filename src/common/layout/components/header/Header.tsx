import { Link } from "react-router-dom";
import { ReactComponent as DownArrow } from "../../../../assets/down-arrow.svg";
import logo from "../../../../assets/logo.png";
import { ReactComponent as Bell } from "../../../../assets/notification-bell.svg";
import avatar from "../../../../assets/profile_picture.png";
import searchIcon from "../../../../assets/search.svg";
import "./Header.styles.scss";

export const Header = () => {
  return (
    <div className="header__wrapper">
      <img src={logo} alt="logo" className="logo" />
      <div className="header__content__wrapper">
        <form className="search__input__wrapper">
          <input
            className="search__input"
            placeholder="search for anything..."
          />
          <button className="search__btn">
            <img src={searchIcon} alt="search" />
          </button>
        </form>
        <div className="header__links__wrapper">
          <Link to="/docs" className="docs__link">
            Docs
          </Link>
          <button className="notifications__btn">
            <Bell color="#fff" />
          </button>
          <img src="" alt="" />

          <button className="profile__btn">
            <img src={avatar} alt="avatar" className="avatar" /> Adedeji
            <DownArrow />
          </button>
        </div>
      </div>
    </div>
  );
};
