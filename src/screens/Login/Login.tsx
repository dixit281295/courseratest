import React from "react";
import { Apple } from "../../components/Apple";
import { Facebook } from "../../components/Facebook";
import { Google } from "../../components/Google";
import { Group } from "../../components/Group";
import { GroupWrapper } from "../../components/GroupWrapper";
import { Saly } from "../../components/Saly";
import "./style.css";

export const Login = (): JSX.Element => {
  return (
    <div className="login">
      <div className="div-2">
        <div className="group-2">
          <div className="group-3">
            <div className="h-1-wrapper">
              <h1 className="h-1">Sign in to</h1>
            </div>
            <div className="group-4">
              <p className="p">If you don’t have an account register</p>
              <p className="you-can-register">
                <span className="span">You can&nbsp;&nbsp; </span>
                <span className="text-wrapper-2">Register here !</span>
              </p>
            </div>
          </div>
          <Saly className="saly-14" />
        </div>
        <div className="group-5">
          <Group className="group-15" />
          <div className="group-6">
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="group-7">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-3">Password</div>
                  </div>
                </div>
                <img
                  className="invisible"
                  alt="Invisible"
                  src="https://generation-sessions.s3.amazonaws.com/2d3d941c1e56811ac6bb4585da123895/img/invisible-1.svg"
                />
              </div>
            </div>
            <div className="text-wrapper-4">Forgor password ?</div>
          </div>
          <GroupWrapper className="group-14" />
          <div className="text-wrapper-5">or continue with</div>
          <div className="group-8">
            <div className="group-9">
              <Facebook className="facebook-instance" />
              <Apple className="apple-instance" />
              <Google className="google-instance" />
            </div>
          </div>
          <div className="text-wrapper-6">Sign in</div>
        </div>
        <div className="text-wrapper-7">Design. Studio</div>
      </div>
    </div>
  );
};
