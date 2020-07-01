import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import classes from "./Home.module.css";
import MontyGame from "../../MontyGame/Container/MontyGame";
import Message from "../../../Core/Components/Message";
import gameMessages from "../../../Core/Constants/MontyMessages";
import { MsgTypes } from "../../../Core/Constants/Types";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resetGame: false,
      userStatusMsg: "",
      winCount: 0,
      lossCount: 0,
      totalPlayCount: 0,
      totalRounds: 0,
      openModel: true,
      nextGameRound: 0,
      userCurrentResults: []
    };
  }

  handlePlayBtnClick = () => {
    const { totalRounds, nextGameRound } = this.state;
    if (parseInt(totalRounds) === parseInt(nextGameRound)) {
      this.setState({ resetGame: false, userStatusMsg: "" });
    } else {
      this.setState({ resetGame: true, userStatusMsg: "" });
    }
  };

  handleUserStatus = (userStatus, nextRound, results) => {
    const { currentUser } = this.props;
    let { winCount, lossCount, totalPlayCount, totalRounds, userCurrentResults } = this.state;
    let msg = "";
    userStatus
      ? (msg = gameMessages.winCar)
      : (msg = gameMessages.looseMsg);
    userStatus ? winCount++ : lossCount++;
    let playCount = totalPlayCount + 1;

    console.log('currentUser', currentUser)
    if (currentUser !== null) {
      userCurrentResults.push(results);
    }

    if (parseInt(nextRound) === parseInt(totalRounds)) {

    }

    this.setState({
      userStatusMsg: msg,
      resetGame: false,
      winCount: winCount,
      lossCount: lossCount,
      totalPlayCount: playCount,
      nextGameRound: nextRound
    }, () => { });
  };

  handleModelClose = () => {
    this.setState({ openModel: false })
  }

  handleUpdateData = (value) => {
    this.setState({ totalRounds: value });
  }

  render() {
    const { currentUser } = this.props;
    const {
      resetGame,
      userStatusMsg,
      totalRounds,
      openModel,
      nextGameRound
    } = this.state;

    //console.log('currentUser', currentUser)
    return (
      <div
        className={ClassNames(classes.root, classes.flexColumn, classes.color1)}
        data-test="homeComponent"
      >
        <MontyGame
          currentUser={currentUser}
          reset={resetGame}
          updateUserStatus={this.handleUserStatus}
          gameRounds={totalRounds}
          nextGameRound={nextGameRound}
          data-test="montyGameComponent"
        />
        {userStatusMsg === '' &&
          <div className={classes.center}>
            <span className={classes.msgText}>{gameMessages.selectDoor}</span>
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
        {totalRounds === 0 && currentUser === null &&
          <Message openModal={openModel}
            handleModelClose={this.handleModelClose}
            msg={gameMessages.pleaseLogin}
            msgType={MsgTypes.info}>
          </Message>
        }
        {currentUser !== null &&
          <Message openModal={openModel}
            handleModelClose={this.handleModelClose}
            updateData={this.handleUpdateData}
            msgType={MsgTypes.input}>
          </Message>
        }
        <div className={ClassNames(classes.center, classes.topPadding)}>
          <span className={classes.msgText}>{userStatusMsg}</span>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  currentUser: PropTypes.object
};

export default Home;

// Test Commit
