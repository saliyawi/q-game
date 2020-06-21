import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ClassNames from "classnames";
import classes from "./Home.module.css";
import Header from "../../Header/Components/Header";
import QGbackground from "../../../Images/Header/QGbackground.png";
import MontyGame from "../../MontyGame/Container/MontyGame";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resetGame: false,
      userStatusMsg: "",
      winCount: 0,
      lossCount: 0,
      totalPlayCount: 0,
      rounds: 0
    };
  }

  handlePlayBtnClick = () => {
    this.setState({ resetGame: true, userStatusMsg: "" });
  };

  handleUserStatus = (userStatus) => {
    let { winCount, lossCount, totalPlayCount } = this.state;
    let msg = "";
    userStatus
      ? (msg = "You WIN a CAR....!!!!")
      : (msg = "You loose, Try Again....!!!!");
    userStatus ? winCount++ : lossCount++;
    let playCount = totalPlayCount + 1;

    this.setState({
      userStatusMsg: msg,
      resetGame: false,
      winCount: winCount,
      lossCount: lossCount,
      totalPlayCount: playCount,
    });
  };

  render() {
    //const { classes } = this.props;
    const {
      resetGame,
      userStatusMsg,
      winCount,
      lossCount,
      totalPlayCount,
    } = this.state;

    return (
      <div
        className={ClassNames(classes.root, classes.flexColumn, classes.color1)}
        data-test="homeComponent"
      >
        {/* <div
          className={ClassNames(classes.topBar, classes.flexRow)}
          data-test="headerComponent"
        >
          <Header />
        </div> */}
        <MontyGame
          reset={resetGame}
          updateUserStatus={this.handleUserStatus}
          data-test="montyGameComponent"
        />
        <div className={classes.center} data-test="playAgainButton">
          <button
            type={"button"}
            className={classes.button}
            onClick={this.handlePlayBtnClick}
          >
            Play Again
          </button>
        </div>
        {/* <div className={classes.center}>
          <span className={classes.msgText}>{userStatusMsg}</span>
        </div>
        <div className={classes.center}>
          <span className={classes.msgText}>
            {"Winning Count : " + winCount + "/" + totalPlayCount}{" "}
          </span>
        </div>
        <div className={classes.center}>
          <span className={classes.msgText}>
            {"Loss Count : " + lossCount + "/" + totalPlayCount}
          </span>
        </div> */}
      </div>
    );
  }
}

// Home.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

//const HomeWithStyles = withStyles(styles)(Home);

export default Home;
