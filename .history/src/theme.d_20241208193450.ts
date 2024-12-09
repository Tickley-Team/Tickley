// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string
//     }
//   }
//   // allow configuration using `createTheme()`
//   interface ThemeOptions {
//     status?: {
//       danger?: string
//     }
//   }
// }

import { Palette, PaletteOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    green: {
      100: string
      200: string
      300: string
      400: string
      500: string
    }
  }

  interface PaletteOptions {
    green?: {
      100: string
      200: string
      300: string
      400: string
      500: string
    }
  }
}
