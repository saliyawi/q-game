import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MontyGameCard from '../Components/MontyGameCard';
import { montyDoors } from '../../../Core/Constants/MontyCards';
import DialogConfirm from '../../../Core/Components/DialogConfirm'
import { montyMessages } from '../../../Core/Constants/MontyMessages'


const styles = () => ({
    root: {
        marginLeft: 35,
        flex: 1,
        width: 'calc(100%)'
    },
    cards: {
        textAlign: 'center',
        justifyContent: 'space-around'
    },
    card: {
        '&:hover': {
            marginTop: '0px',
        },
        cursor: 'pointer',
        maxWidth: 100,
        marginTop: "15px",
        transition: 'all 0.3s ease-in',
        flexWrap: 'wrap'
    },
    iconDiv: {
        margin: '8px 0px',
    },
    icon: {
        width: 250,
        height: 250
    },
}

);

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
            confirmMsg: '',
            resetGame: true
        }
    }


    setCards = (selectedId, userSelectedRound) => {
        let { montyCards, carIndex } = this.state;

        let newCards = montyCards.slice(0);
        let montySelectedDoor = 0;

        for (let i = 0; i <= newCards.length - 1; i++) {
            if (userSelectedRound === 1 && i !== carIndex && i !== parseInt(selectedId)) {
                newCards[i] = montyDoors.goatDoor;
                montySelectedDoor = i + 1;
                break;
            }

            if (userSelectedRound === 2) {
                newCards[i] = i === carIndex ? montyDoors.carDoor : montyDoors.goatDoor;

                const userWin = parseInt(selectedId) === carIndex ? true : false;
                this.props.updateUserStatus(userWin);
            }
        }

        this.setState({ montyCards: newCards, resetGame: false });

        if (userSelectedRound === 1) {
            const usrSelDoor = parseInt(selectedId) + 1;
            //const msg = intl.formatMessage({ id: montyMessages.montySelectionMsg }, { montySelectedDoor: montySelectedDoor });
            this.setState({ openModal: true, confirmMsg: 'Monty selected Door ' + montySelectedDoor + ' for you. You selected door ' + usrSelDoor + '. Do you want to change your current door ?' });
        }
    }

    // Handlers
    handleUserSelection = (id) => {
        const { userSelectionRound } = this.state;

        if (userSelectionRound !== 2) {
            let usrSelRound = userSelectionRound + 1;
            usrSelRound === 1 ? this.setState({ userSelectionOne: id }) : this.setState({ userSelectionTwo: id })

            this.setCards(id, usrSelRound);

            this.setState({ userSelectionRound: usrSelRound });
        }
    }

    handleConfirmResponse = (userResponse) => {
        const { userSelectionOne } = this.state;
        if (!userResponse) {
            this.setState({ userSelectionRound: 2 });
            this.setCards(userSelectionOne, 2);
        }
        this.setState({ openModal: false });

    }


    render() {
        const { montyCards, openModal, confirmMsg } = this.state;

        return (
            <React.Fragment>
                {montyCards && montyCards.length >= 3 &&
                    < MontyGameCard cards={montyCards} handleUserSelection={this.handleUserSelection} />
                }
                <DialogConfirm openModal={openModal} msg={confirmMsg} handleConfirm={this.handleConfirmResponse} />
            </React.Fragment>
        );
    }

}

MontyGame.propTypes = {
    classes: PropTypes.object.isRequired,
};


const MontyGameWithStyles = withStyles(styles)(MontyGame);

export default MontyGameWithStyles;


