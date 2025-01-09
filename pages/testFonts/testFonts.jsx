import React from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import "@/styles/globals.css";

function TextFont() {
  return (
    <>
      <h1> H1 </h1>
      <h2> H2 </h2>
      <h3> H3 </h3>
      <h4> H4 </h4>
      <h5> H5 </h5>
      <h6> H6 </h6>

      <p> Paragraph </p>
      <a href="#"> Anchor </a>

      <div className = "description">
        <p className = "blueText"> Description </p>
        <p className = "whiteText"> Description </p>
        <p className = "yellowText"> Description </p>
      </div>

    </>
  );
}

export default TextFont;
