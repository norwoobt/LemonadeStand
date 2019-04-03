import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "../../../theme";
import Game from "../game/Game";
import Simulation from "../simulation/Simulation";
import DayReport from "../dayreport/DayReport";
import Card from "@material-ui/core/Card";
import Instructions from "../../instructions/Instructions";
import days from "../../../data/days.json";

const styles = {
	appBar: {
		flexGrow: 1
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
	dayButtonDiv: {
		marginBottom: "2vw"
	},
	homeDiv: {
		width: "80%",
		margin: "3% auto",
		backgroundColor: "yellow"
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
	},
	title: {
		fontFamily: "Staatliches",
		marginTop: "1vw"
	}
};

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			money: 20.0,
			showHome: true,
			showGame: false,
			showSimulation: false,
			showReport: false,
			currentDay: 1,
			dayLimit: 1,
			cups: 0,
			lemons: 0,
			sugar: 0,
			ice: 0,
			cupsPerPitcher: 10,
			cupPrices: [],
			lemonPrices: [],
			sugarPrices: [],
			icePrices: [],
			lemonsPerCup: 4,
			sugarPerCup: 4,
			icePerCup: 4,
			pricePerCup: 25,
			recentPurchaseItem: "",
			recentPurchaseQuantity: 0,
			recentPurhcaseCost: 0,
			cupsSold: 0,
			customerSatisfaction: 0,
			popularity: 0,
			potentialCustomers: 70,
			totalMoneySpent: 0,
			totalMoneyEarned: 0,
			totalProfit: 0,
			weatherForecast: "Sunny/Clear",
			weatherJudgement: "tremendously good"
		};
	}

	undoPurchase = () => {
		switch (this.state.recentPurchaseItem) {
			case "cups":
				this.setState({
					cups: this.state.cups - this.state.recentPurchaseQuantity,
					money: this.state.money + this.state.recentPurhcaseCost,
					recentPurchaseItem: "",
					recentPurchaseQuantity: 0,
					recentPurhcaseCost: 0
				});
				break;
			case "lemons":
				this.setState({
					lemons:
						this.state.lemons - this.state.recentPurchaseQuantity,
					money: this.state.money + this.state.recentPurhcaseCost,
					recentPurchaseItem: "",
					recentPurchaseQuantity: 0,
					recentPurhcaseCost: 0
				});
				break;
			case "sugar":
				this.setState({
					sugar: this.state.sugar - this.state.recentPurchaseQuantity,
					money: this.state.money + this.state.recentPurhcaseCost,
					recentPurchaseItem: "",
					recentPurchaseQuantity: 0,
					recentPurhcaseCost: 0
				});
				break;
			case "ice":
				this.setState({
					ice: this.state.ice - this.state.recentPurchaseQuantity,
					money: this.state.money + this.state.recentPurhcaseCost,
					recentPurchaseItem: "",
					recentPurchaseQuantity: 0,
					recentPurhcaseCost: 0
				});
				break;
			default:
				console.log("No recent purchase");
				break;
		}
	};

	updateCPP = value => {
		if (value < 6) {
			this.setState({ cupsPerPitcher: 12 });
			return 12;
		} else if (value < 8) {
			this.setState({ cupsPerPitcher: 14 });
			return 14;
		} else if (value < 10) {
			this.setState({ cupsPerPitcher: 16 });
			return 16;
		} else if (value < 13) {
			this.setState({ cupsPerPitcher: 18 });
			return 18;
		} else if (value < 15) {
			this.setState({ cupsPerPitcher: 21 });
			return 21;
		} else if (value < 18) {
			this.setState({ cupsPerPitcher: 24 });
			return 24;
		} else {
			this.setState({ cupsPerPitcher: 27 });
			return 27;
		}
	};

	purchaseItem = (item, quantity, cost) => {
		var currMoney = this.state.money;
		switch (item) {
			case "cups":
				if (currMoney >= cost) {
					this.setState({
						cups: this.state.cups + quantity,
						money: this.state.money - cost,
						recentPurchaseItem: item,
						recentPurchaseQuantity: quantity,
						recentPurhcaseCost: cost
					});
				}
				break;
			case "lemons":
				if (currMoney >= cost) {
					this.setState({
						lemons: this.state.lemons + quantity,
						money: this.state.money - cost,
						recentPurchaseItem: item,
						recentPurchaseQuantity: quantity,
						recentPurhcaseCost: cost
					});
				}
				break;
			case "sugar":
				if (currMoney >= cost) {
					this.setState({
						sugar: this.state.sugar + quantity,
						money: this.state.money - cost,
						recentPurchaseItem: item,
						recentPurchaseQuantity: quantity,
						recentPurhcaseCost: cost
					});
				}
				break;
			case "ice":
				if (currMoney >= cost) {
					this.setState({
						ice: this.state.ice + quantity,
						money: this.state.money - cost,
						recentPurchaseItem: item,
						recentPurchaseQuantity: quantity,
						recentPurhcaseCost: cost
					});
				}
				break;
			default:
				break;
		}
	};

	handleStart = numDays => () => {
		this.setState({
			dayLimit: numDays,
			showGame: true,
			showHome: false,
			showSimulation: false
		});

		console.log(numDays);
	};

	handlePlay = () => {
		this.setState({
			showGame: false,
			showHome: false,
			showSimulation: true
		});
		console.log("lemons: " + this.state.lemonsPerCup);
		console.log("sugar: " + this.state.sugarPerCup);
		console.log("ice: " + this.state.icePerCup);
		console.log("price: " + this.state.pricePerCup);
	};

	handleReport = () => {
		this.setState({
			showGame: false,
			showHome: false,
			showSimulation: false,
			showReport: true
		});
	};

	//start with getting # of potential customers
	//then calc number of exact cups sold, how many are left in the pitcher, and ice lost
	//calc total money gained
	//calc weatherjudgement
	//calc how good the recipe was to determine popularity and cust satisfaction for that day
	simulate = () => {
		switch (this.state.weatherForecast) {
			case "sunny/clear":
				this.setState({
					potentialCustomers:
						115 - (Math.random() * 20)
				});
				break;
			default:
				break;
		}
	};

	updateQuantity = (value, type) => {
		switch (type) {
			case "lemons":
				this.setState({ lemonsPerCup: value });
				break;
			case "sugar":
				this.setState({ sugarPerCup: value });
				break;
			case "ice":
				this.setState({ icePerCup: value });
				break;
			case "price":
				this.setState({ pricePerCup: value });
				break;
			default:
				break;
		}
	};

	render() {
		const { classes } = this.props;
		const {
			showHome,
			showGame,
			showSimulation,
			showReport,
			currentDay,
			cupsPerPitcher,
			dayLimit,
			lemonsPerCup,
			sugarPerCup,
			icePerCup,
			pricePerCup,
			cups,
			lemons,
			sugar,
			ice,
			money,
			potentialCustomers,
			cupsSold,
			totalMoneySpent,
			totalMoneyEarned,
			totalProfit,
			weatherForecast,
			weatherJudgement
		} = this.state;
		return (
			<MuiThemeProvider theme={theme}>
				{/* if showHome is true then display Home stuff */}
				{showHome && (
					<div style={{ textAlign: "center" }}>
						<Card className={classes.homeDiv}>
							<Typography
								variant="h3"
								align="center"
								className={classes.title}
							>
								Are you ready to Play?
							</Typography>
							<Instructions />
							<div className={classes.dayButtonDiv}>
								<Button
									variant="contained"
									onClick={this.handleStart(7)}
									className={[
										classes.dayButton,
										classes.button1
									].join(" ")}
								>
									7 Days
								</Button>
								<Button
									variant="contained"
									onClick={this.handleStart(14)}
									className={[
										classes.dayButton,
										classes.button2
									].join(" ")}
								>
									14 Days
								</Button>
								<Button
									variant="contained"
									onClick={this.handleStart(30)}
									className={[
										classes.dayButton,
										classes.button3
									].join(" ")}
								>
									30 Days
								</Button>
							</div>
						</Card>
					</div>
				)}

				{/* if showGame is true then display Game stuff */}
				{showGame && (
					<Game
						clickSimulation={this.handlePlay}
						currentDay={currentDay}
						dayLimit={dayLimit}
						cups={cups}
						lemons={lemons}
						sugar={sugar}
						ice={ice}
						cupsPerPitcher={cupsPerPitcher}
						money={money.toFixed(2)}
						lemonsPerCup={lemonsPerCup}
						sugarPerCup={sugarPerCup}
						icePerCup={icePerCup}
						pricePerCup={pricePerCup}
						updateQuantity={this.updateQuantity}
						purchaseItem={this.purchaseItem}
						undoPurchase={this.undoPurchase}
						updateCPP={this.updateCPP}
					/>
				)}

				{/* if showSimulation is true then display Simulation stuff */}
				{showSimulation && (
					<Simulation
						handleReport={this.handleReport}
						simulate={this.simulate}
					/>
				)}
				{showReport && (
					<DayReport
						currentDay={currentDay}
						potentialCustomers={potentialCustomers}
						cupsSold={cupsSold}
						weatherJudgement={weatherJudgement}
					/>
				)}
			</MuiThemeProvider>
		);
	}
}
export default withStyles(styles)(Home);
