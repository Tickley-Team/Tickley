import { createTheme } from '@mui/material/styles'
import tokens from './assets/tokens.json'

// export const tokens = {
//   colors: {
//     semantic: {
//       red: '#F24822',
//       green: {
//         main: '#009951',
//         '1': '#D6F2CC',
//         '2': '#B2DDA2',
//         '3': '#7B8766',
//         '4': '#367A1E',
//       },
//       purple: {
//         '1': '#5B676A',
//       },
//     },
//   },
// } as const
export const TickleyTheme = createTheme({
  palette: {
    primary: {
      main: tokens.color.pri100.value,
      light: tokens.color.pri500.value,
      900: tokens.color.pri900.value,
    },
    grey: {
      100: tokens.color.gray100.value,
      200: tokens.color.gray200.value,
      300: tokens.color.gray300.value,
      400: tokens.color.gray400.value,
      600: tokens.color.gray600.value,
      700: tokens.color.gray700.value,
      800: tokens.color.gray800.value,
      900: tokens.color.gray900.value,
    },

    common: {
      black: tokens.color.gray1000.value,
    },
  },
})
//@typescript-eslint/no-unused-vars
// theme = createTheme(theme, {
//   palette: {},
//   // Custom colors created with augmentColor go here
//   green: {
//     100: theme.palette.augmentColor({
//       color: {
//         main: '#FF5733',
//       },
//       name: 'salmon',
//     }),
//   },
// })
