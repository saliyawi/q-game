import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ClassNames from 'classnames';
import { montyCards } from '../../../Core/Constants/MontyCards';


const styles = () => ({
    root: {
        marginLeft: 35,
        flex: 1,
        width: 'calc(100%)'
    },
    cards: {
        textAlign: 'center',
        justifyContent: 'space-around',
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
        height: 250,
    },
    displayTextStyle: {
        fontFamily: "Roboto-Medium, Roboto",
        fontSize: 18,
        color: "#333333",
        fontWeight: 500,
        marginTop: 10
    },
}

);

export class MontyGameCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    handleClick = (e) => {
        const id = e.currentTarget.id;
        this.props.handleUserSelection(id);
    }

    render() {
        const { classes, cards } = this.props;

        return (
            <div className={ClassNames(classes.root)}>
                <div className={ClassNames(classes.cards, classes.flexRow)}>
                    <Grid container >
                        {cards && cards.map((item, index) =>
                            <Grid key={index} item md={4}>
                                <Grid key={index} container spacing={0}>
                                    <Grid key={index} item md={12} lg={12}>
                                        <div
                                            id={index}
                                            key={index}
                                            className={ClassNames(classes.card)}
                                            onClick={this.handleClick}
                                        >
                                            <div className={classes.iconDiv}>
                                                <img src={montyCards[item].icon} alt="" className={classes.icon} />
                                            </div>
                                            <div>
                                                <p className={ClassNames(classes.displayTextStyle)}>
                                                    <span>{`${'Door'}:${index + 1}`}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </div >
        );
    }

}

MontyGameCard.propTypes = {
    classes: PropTypes.object.isRequired,
};


const MontyGameCardWithStyles = withStyles(styles)(MontyGameCard);

export default MontyGameCardWithStyles;


