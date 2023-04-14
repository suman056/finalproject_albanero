import React from "react";
import Sidebard from "./Sidebard";
import Times from "./Times";
import '../style_formtime.scss'
function Footer() {
  return (
    <div className="footer_style">
      <Sidebard />
      <Times />
    </div>
  );
}

export default Footer;
