import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const Track = styled.div`
    width: 90%;
    height: 20px;
    border-radius: 10px;
    box-shadow: inset 0 0 3px #000;
    margin: auto;
`;

const Thumb = styled.div`
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: #CCCC00;
    border-radius: 8px;
`;

const styles = {
    percDisplay: {
		fontFamily: "Staatliches",
        position: "absolute",
        left: "48.5%"
    }
};

class ProgressBar extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <Track>
            <Typography className={classes.percDisplay}>{this.props.percentage}%</Typography>
                <Thumb percentage={this.props.percentage}>
                </Thumb>
            </Track>
        );
    }
}

export default withStyles(styles)(ProgressBar);