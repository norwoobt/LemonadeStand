import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import theme from "../../theme"

const styles = {
	root: {
		width: "80%",
		marginTop: theme.spacing.unit * 3,
		overflowX: "auto"
	},
	table: {
		width: "90%",
		margin: "auto"
	},
	row: {
		"&:nth-of-type(even)": {
			backgroundColor: "#63B0CD"
		}
	}
};

const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: "#132a42" ,
		color: theme.palette.common.white
	},
	body: {
		fontSize: 14
	}
}))(TableCell);

let id = 0;
function createData(username, profit) {
	id += 1;
	return { id, username, profit };
}

const rows = [
	createData("BryceIsRight", 262.48),
	createData("AahabLost", 255.28)
];
//Will receive number of days in props then grab data from according database table
class LeaderboardTable extends React.Component {
	render() {
		const { classes, numDays } = this.props;
		return (
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<CustomTableCell>Rank</CustomTableCell>
						<CustomTableCell align="right">
							Username
						</CustomTableCell>
						<CustomTableCell align="right">
							Total Profit
						</CustomTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow className={classes.row} key={row.id}>
							<CustomTableCell component="th" scope="row">
								{row.id}
							</CustomTableCell>
							<CustomTableCell align="right">
								{row.username}
							</CustomTableCell>
							<CustomTableCell align="right">
								{row.profit}
							</CustomTableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		);
	}
}

export default withStyles(styles)(LeaderboardTable);
