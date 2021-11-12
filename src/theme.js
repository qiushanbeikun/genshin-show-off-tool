import { makeStyles } from '@material-ui/styles';
const {createTheme} = require("@material-ui/core");
const {orange} = require("@material-ui/core/colors");


export const theme = createTheme({
    status: {
        danger: orange[500],
    },
})

export const GenshinStyles = makeStyles({
    root: {
        fontFamily: "Genshin"
    }
})