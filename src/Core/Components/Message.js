import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import gameMessages from '../Constants/MontyMessages';
import { MsgTypes } from '../../Core/Constants/Types';


const styles = () => ({
    button: {
        border: '2px solid #000000',
        color: 'black',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        backgroundColor: '#94EFD2'
    },
    inputWidth: {
        width: '65px'
    },
    errorText: {
        color: 'Red'
    }


});

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rounds: 0,
            errorMsg: ''
        }
    }

    handleModelClose = () => {
        const { msgType } = this.props;
        const { rounds } = this.state;

        (msgType === MsgTypes.input && rounds === 0) ?
            this.setState({ errorMsg: gameMessages.invalidNumber })
            :
            this.props.handleModelClose()
    }

    handleOnChange = (e) => {
        const value = e.target.value;

        if (value > 0) {
            this.setState({ rounds: value, errorMsg: '' });
        } else {
            this.setState({ rounds: value, errorMsg: gameMessages.invalidNumber });
        }
        this.props.updateData(value);
    }

    render() {
        const { classes, openModal, msg, msgType } = this.props;
        const { errorMsg } = this.state;

        return (
            <Dialog
                fullWidth={false}
                maxWidth={"sm"}
                open={openModal}
                aria-labelledby="detail-dialog-edit"
            >
                <DialogTitle className={ClassNames(classes.dialogTitle)}>
                    <div className={ClassNames(classes.lFont)}>
                        {gameMessages.monty}
                    </div>
                </DialogTitle>
                <DialogContent className={classes.dialogBg}>
                    <div className={classes.errorText}>
                        {msg}
                    </div>
                    {msgType === MsgTypes.input &&
                        <div>
                            {gameMessages.simulationNumber}
                            <input
                                type="number"
                                className={classes.inputWidth}
                                onChange={this.handleOnChange}></input>
                        </div>
                    }
                    {errorMsg !== '' &&
                        <div className={classes.errorText}>{errorMsg}</div>
                    }
                </DialogContent>
                <DialogActions>
                    <div className={classes.spaceAroundS}>
                        {msgType === MsgTypes.info}
                        <button
                            type={'button'}
                            className={classes.button}
                            onClick={this.handleModelClose}
                        >Ok</button>
                    </div>
                </DialogActions>
            </Dialog >
        );
    }

}


Message.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Message);
