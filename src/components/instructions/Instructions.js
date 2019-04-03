import React from "react";
import { withStyles, Typography } from "@material-ui/core";

const styles = {
	instructionText: {
		fontFamily: "Staatliches",
		fontSize: "2vw"
	},
	instructionTextDiv: {
		backgroundColor: "#CCCC00",
        border: "inset",
        borderColor: "#666600",
        padding: "5px",
		width: "80%",
		margin: "auto",
		display: "flex",
		position: "relative",
		height: "24vw",
		overflowX: "hidden",
		overflowY: "scroll",
		webkitOverflowScrolling: "touch",
		marginBottom: "2vw",
		marginTop: "1vw",
		textAlign: "left"
	}
};

class Instructions extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.instructionTextDiv}>
				<Typography variant="body1" className={classes.instructionText}>
					You have 7, 14, or 30 days to make as much money as
					possible, and you’ve decided to open a lemonade stand!
					You’ll have complete control over your business, including
					pricing, quality control, inventory control, and purchasing
					supplies. Buy your ingredients, set your recipe, and start
					selling!
					<br />
					<br />
					The first thing you’ll have to worry about is your recipe.
					At first, go with the default recipe, but try to experiment
					a little bit and see if you can find a better one. Make sure
					you buy enough of all your ingredients, or you won’t be able
					to sell!
					<br />
					<br />
					You’ll also have to deal with the weather, which will play a
					big part when customers are deciding whether or not to buy
					your lemonade. Read the weather report every day! When the
					temperature drops, or the weather turns bad (overcast,
					cloudy, rain), don’t expect them to buy nearly as much as
					they would on a hot, hazy day, so buy accordingly. Feel free
					to set your prices higher on those hot, muggy days too, as
					you’ll make more profit, even if you sell a bit less
					lemonade.
					<br />
					<br />
					The other major factor which comes into play is your
					customer’s satisfaction. As you sell your lemonade, people
					will decide how much they like or dislike it.  This will
					make your business more or less popular. If your popularity
					is low, fewer people will want to buy your lemonade, even if
					the weather is hot and sunny. But if you’re popularity is
					high, you’ll do okay, even on a rainy day!
					<br />
					<br />
					At the end of 7, 14, or 30 days you’ll see how much money
					you made. Play again, and try to beat your high score!
				</Typography>
			</div>
		);
	}
}

export default withStyles(styles)(Instructions);
