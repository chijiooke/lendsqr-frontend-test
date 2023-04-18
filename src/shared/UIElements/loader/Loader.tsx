import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import './Loader.styles.scss'

const Loader = () => {
  return (
    <div className="loader__wrapper">
      <InfinitySpin width="200" color="#39cdcc" />
    </div>
  );
};

export default Loader;
