import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ClassNames from "classnames";
import classes from "./MontyGameCard.module.css";
import { montyCards } from "../../../Core/Constants/MontyCards";

const MontyGameCard = (props) => {

  const { cards } = props;

  const handleClick = (e) => {
    const id = e.currentTarget.id;
    props.handleUserSelection(id);
  };

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
                        onClick={handleClick}
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

MontyGameCard.propTypes = {
    classes: PropTypes.object.isRequired,
    cards:PropTypes.array
};

export default MontyGameCard;
