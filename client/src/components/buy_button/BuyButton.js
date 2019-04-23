import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = {
	buttonText: {
		fontFamily: "Staatliches",
		fontSize: "2.6vw",
		position: "absolute",
		marginTop: "13px"
	},
	ibutton: {
		height: "4.5vw",
		width: "90%",
		fontFamily: "Staatliches",
		textAlign: "center",
		border: "solid",
		paddingBottom: "30px",
		color: "black",
		marginTop: "3px",
	},
	iButtonEven: {
		backgroundColor: "deepskyblue"
	},
	iButtonOdd: {
		backgroundColor: "dodgerblue"
	}
};

class BuyButton extends React.Component {
	constructor() {
		super();
		this.makePurchase = this.makePurchase.bind(this);
	}

	makePurchase = (type, quantity, cost) => {
		const { purchaseItem } = this.props;
		purchaseItem(type, quantity, cost);
	};
	render() {
		const { classes, type, quantity, cost, buttonEven } = this.props;
		if (buttonEven) {
			return (
				<Button
					variant="contained"
					color="primary"
					className={[classes.ibutton, classes.iButtonEven].join(" ")}
					onClick={() => this.makePurchase(type, quantity, cost)}
				>
					<Typography className={classes.buttonText} variant="button">
						{quantity} for ${cost.toFixed(2)}
					</Typography>
				</Button>
			);
		} else {
			return (
				<Button
					variant="contained"
					color="primary"
					className={[classes.ibutton, classes.iButtonOdd].join(" ")}
					onClick={() => this.makePurchase(type, quantity, cost)}
				>
					<Typography className={classes.buttonText} variant="button">
						{quantity} for ${cost.toFixed(2)}
					</Typography>
				</Button>
			);
		}
	}
}

export default withStyles(styles)(BuyButton);
