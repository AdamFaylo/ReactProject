import React from "react";
import {
  InfinitySpin,
  Audio,
  BallTriangle,
  Hearts,
  Bars,
  CirclesWithBar,
  ColorRing,
  Comment,
} from "react-loader-spinner";

const LoaderSpinner = ({ width = 200, color = "#00BFFF" }) => {
  return (
    <div
    // אייקונים זזים
      style={{ minHeight: "40vh" }}
      className="d-flex justify-content-center align-items-center">
      <InfinitySpin width={`${width}`} color={color} />
      <Audio width={`${width}`} color={color} />
      <BallTriangle width={`${width}`} color={color} />
      <Hearts width={`${width}`} color={color} />
      <Bars width={`${width}`} color={color} />
      <CirclesWithBar width={`${width}`} color={color} />
      <ColorRing width={`${width}`} color={color} />
      <Comment width={`${width}`} color={color} />
    </div>
  );
};

export default LoaderSpinner;
