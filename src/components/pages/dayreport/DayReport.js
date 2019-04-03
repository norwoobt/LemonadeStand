import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
	header: {
		width: "100%",
	},
	headText: {
		fontFamily: "Staatliches",
		textAlign: "center",
		color: "#132a42"
	},
	reportCard: {
		backgroundColor: "yellow",
		width: "80%",
		heihgt: "38vw",
		margin: "3% auto"
	},
	text: {
		textAlign: "center",
		fontFamily: "Staatliches",
	},
};

class DayReport extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		const { classes, currentDay, weatherJudgement, cupsSold, potCustomers, customerSatisfaction, popularity } = this.props;
		return (
			<div>
				<Card className={classes.reportCard}>
					<div className={classes.header}>
						<Typography className={classes.headText} variant="h4">
							Day {currentDay}: End of Day Report
						</Typography>

						<Typography className={classes.text}>
							You managed to sell {cupsSold} cups to {potCustomers} potential Customers.
						</Typography>

						<Typography className={classes.text}>
							Considering the weather, this is {weatherJudgement}!
						</Typography>
						<br/>
						<div>
							<Typography>
								Your Customer Satisfaction:{" "}
							</Typography>
							<LinearProgress
								variant="determinate"
								value={customerSatisfaction}
							/>
						</div>

						<div>
							<Typography>Your Popularity: </Typography>
							<LinearProgress
								variant="determinate"
								value={popularity}
							/>
						</div>
					</div>
				</Card>
			</div>
		);
	}
}

export default withStyles(styles)(DayReport);
