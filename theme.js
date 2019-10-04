import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    common: {
      black: "green",
      white: "blue",
    },
    text: {
      // primary: "#dadada",
      // secondary: "#a4a4a4",
      disabled: "green",
      hint: "yellow"
    },
    action: {

    },
    primary: {
      main:  '#0270ea',
      dark: '#323232',
      light: '#f9f9f9'
    },
    secondary: {
      main: "#0270ea",
    },
    preview: {
      // main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    // background: {
    //   default: '#1b1b1b',
    // },
    toolMenu: {
      default: 'blue',
    },
    // workspace: {
    //   default: '#fff',
    // },
  },
});

export default theme;
