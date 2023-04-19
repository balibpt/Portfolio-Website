import React from "react";
import bannerBg from "../assets/banner-bg.png";

export default function Banner() {
  return (
    <React.Fragment>
      <div className="h-screen">
        <img src={bannerBg} alt="" />
      </div>
    </React.Fragment>
  );
}
