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

    common: {
      black: tokens.color.gray1000.value,
    },
  },
  typography: {
    fontFamily: '"S-CoreDream", Arial, sans-serif',
    h1: { fontWeight: 800 },
    100: {
      fontWeight: 100,
    },
  },
})
//TODO: 타입 정의 파일로 옮기기
declare module '@mui/material/styles' {
  interface Palette {
    semantic: {
      green1: string
      green2: string
      green3: string
      green4: string
      red: string
      purple1: string
      green: string
    }
  }

  interface PaletteOptions {
    semantic?: {
      green1: string
      green2: string
      green3: string
      green4: string
      red: string
      purple1: string
      green: string
    }
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    100: true
    200: true
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    100: React.CSSProperties
    200: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    100?: React.CSSProperties
    200?: React.CSSProperties
  }
}
