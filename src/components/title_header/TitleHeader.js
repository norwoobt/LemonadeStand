import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "../../theme";

const styles = {
	appBar: {
		flexGrow: 1
	},
};

class TitleHeader extends React.Component {
	render() {
        const {classes} = this.props;
		return (
			<MuiThemeProvider theme={theme}>
				<div className={classes.appBar}>
					<AppBar position="static" color="primary">
						<Typography
							style={{
								margin: "5px 0",
								fontFamily: "Amatic SC",
								fontSize: "300%"
							}}
							variant="h2"
							color="secondary"
							align="center"
						>
							Lemonade Stand 2
						</Typography>
					</AppBar>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default withStyles(styles)(TitleHeader);
