import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ClassNames from "classnames";
import classes from "./Home.module.css";
import Header from "../../Header/Components/Header";
import QGbackground from "../../../Images/Header/QGbackground.png";
import MontyGame from "../../MontyGame/Container/MontyGame";
import Message from "../../../Core/Components/Message";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resetGame: false,
      userStatusMsg: "",
      winCount: 0,
      lossCount: 0,
      totalPlayCount: 0,
      rounds: 0,
      openModel: true
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

  handleModelClose = () => {
    this.setState({ openModel: false })
  }

  render() {
    const { currentUser } = this.props;
    const {
      resetGame,
      userStatusMsg,
      winCount,
      lossCount,
      totalPlayCount,
      rounds,
      openModel
    } = this.state;

    console.log('currentUser', currentUser)
    return (
      <div
        className={ClassNames(classes.root, classes.flexColumn, classes.color1)}
        data-test="homeComponent"
      >
        <MontyGame
          reset={resetGame}
          updateUserStatus={this.handleUserStatus}
          data-test="montyGameComponent"
        />
        {userStatusMsg === '' &&
          <div className={classes.center}>
            <span className={classes.msgText}>{"Select your lucky door first....."}</span>
          </div>}
        <div className={ClassNames(classes.center, classes.topPadding)} data-test="playAgainButton">
          <button
            type={"button"}
            className={classes.button}
            onClick={this.handlePlayBtnClick}
          >
            Start
          </button>
        </div>
        {rounds === 0 && currentUser === null &&
          <Message openModal={openModel}
            handleModelClose={this.handleModelClose}>
          </Message>
        }
        {rounds === 0 && currentUser !== null &&
          <Message openModal={openModel}
            handleModelClose={this.handleModelClose}>
          </Message>
        }
        <div className={ClassNames(classes.center, classes.topPadding)}>
          <span className={classes.msgText}>{userStatusMsg}</span>
        </div>
        {/*<div className={classes.center}>
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
