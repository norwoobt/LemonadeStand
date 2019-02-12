import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    palette: {
        common: { black: "#000", white: "#fff" },
        background: { paper: "#fff", default: "#fafafa" },
        primary: {
            light: "rgba(46, 102, 166, 1)",
            main: "rgba(19, 42, 66, 1)",
            dark: "rgba(0, 0, 0, 1)",
            contrastText: "#fff"
        },
        secondary: {
            light: "rgba(255, 250, 73, 1)",
            main: "rgba(243, 253, 32, 1)",
            dark: "rgba(225, 255, 0, 1)",
            contrastText: "#fff"
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff"
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(234, 255, 0, 1)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)"
        }
    }
});
