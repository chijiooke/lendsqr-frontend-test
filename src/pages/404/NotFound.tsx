import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../shared/UIElements/back-arrow-button/BackButton";
import PageWrapper from "../../shared/UIElements/pageWrapper/PageWrapper";
import "./NotFound.styles.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    // <PageWrapper>
    <div className="not__found__wrapper">
      <p className="status__code">404</p>
      <p>Page Not Found</p>
      <BackButton path="/dashboard" text="Take Me to dashboard" />
    </div>
    // </PageWrapper>
  );
};

export default NotFound;
