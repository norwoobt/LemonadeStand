import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Card, Button } from "@material-ui/core";
import LeaderboardTable from "../../leaderboard_table/LeaderboardTable";

const styles = {
	leaderboardCard: {
		width: "80%",
		margin: "3% auto",
		backgroundColor: "yellow"
	},
	leaderboardContainer: {
		display: "block",
		margin: "auto",
		textAlign: "center"
	},
	leaderboardTable: {
		display: "block",
		margin: "auto",
		textAlign: "center"
	},
	leaderboardText: {
		textAlign: "center",
		fontFamily: "Staatliches"
	},
	dayButton: {
		fontFamily: "Staatliches",
		fontSize: "3vw",
		paddingTop: "0",
		paddingBottom: "0",
		marginRight: "2vw",
		marginLeft: "2vw"
	},
	button1: {
		backgroundColor: "chartreuse"
	},
	button2: {
		backgroundColor: "#8b9dc3"
	},
	button3: {
		backgroundColor: "indianred"
	},
	button4: {
		backgroundColor: "#FFBF00"
	},
	dayButtonDiv: {
		marginBottom: "2vw",
		marginTop: "2vw"
	}
};

class Leaderboard extends React.Component {
	constructor() {
		super();
		this.state = {
			showSeven: false,
			showFourteen: false,
			showThirty: true
		};
	}
	boardDisplay = numDays => () => {
		switch (numDays) {
			case 30:
				this.setState({
					showSeven: false,
					showFourteen: false,
					showThirty: true
				});
				break;
			case 14:
				this.setState({
					showSeven: false,
					showFourteen: true,
					showThirty: false
				});
				break;
			case 7:
				this.setState({
					showSeven: true,
					showFourteen: false,
					showThirty: false
				});
				break;
			default:
				break;
		}
	};

	render() {
		const { classes, backToHome } = this.props;
		const { showSeven, showFourteen, showThirty } = this.state;
		return (
			<Card className={classes.leaderboardCard}>
				<Typography className={classes.leaderboardText} variant="h3">
					Leaderboard
				</Typography>
				<div className={classes.leaderboardContainer}>
					{showThirty && (
						<LeaderboardTable
							numDays={30}
							className={classes.leaderboardTable}
						/>
					)}
					{showFourteen && (
						<LeaderboardTable
							numDays={14}
							className={classes.leaderboardTable}
						/>
					)}
					{showSeven && (
						<LeaderboardTable
							numDays={7}
							className={classes.leaderboardTable}
						/>
					)}
				</div>
				<div className={classes.dayButtonDiv}>
					<Button
						variant="contained"
						onClick={this.boardDisplay(7)}
						className={[classes.dayButton, classes.button1].join(
							" "
						)}
					>
						7 Day
					</Button>
					<Button
						variant="contained"
						onClick={this.boardDisplay(14)}
						className={[classes.dayButton, classes.button2].join(
							" "
						)}
					>
						14 Day
					</Button>
					<Button
						variant="contained"
						onClick={this.boardDisplay(30)}
						className={[classes.dayButton, classes.button3].join(
							" "
						)}
					>
						30 Day
					</Button>
					<Button
						variant="contained"
						onClick={backToHome}
						className={[classes.dayButton, classes.button4].join(
							" "
						)}
					>
						Back to Home
					</Button>
				</div>
			</Card>
		);
	}
}

export default withStyles(styles)(Leaderboard);
