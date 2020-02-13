import { indigo, deepOrange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const primary = indigo[500];
const secondary = deepOrange['A400'];

// A custom theme for this app
const theme = createMuiTheme( {
  palette: {
    type: 'dark',
    primary: {
      main: '#4db6ab',
    },
    secondary: {
      main: secondary,
    },
    background: {

    }
  },
} );

export { theme }
