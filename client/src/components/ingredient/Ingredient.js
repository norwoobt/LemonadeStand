import React from "react";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import theme from "../../theme";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@material-ui/core";

const styles = {
	inline: {
		display: "inline"
	},
	marginLeft: {
		marginLeft: "10px"
	},
	textFont: {
		fontFamily: "Staatliches",
		fontSize: "5vw"
	},
	ingredientInput: {
		borderRadius: 4,
		backgroundColor: theme.palette.common.white,
		border: "1px solid black",
		fontSize: "5vw",
		height: "3.5vw",
		width: "5.5vw",
		textAlign: "center",
		padding: "5px 0px 5px 5px",
		marginTop: "1.4vw",
		marginLeft: "4vw",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		// Use the system font instead of the default Roboto font.
		fontFamily: ["Staatliches"].join(","),
		"&:focus": {
			borderRadius: 4,
			borderColor: "#80bdff",
			boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
		}
	}
};

class Ingredient extends React.Component {
	constructor() {
		super();
		this.updateIngredient = this.updateIngredient.bind(this);
		this.printDescription = this.printDescription.bind(this);
	}

	updateIngredient = event => {
		const { updateQuantity, type, updateCPP } = this.props;
		updateQuantity(event.target.value, type);
		if (type === "ice") {
			var cpp = updateCPP(event.target.value);
		}
		this.refs["description"].value = this.printDescription(cpp);
	};

	printDescription = cpp => {
		const { type } = this.props;
		switch (type) {
			case "lemons":
				return "Lemons Per Pitcher";
			case "sugar":
				return "Cups of Sugar Per Pitcher";
			case "ice":
				var cupsPerPitcher = cpp;
				var desc1 = "Ice Per Cup (";
				var desc2 = " Cups Per Pitcher)";
				var desc = desc1 + cupsPerPitcher + desc2;
				return desc;
			default:
				return "SOMETHING WENT WRONG";
		}
	};
	render() {
		const { classes, quantity, cupsPerPitcher } = this.props;
		return (
			<div>
				<FormControl className={classes.inline}>
					<InputBase
						id="bootstrap-input"
						defaultValue={quantity}
						className={classes.ingredientInput}
						onChange={this.updateIngredient}
					/>
				</FormControl>

				<Typography
					id="description"
					ref="description"
					className={[
						classes.inline,
						classes.marginLeft,
						classes.textFont
					].join(" ")}
				>
					{this.printDescription(cupsPerPitcher)}
				</Typography>
			</div>
		);
	}
}

export default withStyles(styles)(Ingredient);
