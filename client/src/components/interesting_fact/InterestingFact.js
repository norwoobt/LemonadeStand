import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";

const styles = {
    factCard: {
        backgroundColor: "#132a42"
    },
    headerText: {
        color: "white"
    }
};

class InterestingFact extends React.Component {
    
	render() {
		const { classes, factNumber} = this.props;
		return(
            <Card className={classes.factCard}>
                <Typography className={classes.headerText}>Interesting Fact #{factNumber}</Typography>
            </Card>
        );
	}
}

export default withStyles(styles)(InterestingFact);
