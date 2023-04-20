import React from "react";
import footerBg from "../assets/footer-bg.png";

export default function Footer() {
  return (
    <React.Fragment>
      <div
        className="py-20"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>
    </React.Fragment>
  );
}
