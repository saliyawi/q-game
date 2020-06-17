import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ClassNames from 'classnames';
import ToolBar from '../Components/ToolBar'
import Logo from '../../../Images/Icons/qgLogo.png'

const styles = (theme) => ({
    gLogo: {
        height: 30,
        paddingTop: 14
    },
    logoFont: {
        fontSize: 26,
        color: "#ffffff",
        fontFamily: "SourceSansPro-Regular"
    },
    toolBarDiv: {
        width: 'calc(100% - 100px)'
    },

});

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        const { classes } = this.props;

        return (
            <div className={ClassNames( classes.color1)}>
                <div className={ClassNames(classes.flexRow)}>
                    <img src={Logo} alt="" className={classes.gLogo}/> 
                    <div className={classes.toolBarDiv}>
                        <ToolBar />
                    </div>
                </div>

            </div>
        );
    }

}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};


const HeaderWithStyles = withStyles(styles)(Header);

export default HeaderWithStyles;


