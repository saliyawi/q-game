import React from "react";
import PropTypes from "prop-types";
import MontyGameCard from "../Components/MontyGameCard";
import { montyDoors } from "../../../Core/Constants/MontyCards";
import DialogConfirm from "../../../Core/Components/DialogConfirm";
import classes from "./MontyGame.module.css";

class MontyGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  //Life cycle hooks

  componentWillReceiveProps(nextProps) {
    const { reset } = nextProps;

    if (reset) {
      this.setState({ ...this.getInitialState() });
    }
  }

  getInitialState() {
    return {
      montyCards: [0, 0, 0],
      carIndex: Math.floor(Math.random() * 11) % 3,
      userSelectionRound: 0,
      userSelectionOne: 0,
      userSelectionTwo: 0,
      openModal: false,
      confirmMsg: "",
      resetGame: true,

    };
  }

  setCards = (selectedId, userSelectedRound) => {
    const { nextGameRound } = this.props;
    let { montyCards, carIndex } = this.state;

    let newCards = montyCards.slice(0);
    let montySelectedDoor = 0;

    for (let i = 0; i <= newCards.length - 1; i++) {
      if (
        userSelectedRound === 1 &&
        i !== carIndex &&
        i !== parseInt(selectedId)
      ) {
        newCards[i] = montyDoors.goatDoor;
        montySelectedDoor = i + 1;
        break;
      }

      if (userSelectedRound === 2) {
        newCards[i] = i === carIndex ? montyDoors.carDoor : montyDoors.goatDoor;

        let nextRound = nextGameRound + 1;
        const userWin = parseInt(selectedId) === carIndex ? true : false;
        this.props.updateUserStatus(userWin, nextRound, newCards);
      }
    }

    this.setState({ montyCards: newCards, resetGame: false });

    if (userSelectedRound === 1) {
      const usrSelDoor = parseInt(selectedId) + 1;
      this.setState({
        openModal: true,
        confirmMsg: "Monty selected Door " + montySelectedDoor + " for you. You selected door " + usrSelDoor + ". Do you want to change your current door ?",
      });
    }
  };

  // Handlers
  handleUserSelection = (id) => {
    const { userSelectionRound } = this.state;

    if (userSelectionRound !== 2) {
      let usrSelRound = userSelectionRound + 1;
      usrSelRound === 1
        ? this.setState({ userSelectionOne: id })
        : this.setState({ userSelectionTwo: id });

      this.setCards(id, usrSelRound);

      this.setState({ userSelectionRound: usrSelRound });
    }
  };

  handleConfirmResponse = (userResponse) => {
    const { userSelectionOne } = this.state;
    if (!userResponse) {
      this.setState({ userSelectionRound: 2 });
      this.setCards(userSelectionOne, 2);
    }
    this.setState({ openModal: false });
  };

  render() {
    const { montyCards, openModal, confirmMsg } = this.state;
    const { gameRounds, nextGameRound } = this.props;

    return (
      <div data-test="MontyGameComponent">
        {gameRounds >= nextGameRound &&
          <div className={classes.roundDiv}>
            {"Round : " + nextGameRound + "/" + gameRounds}
          </div>
        }
        {montyCards && montyCards.length >= 3 && (
          <MontyGameCard
            cards={montyCards}
            handleUserSelection={this.handleUserSelection}
          />
        )
        }
        <DialogConfirm
          openModal={openModal}
          msg={confirmMsg}
          handleConfirm={this.handleConfirmResponse}
        />
      </div >
    );
  }
}

MontyGame.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  reset: PropTypes.bool,
  updateUserStatus: PropTypes.func,
  gameRounds: PropTypes.number,
  nextGameRound: PropTypes.number,


}

export default MontyGame;
