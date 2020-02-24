import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance
const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: '#5845DB'
    },
    secondary: {
      main: '#F1F3F5'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '3px',
        fontSize: '14px',
        fontWeight: 'normal',
        maxWidth: '400px',
        minWidth: '64px',
        padding: '3px 16px'
      },
      contained: {
        '&$disabled': {
          backgroundColor: '#F1F3F5',
          color: '#A2A6AB',
          fill: '#A2A6AB'
        }
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#9D8EFF'
        },
        fill: '#FFFFFF'
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: '#DBDFE2'
        },
        fill: '#585E67'
      }
    }
  }
})

export { theme }
