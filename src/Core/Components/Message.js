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

const Message = (props) => {
    const { classes, openModal } = props;

    const handleModelClose = () => {
        props.handleModelClose()
    }

    return (
        <Dialog
            fullWidth={false}
            maxWidth={"sm"}
            open={openModal}
            onClose={handleModelClose}
            aria-labelledby="detail-dialog-edit"
        >
            <DialogTitle className={ClassNames(classes.dialogTitle)}>
                <div className={ClassNames(classes.lFont)}>
                    {"MONTY"}
                </div>
            </DialogTitle>
            <DialogContent className={classes.dialogBg}>
                <div className={classes.errorText}>
                    {"Please Login to review your game resutls...!!"}
                </div>
            </DialogContent>
            <DialogActions>
                <div className={classes.spaceAroundS}>
                    <button
                        type={'button'}
                        className={classes.button}
                        onClick={handleModelClose}
                    >Ok</button>
                </div>
            </DialogActions>
        </Dialog>
    );

}


Message.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Message);
