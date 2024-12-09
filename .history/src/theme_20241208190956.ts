import { createTheme } from '@mui/material'
import tokens from './assets/tokens.json'
const theme = createTheme({
  palette: {
    primary: {
      '100': tokens.color.pri100,
      '500': tokens.color.pri500,
    },
  },
})
