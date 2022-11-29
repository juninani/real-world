import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAccountStatus } from "../module/store/common-recoil";
import { getLocal } from "../module/token";

const Header = () => {
  const userAccountValue = useRecoilValue(userAccountStatus);

  return (
    <header>
      <nav className="navbar navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            conduit
          </Link>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/managementArticle">
                <i className="ion-compose"></i>&nbsp;New Article
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </Link>
            </li>
            {userAccountValue ? (
              <li className="nav-item">
                <a
                  className="nav-link ng-binding active"
                  ui-sref-active="active"
                  ui-sref="app.profile.main({ username: $ctrl.currentUser.username })"
                  href="#/@juni"
                >
                  <img className="user-pic" src={String(getLocal("userImg"))} />
                  {String(getLocal("userName"))}
                </a>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-in">
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-up">
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
