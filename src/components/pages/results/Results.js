import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
};

class Results extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		const { classes } = this.props;
		return (
			<Typography>Results</Typography>
		);
	}
}

export default withStyles(styles)(Results);
