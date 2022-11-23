import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addUser } from "@/common/module/Api/interface/user";

interface authProps {
  title: string;
  onChange?: (key: string, value: string) => void;
  onClick?: () => void;
  name?: boolean;
}

const index = ({ title, onChange, onClick, name = false }: authProps) => {
  const buttonHander = () => {
    if (onClick) onClick();
  };
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{title}</h1>
            <p className="text-xs-center">
              {title === "/sign-up" ? (
                <a href="/sign-in">Have an account?</a>
              ) : (
                <a href="/sign-up">don't Have an account?</a>
              )}
            </p>
            <ul className="error-messages">
              {/* <li>That email is already taken</li> */}
            </ul>
            {name ? (
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  onChange={
                    onChange
                      ? (e) => onChange("username", e.target.value)
                      : undefined
                  }
                />
              </fieldset>
            ) : null}

            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Email"
                onChange={
                  onChange
                    ? (e) => onChange("email", e.target.value)
                    : undefined
                }
              />
            </fieldset>

            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                onChange={
                  onChange
                    ? (e) => onChange("password", e.target.value)
                    : undefined
                }
              />
            </fieldset>
            <button
              className="btn btn-lg btn-primary pull-xs-right"
              onClick={buttonHander}
            >
              {title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
