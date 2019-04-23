import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Card } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import InterestingFact from "../../interesting_fact/InterestingFact";

const styles = {
	loadDiv: {
		width: "100%",
		height: "48vw",
		margin: "auto",
		marginTop: "5vw",
		textAlign: "center"
	},
	loadDivInner: {
		width: "30%",
		display: "inline-block",
		margin: "0 10px 0 10px",
		verticalAlign: "middle"
	},
	interestingFact: {
		width: "25%",
	},
	progress: {
		
	},
	loadingText: {
		textAlign: "center",
		fontFamily: "Staatliches",
		color: "#132a42"
	},
	simCard: {
		backgroundColor: "yellow",
		display: "block",
		margin: "auto",
		textAlign: "center",
	}
};

class Simulation extends React.Component {
	constructor() {
		super();
		this.state = {
			completed: 0
		};
	}

	componentDidMount() {
		this.timer = setInterval(this.progress, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	progress = () => {
		const { completed } = this.state;
		const { handleReport, simulate } = this.props;
		if(completed===0){
			simulate();
		}
		this.setState({ completed: completed >= 99 ? 0 : completed + 33.33 });
		if (completed >= 99) {
			handleReport();
		}
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.loadDiv}>
				<div className={[classes.loadDivInner, classes.interestingFact].join(" ")}>
					<InterestingFact factNumber="25" />
				</div>
				<div className={classes.loadDivInner}>
					<Card className={classes.simCard}>
						<Typography
							variant="h3"
							className={classes.loadingText}
						>
							Simulating
						</Typography>
						<CircularProgress
							className={classes.progress}
							variant="static"
							value={this.state.completed}
							color="primary"
							thickness={6}
							size={200}
						/>
					</Card>
				</div>
				<div className={[classes.loadDivInner, classes.interestingFact].join(" ")}>
					<InterestingFact factNumber="25" />
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Simulation);
