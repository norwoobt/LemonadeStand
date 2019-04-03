import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "../../../theme";
import InventoryCard from "../../cards/inventory/InventoryCard";
import RecipeCard from "../../cards/recipe/RecipeCard";
import PriceCard from "../../cards/price/PriceCard";
import ProgressCard from "../../cards/progress/ProgressCard";

const styles = {
	mainCardDiv: {
		position: "relative",
		width: "100%",
		marginTop: "1.5vw",
		marginBottom: "1.5vw",
		height: "37vw",
		overflowX: "scroll",
		overflowY: "hidden",
		whiteSpace: "nowrap",
		webkitOverflowScrolling: "touch"
	},
	bottomDiv: {
		position: "relative",
		textAlign: "center",
		margin: "auto",
		width: "100%",
		height: "6.0vw"
	}
};

class Game extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const {
			classes,
			currentDay,
			dayLimit,
			cupsPerPitcher,
			updateCPP,
			clickSimulation,
			cups,
			lemons,
			sugar,
			ice,
			lemonsPerCup,
			sugarPerCup,
			icePerCup,
			pricePerCup,
			updateQuantity,
			purchaseItem,
			undoPurchase,
			money
		} = this.props;
		return (
			<MuiThemeProvider theme={theme}>
				<div>
					<div className={classes.mainCardDiv}>
						<InventoryCard
							cups={cups}
							lemons={lemons}
							sugar={sugar}
							ice={ice}
							purchaseItem={purchaseItem}
							undoPurchase={undoPurchase}
						/>
						<RecipeCard //because Recipe Card is not a stable parent - Home never goes away
							lemonsPerCup={lemonsPerCup}
							sugarPerCup={sugarPerCup}
							icePerCup={icePerCup}
							updateQuantity={updateQuantity} //passing function from home to update quantity change
							updateCPP={updateCPP}
							cupsPerPitcher={cupsPerPitcher}
						/>
						<PriceCard
							clickSimulation={clickSimulation}
							pricePerCup={pricePerCup}
							updateQuantity={updateQuantity} //passing function from home to update quantity change
						/>
					</div>
					<div className={classes.bottomDiv}>
						<ProgressCard 
						money={money}/>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default withStyles(styles)(Game);
