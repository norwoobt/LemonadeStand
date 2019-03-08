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

//variables that belong to and are generated with each day
var cupPrice = -1; //Math.random() * (0.93 - 0.8) + 0.8;
var lemonPrice = -1; //Math.random() * (0.65 - 0.52) + 0.52;
var sugarPrice = -1; //Math.random() * (0.7 - 0.53) + 0.53;
var icePrice = -1; //Math.random() * (0.94 - 0.78) + 0.75;
var currTemp = -1;
var currFC = "null"; //forecasts[Math.random() * (4 - 0)];

//recent purchase
var costOfPurchase = 0;
var itemPurchased = 0; //0 = cups, 1 = lemons, 2 = sugar, 3 = ice
var numPurchased = 0; //Ex: 25 cups purchased

//variables taken from Game object
var currMoney = -1;
var currDay = -1;
var cups = -1;
var lemons = -1;
var sugar = -1;
var ice = -1;
var inventory = [cups, lemons, sugar, ice];

const liStyle = {
	paddingTop: "1.5vw",
	paddingBottom: "2vw"
};

const td = {
	textAlign: "center",
	margin: "auto",
	paddingTop: "0.9vw",
	paddingBottom: "0.8vw"
};

const progTDStyle = {
	borderRight: "solid",
	borderWidth: "0.25vw",
	fontSize: "2.1vw",
	paddingRight: "0.5vw",
	paddingLeft: "0.5vw"
};
const progTDStyleFinal = {
	fontSize: "2.1vw",
	margin: "auto",
	paddingLeft: "0.5vw"
};
const styles = {
	ibutton: {
		height: "3.5vw",
		width: "90%",
		fontFamily: "Staatliches",
		fontSize: "2.5vw",
		textAlign: "center",
		color: "primary"
	},
	undoPurchase: {
		marginLeft: "13vw",
		marginTop: "-3vw",
		width: "18vw",
		height: "4vw",
		fontFamily: "Staatliches",
		fontSize: "2vw"
	},
	cc: {
		height: "100%",
		overflow: "hidden"
	},
	istock: {
		height: "90%",
		width: "25%",
		borderStyle: "solid",
		display: "inline-block"
	},
	buystock: {
		position: "absolute",
		height: "90%",
		width: "55%",
		borderStyle: "solid",
		display: "inline-block",
		marginLeft: "2.5%"
	},
	buytable: {
		border: "solid",
		width: "95%"
	},
	appBar: {
		flexGrow: 1
	},
	mainCardDiv: {
		position: "relative",
		width: "100%",
		marginTop: "2vw",
		marginBottom: "1vw",
		height: "30vw",
		overflowX: "scroll",
		overflowY: "hidden",
		whiteSpace: "nowrap",
		webkitOverflowScrolling: "touch"
	},
	inventoryCard: {
		backgroundColor: "yellow",
		margin: "auto",
		marginLeft: "8vw",
		textAlign: "center",
		width: "80%",
		height: "100%",
		display: "inline-block",
		verticalAlign: "middle"
	},
	recipeCard: {
		backgroundColor: "LawnGreen",
		margin: "auto",
		marginLeft: "8vw",
		textAlign: "center",
		width: "80%",
		height: "100%",
		display: "inline-block",
		verticalAlign: "middle"
	},
	priceCard: {
		backgroundColor: "cyan",
		margin: "auto",
		marginLeft: "8vw",
		textAlign: "center",
		width: "80%",
		height: "100%",
		display: "inline-block",
		verticalAlign: "middle"
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
		width: "72%",
		borderStyle: "solid",
		borderWidth: "3px",
		overflow: "hidden"
	}
};

class Day extends React.Component {
	constructor(
		day,
		gMoney,
		temp,
		fc,
		cp1,
		cp2,
		cp3,
		lp1,
		lp2,
		lp3,
		sp1,
		sp2,
		sp3,
		ip1,
		ip2,
		ip3
	) {
		super();
		this.state = {
			inv: inventory, //[0] = cups, [1] = lemons, [2] = sugar, [3] = ice
			cupPrices: [cp1, cp2, cp3],
			lemonPrices: [lp1, lp2, lp3],
			sugarPrices: [sp1, sp2, sp3],
			icePrices: [ip1, ip2, ip3],
			currMoney: gMoney.toFixed(2),
			currDay: day,
			currTemp: temp,
			currForecast: fc
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
					<body>
						<div className={classes.mainCardDiv}>
							<Card className={classes.inventoryCard}>
								<CardContent className={classes.cc}>
									<Typography
										style={{
											fontFamily: "Staatliches",
											height: "100%"
										}}
										align="justify"
									>
										<div className={classes.istock}>
											<p
												style={{
													margin: "0",
													marginLeft: "1vw",
													marginTop: "2vw",
													padding: "0.3vw",
													fontSize: "4vw",
													display: "inline-block",
													borderBottom:
														"0.5vw solid #000",
													paddingBottom: "1vw"
												}}
											>
												Inventory
											</p>
											<ul
												style={{
													fontSize: "3.2vw",
													listStyleType: "none",
													marginTop: "1.2vw",
													padding: "0",
													paddingLeft: "0.5vw",
													paddingTop: "0vw"
												}}
											>
												{/* Object.entries(this.state.inventory).map(inventoryItem => {{ */}
												{/* return {<li>{inventoryItem[0]}: {inventoryItem[1]}</li>})} } */}

												<li style={liStyle}>
													Cups: {this.state.inv[0]}
												</li>
												<li style={liStyle}>
													Lemons: {this.state.inv[1]}
												</li>
												<li style={liStyle}>
													Cups of Sugar:{" "}
													{this.state.inv[2]}
												</li>
												<li style={liStyle}>
													Ice Cubes:{" "}
													{this.state.inv[3]}
												</li>
											</ul>
										</div>
										<div className={classes.buystock}>
											<p
												style={{
													margin: "0",
													marginLeft: "1vw",
													marginTop: "2vw",
													padding: "0.3vw",
													fontSize: "4vw",
													display: "inline-block",
													borderBottom:
														"0.5vw solid #000",
													paddingBottom: "1vw"
												}}
											>
												Buy More
											</p>

											<Button
												variant="contained"
												className={classes.undoPurchase}
											>
												Undo Recent Purhcase
											</Button>
											<table className={classes.buytable}>
												<tbody>
													<tr>
														<td style={td}>
															<Button
																variant="contained"
																color="primary"
																className={
																	classes.ibutton
																}
															>
																25 for $
																{this.state.cupPrices[0].toFixed(
																	2
																)}{" "}
															</Button>
														</td>

														<td style={td}>
															<Button
																variant="contained"
																className={
																	classes.ibutton
																}
															>
																50 for $
																{this.state.cupPrices[1].toFixed(
																	2
																)}
															</Button>
														</td>
														<td style={td}>
															<Button
																variant="contained"
																className={
																	classes.ibutton
																}
															>
																100 for $
																{this.state.cupPrices[2].toFixed(
																	2
																)}
															</Button>
														</td>
													</tr>
													<tr>
														<td style={td}>
															<Button
																variant="contained"
																className={
																	classes.ibutton
																}
															>
																10 for $
																{this.state.lemonPrices[0].toFixed(
																	2
																)}
															</Button>
														</td>

														<td style={td}>
															<Button
																variant="contained"
																className={
																	classes.ibutton
																}
															>
																30 for $
																{this.state.lemonPrices[1].toFixed(
																	2
																)}
															</Button>
														</td>
														<td style={td}>
															<Button
																variant="contained"
																className={
																	classes.ibutton
																}
															>
																75 for $
																{this.state.lemonPrices[2].toFixed(
																	2
																)}
															</Button>
														</td>
													</tr>
													<tr>
														<td style={td}>
															<Button
																variant="contained"
																className={
																	classes.ibutton
																}
															>
																8 for $
																{this.state.sugarPrices[0].toFixed(
																	2
																)}
															</Button>
														</td>

														<td style={td}>
															<Button
																variant="contained"
																className={
																	classes.ibutton
																}
															>
																20 for $
																{this.state.sugarPrices[1].toFixed(
																	2
																)}
															</Button>
														</td>
														<td style={td}>
															<Button
																variant="contained"
																className={
																	classes.ibutton
																}
															>
																48 for $
																{this.state.sugarPrices[2].toFixed(
																	2
																)}
															</Button>
														</td>
													</tr>
													<tr>
														<td style={td}>
															<Button
																variant="contained"
																className={
																	classes.ibutton
																}
															>
																100 for $
																{this.state.icePrices[0].toFixed(
																	2
																)}
															</Button>
														</td>

														<td style={td}>
															<Button
																variant="contained"
																className={
																	classes.ibutton
																}
															>
																250 for $
																{this.state.icePrices[1].toFixed(
																	2
																)}
															</Button>
														</td>
														<td style={td}>
															<Button
																variant="contained"
																className={
																	classes.ibutton
																}
															>
																500 for $
																{this.state.icePrices[2].toFixed(
																	2
																)}
															</Button>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</Typography>
								</CardContent>
							</Card>
							<Card className={classes.recipeCard}>
								<CardHeader
									title="Main Card"
									titleTypographyProps={{
										style: {
											margin: "10px",
											fontFamily: "Staatliches"
										},
										variant: "h3",
										align: "center"
									}}
								/>
								<CardContent>
									<Typography
										style={{
											fontFamily: "Staatliches"
										}}
										variant="p"
										align="justify"
									>
										Main Card Stuff
									</Typography>
								</CardContent>
							</Card>
							<Card className={classes.priceCard}>
								<CardHeader
									title="Main Card"
									titleTypographyProps={{
										style: {
											margin: "10px",
											fontFamily: "Staatliches"
										},
										variant: "h3",
										align: "center"
									}}
								/>
								<CardContent>
									<Typography
										style={{
											fontFamily: "Staatliches"
										}}
										variant="p"
										align="justify"
									>
										Main Card Stuff
									</Typography>
								</CardContent>
							</Card>
						</div>
						<div className={classes.bottomDiv}>
							<Card className={classes.progressCard}>
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
												<td style={progTDStyle}>
													Progress
												</td>
												<td style={progTDStyle}>
													Day: {this.state.currDay}
												</td>
												<td style={progTDStyle}>
													Money: $
													{this.state.currMoney}
												</td>
												<td style={progTDStyle}>
													Temperature:{" "}
													{this.state.currTemp}℉
												</td>
												<td style={progTDStyleFinal}>
													Weather Forecast:{" "}
													{this.state.currForecast}
												</td>
											</tr>
										</tbody>
									</table>
								</CardContent>
							</Card>
						</div>
					</body>
				</MuiThemeProvider>
			</Router>
		);
	}
}

Day.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Day);
