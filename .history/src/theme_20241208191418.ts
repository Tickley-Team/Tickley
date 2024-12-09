import { createTheme } from '@mui/material'
import tokens from './assets/tokens.json'
const theme = createTheme({
  palette: {
    primary: {
      100: tokens.color.pri100.value,
      500: tokens.color.pri500.value,
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
      1000: tokens.color.gray1000.value,
    },
  },
})
