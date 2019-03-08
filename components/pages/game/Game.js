import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "../../../theme";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from 'react-router-dom/Route'

//variables taken from Game object
var money = 20.0;
var day = 1;
var cups = 0;
var lemons = 0;
var sugar = 0;
var ice = 0;
var customerSatisfaction = 0;
var popularity = 0;

const styles = {
	appBar: {
		flexGrow: 1
	},
	body: {
		height: "36vw",
		marginTop: "2vw"
	},
	mainCardDiv: {
		position: "relative",
		width: "100%",
		height: "100%",
		webkitOverflowScrolling: "touch"
	},
	homeScreen: {
		backgroundColor: "yellow",
		margin: "auto",
		textAlign: "center",
		width: "80%",
		height: "100%"
	}
};

// goToDay() {

// }

class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			inv: [cups, lemons, sugar, ice], //[0] = cups, [1] = lemons, [2] = sugar, [3] = ice
			currMoney: money.toFixed(2),
			currDay: day
		};
	}

	render() {
		const { classes } = this.props;
		return (
			<Router>
				<MuiThemeProvider theme={theme}>
					<div className={classes.appBar}>
						<AppBar position="static" color="primary">
							<Typography
								style={{
									margin: "5px 0",
									fontFamily: "Amatic SC",
									fontSize: "600%"
								}}
								variant="h2"
								color="secondary"
								align="center"
							>
								Lemonade Stand 2
							</Typography>
						</AppBar>
					</div>
					<body className={classes.body}>
						<div className={classes.mainCardDiv}>
							<Card className={classes.homeScreen}>
								<CardContent className={classes.cc}>
									<Typography
										style={{
											fontFamily: "Staatliches",
											height: "100%"
										}}
										align="justify"
									>
										<Button
											variant="contained"
											className={classes.ibutton}
										>
											50 for $
										</Button>
									</Typography>
								</CardContent>
							</Card>
						</div>
					</body>
				</MuiThemeProvider>
			</Router>
		);
	}
}

Game.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Game);
