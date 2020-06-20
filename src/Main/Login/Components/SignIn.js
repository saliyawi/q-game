import React, { Component } from "react";
import classes from "./SignIn.module.css";
import Button from "../../../Core/Components/Button/Button";
import { signInWithGoogle } from "../../../InitialLoader/Firebase/utils";

class SignIn extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className={classes.signin}>
        <div className={classes.wrap}>
          <h2>Login</h2>
          <div className={classes.fromWrap}>
            <form onSubmit={this.handleSubmit}>
              <div className={classes.socialSignin}>
                <div className={classes.row}>
                  <Button onClick={signInWithGoogle}>
                    Sign in with Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
