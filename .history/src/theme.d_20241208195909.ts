import { Palette, PaletteOptions } from '@mui/material/styles'
import '@mui/material/styles'

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

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
  }
}
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
  }
}
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    // 여기에 새로운 속성을 추가합니다
    customColor: {
      main: string
      light?: string
      dark?: string
    }
  }

  interface PaletteOptions {
    // PaletteOptions에도 동일한 속성을 추가합니다
    customColor?: {
      main: string
      light?: string
      dark?: string
    }
  }
}
