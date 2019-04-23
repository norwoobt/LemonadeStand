import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
	Typography,
	Card,
	CardContent,
	MuiThemeProvider,
	TextField,
	Button
} from "@material-ui/core";
import TitleHeader from "../../title_header/TitleHeader";
import theme from "../../../theme";

const styles = {
	loginCard: {
		width: "40%",
		margin: "10% auto 0"
	},
	margin: {
		margin: theme.spacing.unit
	},
	textField: {
		flexBasis: 200
    },
    buttonDiv: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "color"
    }
};

class CreateAccount extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		const { classes } = this.props;
		return (
			<MuiThemeProvider>
				<TitleHeader />
				<Card className={classes.loginCard}>
					<Typography variant="h3" align="center">
						Login
					</Typography>
					<CardContent>
						<TextField
							id="outlined-email-username"
							label="Email/Username"
							className={classes.textField}
							value={this.state.name}
							margin="normal"
							variant="outlined"
						/>

						<TextField
							id="outlined-password"
							label="Password"
							type="password"
							className={classes.textField}
							value={this.state.name}
							margin="normal"
							variant="outlined"
						/>
						<div className={classes.buttonDiv}>
							<Button variant="contained">Login</Button>
							<Button variant="contained">Create Account</Button>
							<Button variant="contained">Play as Guest</Button>
						</div>
					</CardContent>
				</Card>
			</MuiThemeProvider>
		);
	}
}

export default withStyles(styles)(CreateAccount);
