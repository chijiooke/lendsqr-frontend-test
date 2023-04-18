import { HambergerMenu } from "iconsax-react";
import { Link } from "react-router-dom";
import { ReactComponent as DownArrow } from "../../../../assets/down-arrow.svg";
import logo from "../../../../assets/logo.png";
import { ReactComponent as Bell } from "../../../../assets/notification-bell.svg";
import avatar from "../../../../assets/profile_picture.png";
import searchIcon from "../../../../assets/search.svg";
import { screenSize } from "../../../../pages/users/types/ScreenSize.enum";
import { UseMediaQuery } from "../../../hooks/useMediaQuery";
import { useLayout } from "../layout-wapper/LayoutContext";
import "./Header.styles.scss";

export const Header = () => {
  const { isSideNavOpen, setIsSideNavOpen } = useLayout();
  const currentDeviceSize = UseMediaQuery();
  return (
    <div className="header__wrapper">
      <div>
        {currentDeviceSize !== screenSize.DESKTOP && (
          <button
            className="hamburger__menu"
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
          >
            <HambergerMenu />
          </button>
        )}{" "}
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="header__content__wrapper ">
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
