import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BackArrow } from "../../../assets/back-arrow.svg";
import { capitalizeText } from "../../utils/capitalizeText";
import "./BackButton.styles.scss";

const BackButton: FC<{ path: string; text: string }> = ({ path, text }) => {
  return (
    <Link to={path} className="back__btn">
      <BackArrow /> {capitalizeText(text ? text : "back")}
    </Link>
  );
};

export default BackButton;
