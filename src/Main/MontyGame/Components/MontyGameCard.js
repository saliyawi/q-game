import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ClassNames from "classnames";
import classes from "./MontyGameCard.module.css";
import { montyCards } from "../../../Core/Constants/MontyCards";

export class MontyGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (e) => {
    const id = e.currentTarget.id;
    this.props.handleUserSelection(id);
  };

  render() {
    const { cards } = this.props;

    return (
      <div className={ClassNames(classes.root)}>
        <div
          className={ClassNames(classes.cards, classes.flexRow)}
          data-test="MontyGameCardComponent"
        >
          <Grid container>
            {cards &&
              cards.map((item, index) => (
                <Grid key={index} item md={4}>
                  <Grid key={index} container spacing={0}>
                    <Grid key={index} item md={12} lg={12}>
                      <div
                        id={index}
                        key={index}
                        className={ClassNames(classes.card)}
                        onClick={this.handleClick}
                        data-test={"selectDoorEvent" + index}
                      >
                        <div className={classes.iconDiv}>
                          <img
                            src={montyCards[item].icon}
                            alt=""
                            className={classes.icon}
                            data-test="doorImg"
                          />
                        </div>
                        <div>
                          <p className={ClassNames(classes.displayTextStyle)}>
                            <span>{`${"Door"}:${index + 1}`}</span>
                          </p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    );
  }
}

// MontyGameCard.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// const MontyGameCardWithStyles = withStyles(styles)(MontyGameCard);

export default MontyGameCard;
