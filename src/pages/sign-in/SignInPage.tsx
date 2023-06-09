import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import hero from "../../assets/hero.png";
import { useAuth } from "../../shared/layout/components/auth-wrapper/AuthContext";
import "./SignInPage.styles.scss";
import logo from "../../assets//logo.png";

const SignInPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [showingPassword, setShowingPassword] = useState<boolean>(false);

  if (!!auth.user) {
    navigate("/dashboard");
    return <></>;
  }

  return (
    <div className="sign_In__wrapper">
      <img src={logo} alt="lendsqr" className="lendsqr__logo" />
      <div className="hero__section">
        <img src={hero} />
      </div>
      <div className="sign_in__form__wrapper">
        {" "}
        <h1 className="welcome__text">Welcome!</h1>
        <p className="sub__text">Enter details to login</p>
        <form className="sign__in__form">
          <div className="form__input__wrapper">
            <input
              type="email"
              placeholder="email address"
              className="sign__in__input"
            />
          </div>
          <div className="form__input__wrapper">
            <input
              type={!showingPassword ? "password" : "text"}
              placeholder="password"
              className="sign__in__input"
            />
            <button
              className="show__password__btn"
              type="button"
              onClick={() => setShowingPassword(!showingPassword)}
            >
              {!showingPassword ? "SHOW" : "HIDE"}
            </button>
          </div>

         
          <Link className="forgot__password__link" to={"/forgot-password"}>
            FORGOT PASSWORD?
          </Link>
          <button
            className="sign_in__btn"
            type="button"
            onClick={() =>
              auth.signin("userName", () => navigate("/dashboard"))
            }
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
