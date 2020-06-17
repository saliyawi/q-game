import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ClassNames from 'classnames';
import Header from '../../Header/Container/Header';
import QGbackground from '../../../Images/Header/QGbackground.png';
import MontyGame from '../../MontyGame/Container/MontyGame';

const styles = () => ({
    root: {
        position: 'relative',
        height: '100vh',
        width: '100%',
        backgroundImage: 'url(' + QGbackground + ')',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    topBar: {
        paddingLeft: 35,
        backgroundColor: 'rgba(51, 51, 51, 1)',
        alignItems: "center",
        maxHeight: "62px"
    },
    colDiv: {
        width: '100%',
        height: 'calc(100vh - 40px)',
    },
    col1: {
        height: '100%',
        width: '70%',
    },
    center: {
        textAlign: 'center'
    },
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
    msgText: {
        fontSize: 'x-large',
        fontWeight: 'bold'
    }

});

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resetGame: false,
            userStatusMsg: '',
            winCount: 0,
            lossCount: 0,
            totalPlayCount:0
        };
    }

    handlePlayBtnClick = () => {
        this.setState({ resetGame: true, userStatusMsg: '' })
    }

    handleUserStatus = (userStatus) => {
        let { winCount, lossCount, totalPlayCount } = this.state;
        let msg = ''
        userStatus ? msg = 'You WIN a CAR....!!!!' : msg = 'You loose, Try Again....!!!!';
        userStatus ? winCount++ : lossCount++;
        let playCount = totalPlayCount+1;

        this.setState({ userStatusMsg: msg, resetGame: false, winCount:winCount,lossCount:lossCount,totalPlayCount:playCount })

    }


    render() {
        const { classes } = this.props;
        const { resetGame, userStatusMsg, winCount, lossCount, totalPlayCount } = this.state;

        return (
            <div className={ClassNames(classes.root, classes.flexColumn, classes.color1)}>
                <div className={ClassNames(classes.topBar, classes.flexRow)}>
                    <Header />
                </div>
                <MontyGame reset={resetGame} updateUserStatus={this.handleUserStatus} />
                <div className={classes.center}>
                    <button
                        type={'button'}
                        className={classes.button}
                        onClick={this.handlePlayBtnClick}
                    >Play Again</button>
                </div>
                <div className={classes.center}>
                    <span className={classes.msgText}>{userStatusMsg}</span>
                </div>
                <div className={classes.center}>
                    <span className={classes.msgText}>{'Winning Count : '+winCount +'/'+totalPlayCount} </span>
                </div>
                <div className={classes.center}>
                    <span className={classes.msgText}>{'Loss Count : '+lossCount+'/'+totalPlayCount}</span>
                </div>

            </div>
        );
    }

}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};


const HomeWithStyles = withStyles(styles)(Home);

export default HomeWithStyles;


