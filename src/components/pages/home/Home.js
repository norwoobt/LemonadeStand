import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "../../../theme";

const styles = {
    appBar: {
        flexGrow: 1
    },
    mainCardDiv: {
        position: "fixed",
        top: "50px",
        textAlign: "center",
        width: "100%"
    },
    mainCard: {
        backgroundColor: "yellow",
        margin: "100px auto",
        marginTop: "175px",
        height: "500px",
        minHeight: "500px",
        maxHeight: "500px",
        width: "1400px",
        minWidth: "1400px",
        maxWidth: "1400px"
    },
    progressCardDiv: {
        position: "fixed",
        bottom: "10px",
        textAlign: "center",
        width: "100%"
    },
    progressCard: {
        backgroundColor: "yellow",
        margin: "auto",
        marginBottom: "30px",
        height: "120px",
        width: "1200px",
        minWidth: "1200px",
        maxWidth: "1200px"
    }
};

class Home extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.appBar}>
                    <AppBar position="static" color="primary">
                        <Typography
                            style={{
                                margin: "20px 0",
                                fontFamily: "Amatic SC",
                                fontSize: "800%"
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
                        <Card className={classes.mainCard}>
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
                    <div className={classes.progressCardDiv}>
                        <Card className={classes.progressCard}>
                            <CardHeader
                                title="Progress"
                                titleTypographyProps={{
                                    style: {
                                        margin: "10px",
                                        fontFamily: "Staatliches"
                                    },
                                    variant: "h5",
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
                                    Progress Stuff
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </body>
            </MuiThemeProvider>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
