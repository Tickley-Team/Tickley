import { createTheme } from '@mui/material/styles'
import tokens from './assets/tokens.json'

export const TickleyTheme = createTheme({
  palette: {
    primary: {
      main: tokens.color.pri100.value,
      light: tokens.color.pri500.value,
      dark: tokens.color.pri900.value,
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
    semantic: {},
    common: {
      black: tokens.color.gray1000.value,
    },
  },
})
import '@mui/material/styles'
