import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  /**
   * Colours
   */
  palette: {
    grayscale: {
      white:    '#FFFFFF',
      light:    '#E3E3E3',
      darker:   '#595959',
      black:    '#000000',
    },
    primary: {
      main:    '#FB6900',
    },
    secondary: {
      main:    '#F63700',
    },
    rare: {
      main:    '#004853',
    },
    /**
     * Message Colours
     */
    success: {
      main:    '#42a048',
      light:   '#b3d9b5',
    },
    warning: {
      main:    '#ffa002',
      light:   '#ffd899',
    },
    error: {
      main:    '#d32f2f',
      light:   '#edabab',
    },
  },
  styles: {
    boxShadow: '7px 8px 56px rgba(43,38,55,.33)',
  },
  /**
   * Typography
   */
  typography: {
    useNextVariants: true,
    fontFamily: '"Lexnd Tera", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    color: '#595959', // TODO, make colour references variables
    fontStyle: 'normal',
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 32,
        '@media (min-width: 960px)': {
          fontSize: 42,
        },
        fontWeight: 400,
        color: '#595959',
        lineHeight: 1.25,
      },
      h2: {
        fontSize: 32,
        fontWeight: 400,
        color: '#595959',
      },
      h3: {
        fontSize: 32,
        fontWeight: 400,
        color: '#595959',
        paddingBottom: '2rem',
        paddingTop: '2rem',
      },
      h4: {
        fontSize: 28,
        fontWeight: 400,
        color: '#595959',
        paddingBottom: '2rem',
      },
      h5: {
        color: '#595959',
        fontSize: 24,
        fontWeight: 400,
        lineHeight: 1.334,
        paddingBottom: '1rem',
      },
      h6: {
        fontSize: 20,
        fontWeight: 400,
        color: '#595959',
        paddingBottom: '1rem',
      },
      subtitle1: {
        fontSize: 20,
        '@media (min-width: 960px)': {
          fontSize: 28,
        },
        color: '#595959',
        lineHeight: 1.25,
      },
      subtitle2: {
        fontSize: 20,
        '@media (min-width: 960px)': {
          fontSize: 16,
        },
        color: '#595959',
        paddingBottom: '1rem',
      },
      body1: {
        fontSize: 14,
        paddingTop: 2.5,
        paddingBottom: 2.5,
      },
      caption: {
        fontSize: '0.75rem',
      },
    },
    MuiButton: {
      root: {
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: '1.15',
        textTransform: 'uppercase',
        color: '#595959',
        minWidth: 200,
        borderWidth: 0,
        borderRadius: 15,
        boxShadow: '1px 3px 10px 0 rgba(0,0,0,.2) !important',
        webkitBoxShadow: '1px 3px 3px rgba(0, 0, 0, 0.349019607843137) !important',
        marginBottom: '.75rem',
        marginTop: '.75rem',
        padding: '16px 20px',
        '&:hover': {
          backgroundColor: '#FB6900',
          borderColor: '#FB6900',
        },
      },
      outlined: {
        boxShadow: 'none !important',
        borderColor: '#444444',
        color: '#444444',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        borderRadius: 6,
        fontWeight: 400,
        fontSize: 12,
        '&:hover': {
          color: '#444444',
          borderColor: '#a09f9f',
          backgroundColor: '#d5d5d5',
        },
      },
      containedPrimary: {
        color: '#FFFFFF',
        backgroundColor: '#FB6900',
        '&hover:': {
        },
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: '#fcb315',
          borderColor: '#fcb315',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderColor: '#fcb315',
          borderWidth: 2,
        },
      },
    },
    MuiButtonBase: {
      root: {
        color: '#595959',
        textDecoration: 'none',
        textTransform: 'uppercase',
      },
    },
  },
});
