import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#4f01a3" },
    secondary: { main: "#9c27b0" },
    infoMain: "#0B61A0",
    "grey-50": "#FAFAFA"
  },
  typography: {
    fontFamily: '"RokuText", "Open Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '1.5rem', // 24px
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '1.125rem', // 18px
      fontWeight: 'bold',
      lineHeight: '28px'
    },
    h3: {
      fontSize: '1rem', // 16px
      fontWeight: 'bold',
      lineHeight: 1.2
    },
    h4: {
      fontSize: '0.9375rem', // 15px
      fontWeight: 500,
      lineHeight: 1.2
    },
    h5: {
      fontSize: '0.8125rem', // 13px
      fontWeight: 500,
      lineHeight: 1.2
    },
    body1: {
      fontSize: '0.8125rem' // 13px
    },
    body2: {
      fontSize: '0.75rem' // 12px
    },
    caption: {
      fontSize: '0.625rem' // 10px
    }
  },
  shape: {
    borderRadius: 6
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small"
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "rgb(34, 96, 188)"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "bold"
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          paddingTop: '12px',
          paddingBottom: '12px',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          '&.MuiSwitch-sizeSmall': {
            width: 32,
            height: 20,
            '& .MuiSwitch-switchBase': {
              padding: 0,
              margin: 1,
              '&.Mui-checked': {
                transform: 'translateX(12px)',
              },
            },
            '& .MuiSwitch-thumb': {
              width: 18,
              height: 18,
            },
            '& .MuiSwitch-track': {
              borderRadius: 20 / 2,
            },
          },
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: '#4f01a3',
                opacity: 1,
                border: 0,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: '#4f01a3',
              border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: '#f5f5f5',
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.3,
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
          },
          '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: '#E9E9EA',
            opacity: 1,
            transition: 'background-color 300ms',
          },
        },
      },
    }
  }
});

export default theme;
