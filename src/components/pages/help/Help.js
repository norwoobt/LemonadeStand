import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
};

class Help extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		const { classes } = this.props;
		return (
			<Typography>Simulating...</Typography>
		);
	}
}

export default withStyles(styles)(Help);
