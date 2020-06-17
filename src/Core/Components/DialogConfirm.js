import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({

    button :{
        border: '2px solid #000000',
        color: 'black',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        backgroundColor:'#94EFD2'
      }
});

const DialogConfirm = (props) => {
    const { classes, openModal, msg, info } = props;

    const handleConfirmModelClose = () => {
        props.handleConfirm(false)
    }

    const handleYes = () => {
        props.handleConfirm(true);
    }

    const handleNo = () => {
        props.handleConfirm(false);
    }

    return (
        <Dialog
            fullWidth={false}
            maxWidth={"sm"}
            open={openModal}
            onClose={handleConfirmModelClose}
            aria-labelledby="detail-dialog-edit"
        >
            <DialogTitle className={ClassNames(classes.dialogTitle)}>
                <div className={ClassNames(classes.lFont)}>
                    {"MONTY"}
                </div>
            </DialogTitle>
            <DialogContent className={classes.dialogBg}>
                <div className={classes.errorText}>
                    {msg} {info ? '' + info : ''}
                </div>
            </DialogContent>
            <DialogActions>
                <div className={classes.spaceAroundS}>
                    <button
                        type={'button'}
                        className={classes.button}
                        onClick={handleYes}
                    >Yes</button>
                </div>
                <div className={classes.spaceAroundS}>
                    <button
                        type={'button'}
                        className={classes.button}
                        onClick={handleNo}
                    >No</button>
                </div>
            </DialogActions>
        </Dialog>
    );

}


DialogConfirm.propTypes = {
    classes: PropTypes.object.isRequired,
    openModal: PropTypes.bool,
    title: PropTypes.string,
    msg: PropTypes.string,
    info: PropTypes.string,
    handleConfirm: PropTypes.func,
};

export default withStyles(styles)(DialogConfirm);
