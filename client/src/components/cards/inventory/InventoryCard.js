import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles, Typography, MuiThemeProvider } from "@material-ui/core";
import InventoryItem from "../../inventory_item/InventoryItem";
import theme from "../../../theme";
import BuyButton from "../../buy_button/BuyButton";
import Button from "@material-ui/core/Button";

const styles = {
	td: {
		textAlign: "center",
		width: "120px",
		paddingRight: "05px"
	},
	undoPurchaseStyle: {
		marginLeft: "10vw",
		marginTop: "-2vw",
		width: "18vw",
		height: "4vw",
		fontFamily: "Staatliches",
		fontSize: "2vw",
		border: "solid",
		backgroundColor: "darkorange",
		paddingBottom: "30px"
	},
	cc: {
		height: "100%",
		overflow: "hidden"
	},
	istock: {
		height: "90%",
		width: "25%",
		display: "inline-block"
	},
	stockList: {
		fontSize: "3.2vw",
		listStyleType: "none",
		marginTop: "1.0vw",
		padding: "0",
		paddingLeft: "0.5vw"
	},
	buystock: {
		position: "absolute",
		height: "90%",
		width: "55%",
		display: "inline-block",
		marginLeft: "3vw"
	},
	buytable: {
		marginTop: "1vw",
		tableLayout: "fixed",
		height: "1vw",
		width: "375px"
	},
	inventoryCard: {
		backgroundColor: "yellow",
		margin: "auto",
		marginLeft: "10vw",
		width: "80%",
		height: "100%",
		display: "inline-block",
		verticalAlign: "middle",
		fontFamily: "Staatliches"
	},
	inventoryHeader: {
		fontFamily: "Staatliches",
		margin: "0",
		paddingLeft: "1vw",
		paddingRight: "1vw",
		fontSize: "4vw",
		display: "inline-block",
		borderBottom: "0.5vw solid #000",
		paddingBottom: "0.5vw"
	}
};

class InventoryCard extends React.Component {
	render() {
		const {
			classes,
			cups,
			lemons,
			sugar,
			ice,
			undoPurchase,
			purchaseItem
		} = this.props;
		return (
			<MuiThemeProvider theme={theme}>
				<Card style={styles.inventoryCard}>
					<CardContent styles={styles.cc}>
						<div style={styles.istock}>
							<Typography
								variant="h4"
								className={classes.inventoryHeader}
							>
								Inventory
							</Typography>
							<ul className={classes.stockList}>
								<InventoryItem item="Cups" quantity={cups} />
								<InventoryItem
									item="Lemons"
									quantity={lemons}
								/>
								<InventoryItem
									item="Cups of Sugar"
									quantity={sugar}
								/>
								<InventoryItem
									item="Ice Cubes"
									quantity={ice}
								/>
							</ul>
						</div>
						<div style={styles.buystock}>
							<Typography
								variant="h4"
								className={classes.inventoryHeader}
								style={{
									marginLeft: "10px"
								}}
							>
								Buy More
							</Typography>

							<Button
								variant="contained"
								className={classes.undoPurchaseStyle}
								onClick={undoPurchase}
							>
								Undo Recent Purhcase
							</Button>
							<table className={classes.buytable}>
								<tbody>
									<tr>
										<td style={styles.td}>
											<BuyButton
												className={classes.iButtonEven}
												purchaseItem={purchaseItem}
												type="cups"
												quantity={25}
												cost={0.75}
												buttonEven={false}
											/>
										</td>

										<td className={classes.td}>
											<BuyButton
												purchaseItem={purchaseItem}
												type="cups"
												quantity={50}
												cost={1.25}
												buttonEven={false}
											/>
										</td>
										<td className={classes.td}>
											<BuyButton
												purchaseItem={purchaseItem}
												type="cups"
												quantity={100}
												cost={2.0}
												buttonEven={false}
											/>
										</td>
									</tr>
									<tr>
										<td className={classes.td}>
											<BuyButton
												purchaseItem={purchaseItem}
												type="lemons"
												quantity={10}
												cost={1.0}
												buttonEven={true}
											/>
										</td>

										<td className={classes.td}>
											<BuyButton
												purchaseItem={purchaseItem}
												type="lemons"
												quantity={30}
												cost={2.0}
												buttonEven={true}
											/>
										</td>
										<td className={classes.td}>
											<BuyButton
												purchaseItem={purchaseItem}
												type="lemons"
												quantity={75}
												cost={3.0}
												buttonEven={true}
											/>
										</td>
									</tr>
									<tr>
										<td className={classes.td}>
											<BuyButton
												purchaseItem={purchaseItem}
												type="sugar"
												quantity={8}
												cost={1.0}
												buttonEven={false}
											/>
										</td>

										<td className={classes.td}>
											<BuyButton
												purchaseItem={purchaseItem}
												type="sugar"
												quantity={20}
												cost={2.0}
												buttonEven={false}
											/>
										</td>
										<td className={classes.td}>
											<BuyButton
												purchaseItem={purchaseItem}
												type="sugar"
												quantity={48}
												cost={3.0}
												buttonEven={false}
											/>
										</td>
									</tr>
									<tr>
										<td className={classes.td}>
											<BuyButton
												purchaseItem={purchaseItem}
												type="ice"
												quantity={100}
												cost={1.0}
												buttonEven={true}
											/>
										</td>

										<td className={classes.td}>
											<BuyButton
												purchaseItem={purchaseItem}
												type="ice"
												quantity={250}
												cost={2.0}
												buttonEven={true}
											/>
										</td>
										<td className={classes.td}>
											<BuyButton
												purchaseItem={purchaseItem}
												type="ice"
												quantity={500}
												cost={3.0}
												buttonEven={true}
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</CardContent>
				</Card>
			</MuiThemeProvider>
		);
	}
}

export default withStyles(styles)(InventoryCard);
