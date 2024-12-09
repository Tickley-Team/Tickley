import { ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface ThemeOptions {
    palette?: {
      green?: {
        100: string
        200: string
        300: string
        400: string
        500: string
      }
    }
  }
}
