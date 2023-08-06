/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const Google = ({ className }: Props): JSX.Element => {
  return (
    <img
      className={`google ${className}`}
      alt="Google"
      src="https://generation-sessions.s3.amazonaws.com/2d3d941c1e56811ac6bb4585da123895/img/google-1.svg"
    />
  );
};
