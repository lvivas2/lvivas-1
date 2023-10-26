import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme ({
    palette: {
        primary: {
            main: purple[100]
        }
    }
})

export default theme;