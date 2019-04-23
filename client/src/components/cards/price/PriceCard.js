import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import theme from "../../../theme";

const styles = {
	bootstrapInput: {
		borderRadius: 4,
		backgroundColor: theme.palette.common.white,
		border: "1px solid black",
		fontSize: "5vw",
		height: "4vw",
		width: "4vw",
		textAlign: "center",
		padding: "1.5vw 1.5vw",
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
	},
	priceControl: {
		borderRadius: 4,
		backgroundColor: theme.palette.common.white,
		border: "1px solid black",
		fontSize: "8vw",
		height: "8vw",
		width: "8vw",
		textAlign: "center",
		padding: "1.5vw 1.5vw",
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
	},
	cc: {
		height: "100%",
		overflow: "hidden"
	},
	priceCard: {
		backgroundColor: "cyan",
		margin: "auto",
		marginLeft: "8vw",
		marginRight: "10vw",
		textAlign: "center",
		width: "80%",
		height: "100%",
		display: "inline-block",
		verticalAlign: "middle"
	}
};

class PriceCard extends React.Component {
	constructor () {
		super();
		this.updatePrice = this.updatePrice.bind(this);
	}
	
	updatePrice = (event) => {
		const {updateQuantity} = this.props;
		updateQuantity(event.target.value, "price")
	}
	render() {
		const { classes, clickSimulation, pricePerCup} = this.props;
		return (
			<Card style={styles.priceCard}>
				<CardContent>
					<div
						style={{
							float: "left",
							width: "45%",
							height: "25vw",
							fontFamily: "Staatliches",
							marginLeft: "5vw"
						}}
					>
						<div
							style={{
								width: "100%",
								height: "3vw",
								textAlign: "center",
								borderBottom: "0.5vw solid #000",
								paddingBottom: "3vw",
								fontSize: "5vw"
							}}
						>
							Price Control
						</div>
						<div
							style={{
								float: "left",
								marginTop: "3vw",
								marginLeft: "-3vw"
							}}
						>
							<InputBase
								id="bootstrap-input"
								defaultValue={pricePerCup}
								classes={{
									root: classes.bootstrapRoot,
									input: classes.priceControl
								}}
								style={{
									float: "left",
									marginRight: "2vw"
								}}
								onChange={this.updatePrice}
							/>
							<p
								style={{
									fontSize: "4vw"
								}}
							>
								Cents Per Cup
							</p>
						</div>
					</div>
					<div
						style={{
							height: "28vw",
							width: "40%",
							marginLeft: "5vw",
							float: "left"
						}}
					>
						<Button
							variant="contained"
							color="primary"
							style={{
								marginTop: "5vw",
								height: "20vw",
								width: "20vw",
								fontSize: "10vw",
								fontFamily: "Staatliches",
								textAlign: "center"
							}}
							onClick={clickSimulation}
						>
							Play
						</Button>
					</div>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(PriceCard);
