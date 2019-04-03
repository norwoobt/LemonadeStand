import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import Ingredient from "../../ingredient/Ingredient";

const styles = {
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
	recipeHeader: {
		fontFamily: "Staatliches",
		width: "100%",
		marginBottom: "2vw",
		display: "inline-block",
		borderBottom: "0.5vw solid #000",
		paddingBottom: "0.5vw"
	}
};


class RecipeCard extends React.Component {

	render() {
		const { classes, lemonsPerCup, sugarPerCup, icePerCup, cupsPerPitcher, updateCPP, updateQuantity} = this.props;
		return (
			<Card style={styles.recipeCard}>
				<CardContent>
					<Typography variant="h4" className={classes.recipeHeader}>
						Recipe Creation
					</Typography>
					<div
						style={{
							width: "20%",
							float: "left"
						}}
					>
						<Ingredient
							description="Lemons Per Pitcher"
							quantity={lemonsPerCup}
							updateQuantity={updateQuantity}
							type="lemons"
							textColor="yellow"
						/>
						<Ingredient
							description="Cups of Sugar Per Pitcher"
							quantity={sugarPerCup}
							updateQuantity={updateQuantity}
							type="sugar"
							textColor="red"
						/>
						<Ingredient
							cupsPerPitcher={cupsPerPitcher}
							quantity={icePerCup}
							updateQuantity={updateQuantity}
							updateCPP={updateCPP}
							type="ice"
							textColor="blue"
						/>
					</div>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(RecipeCard);
