import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import theme from "../../../theme";

const styles = {
	progTDStyle: {
		borderRight: "solid",
		borderWidth: "0.25vw",
		fontSize: "2.3vw",
		paddingRight: "0.5vw",
		paddingLeft: "0.5vw"
	},
	progTDStyleFinal: {
		fontSize: "2.3vw",
		margin: "auto",
		paddingLeft: "0.5vw"
	},
	bootstrapInput: {
		borderRadius: 4,
		backgroundColor: theme.palette.common.white,
		border: "1px solid black",
		fontSize: "5vw",
		height: "3.5vw",
		width: "3.5vw",
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
	bottomDiv: {
		position: "relative",
		textAlign: "center",
		margin: "auto",
		width: "100%",
		height: "6.0vw"
	},
	progressCard: {
		backgroundColor: "yellow",
		margin: "auto",
		height: "100%",
		width: "73%",
		overflow: "hidden",
	}
};

class ProgressCard extends React.Component {
	render() {
		const { classes, money } = this.props;
		return (
			<Card style={styles.progressCard}>
				<CardContent
					style={{
						height: "100%",
						margin: "0",
						padding: "0"
					}}
				>
					<table
						style={{
							height: "100%",
							fontFamily: "Staatliches"
						}}
					>
						<tbody>
							<tr>
								<td style={styles.progTDStyle}>
									Day: 1{/* {this.state.currDay} */}
								</td>
								<td style={styles.progTDStyle}>
									Money: {money}
									{/* {this.state.currMoney} */}
								</td>
								<td style={styles.progTDStyle}>
									Temperature: 75℉
									{/* {this.state.currTemp}℉ */}
								</td>
								<td style={styles.progTDStyleFinal}>
									Weather Forecast: Sunny or Something
									{/* {this.state.currForecast} */}
								</td>
							</tr>
						</tbody>
					</table>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(ProgressCard);
