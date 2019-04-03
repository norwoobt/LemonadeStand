import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
	Typography,
	Card,
	CardContent,
	TextField,
	Button
} from "@material-ui/core";
import TitleHeader from "../../title_header/TitleHeader";
import theme from "../../../theme";
import Home from "../home/Home"

const styles = {
	loginCard: {
		width: "80%",
		margin: "3% auto",
		backgroundColor: "yellow"
	},
	loginText: {
		marginTop: "10px",
		marginBottom: "-20px",
		fontFamily: "Staatliches",
	},
	margin: {
		margin: theme.spacing.unit
	},
	textField: {
		flexBasis: 200,
		backgroundColor: "white",
		color: "black"
	},
	buttonDiv: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "40%",
		margin: "auto"
	},
	inputDiv: {
		display: "flex",
		justifyContent: "space-evenly",
		marginBottom: "10px"
	},
	button: {
		marginBottom: "10px",
		fontFamily: "Staatliches",
		padding: "0",
		fontSize: "3vw"
	},
	button1: {
		backgroundColor: "#dfe3ee"
	},
	button2: {
		backgroundColor: "#8b9dc3"
	},
	button3: {
		backgroundColor: "#3b5998"
	}
};

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			showHome: false,
			showLogin: true,
			loginUser: "",
			password: ""
		};
	}

	handleLogin = () => {
		this.setState({
			showHome: true,
			showLogin: false,
		});
	};

	handleChange = name => event => {
		this.setState({[name]: event.target.value});
	};

	render() {
		const { classes } = this.props;
		const {showLogin, showHome} = this.state;
		return (
			<div>
				<TitleHeader />
				{showLogin && (
				<Card className={classes.loginCard}>
					<Typography
						className={classes.loginText}
						variant="h3"
						align="center"
					>
						Welcome
					</Typography>
					<CardContent>
						<div className={classes.inputDiv}>
							<TextField
								id="outlined-email-username"
								label="Email/Username"
								className={classes.textField}
								value={this.state.loginUser}
								onChange={this.handleChange('loginUser')}
								margin="normal"
								variant="outlined"
							/>

							<TextField
								id="outlined-password"
								label="Password"
								type="password"
								className={classes.textField}
								value={this.state.password}
								onChange={this.handleChange('password')}
								margin="normal"
								variant="outlined"
							/>
						</div>
						<div className={classes.buttonDiv}>
							<Button
								className={[classes.button, classes.button1].join(' ')}
								variant="contained"
								onClick={this.handleLogin}
							>
								Login
							</Button>
							<Button
								className={[classes.button, classes.button2].join(' ')}
								variant="contained"
							>
								Create Account
							</Button>
							<Button
								className={[classes.button, classes.button3].join(' ')}
								variant="contained"
							>
								Play as Guest
							</Button>
						</div>
					</CardContent>
				</Card>
				)}
				
				{showHome && (
					<Home/>
				)}
			</div>
		);
	}
}

export default withStyles(styles)(Login);
