import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import LinearProgress from "@material-ui/core/LinearProgress";
import ProgressBar from "../../progress_bar/ProgressBar";

const styles = {
	bankRupt: {
		position: "absolute",
		bottom: "55px",
		left: "18vw",
		backgroundColor: "red",
		fontFamily: "Staatliches",
	},
	header: {
		marginTop: "1vw",
		width: "100%"
	},
	headText: {
		fontFamily: "Staatliches",
		textAlign: "center",
		color: "#132a42"
	},
	next: {
		display: "block",
		margin: "auto",
		textAlign: "center",
		backgroundColor: "#132a42",
		fontFamily: "Staatliches",
		fontSize: "3vw",
		color: "white"
	},
	nextContainer: {
		width: "100%",
		height: "8vw",
		marginBottom: "1vw"
	},
	reportCard: {
		backgroundColor: "yellow",
		width: "80%",
		heihgt: "38vw",
		margin: "3% auto"
	},
	text: {
		textAlign: "center",
		fontFamily: "Staatliches"
	},
	progress: {
		margin: "auto",
		textAlign: "center",
		marginBottom: "2vw"
	},
	progressBar: {
		margin: "auto",
		marginBottom: "2vw"
	}
};

class DayReport extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		const {
			classes,
			currentDay,
			weatherJudgement,
			cupsSold,
			potentialCustomers,
			customerSatisfaction,
			popularity,
			dailyRevenue,
			money,
			nextDay,
			nextDayText,
			bankrupt
		} = this.props;
		return (
			<div>
				<Card className={classes.reportCard}>
					<div className={classes.header}>
						<Typography className={classes.headText} variant="h4">
							Day {currentDay}: End of Day Report
						</Typography>

						<Typography className={classes.text}>
							You managed to sell {cupsSold} cups to{" "}
							{potentialCustomers} potential Customers.
						</Typography>

						<Typography className={classes.text}>
							Total Revenue for Today: ${dailyRevenue}
						</Typography>

						<Typography className={classes.text}>
							Money after sales: ${money}
						</Typography>

						<Typography className={classes.text}>
							Considering the weather, this is {weatherJudgement}!
						</Typography>

						<div className={classes.progress}>
							<Typography>
								Your Customer Satisfaction:{" "}
							</Typography>
							<div className={classes.progressBar}>
								<ProgressBar percentage={30} />
							</div>
						</div>

						<div className={classes.progress}>
							<Typography>Your Popularity: </Typography>
							<div className={classes.progressBar}>
								<ProgressBar percentage={100} />
							</div>
						</div>

						<div className={classes.nextContainer}>
							<Button
								className={classes.next}
								variant="contained"
								onClick={() => nextDay(currentDay)}
							>
								{nextDayText(currentDay)}
							</Button>
							<Button
								className={classes.bankRupt}
								variant="contained"
								onClick={bankrupt}
							>
								Bankrupt
							</Button>
						</div>
					</div>
				</Card>
			</div>
		);
	}
}

export default withStyles(styles)(DayReport);
