import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../InitialLoader/Firebase/utils";
import classes from "./Header.module.css";
import Logo from "../../../Images/Icons/qgLogo.png";

const Header = (props) => {
  const { currentUser } = props;
  return (
    <header className={classes.header}>
      <div className={classes.wrap} data-test="headerComponent">
        <div className={classes.logo}>
          <Link to="/">
            <img src={Logo} alt="q-Game" data-test="logoImg" />
          </Link>
        </div>

        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <Link to="/results">Results</Link>
              </li>
              <li>
                <span onClick={() => auth.signOut()}>Log Out</span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
