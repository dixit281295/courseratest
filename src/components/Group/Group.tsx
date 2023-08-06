/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const Group = ({ className }: Props): JSX.Element => {
  return (
    <div className={`group ${className}`}>
      <div className="div-wrapper">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <p className="enter-email-or-user">Enter email or user name</p>
          </div>
        </div>
      </div>
    </div>
  );
};
