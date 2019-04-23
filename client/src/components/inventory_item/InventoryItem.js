import React from "react";
import { withStyles, Typography } from "@material-ui/core";

const styles = {
	liStyle: {
		paddingTop: "1.3vw",
		paddingBottom: "1.3vw",
	}
};

class InventoryItem extends React.Component {
	render() {
		return (
			<li style={styles.liStyle}>
				<Typography align="left" variant="h6" style = {{
					fontFamily: "Staatliches"
				}}>
					{this.props.item}: {this.props.quantity}
				</Typography>
			</li>
		);
	}
}

export default withStyles(styles)(InventoryItem);
