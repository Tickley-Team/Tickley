import { createTheme } from '@mui/material/styles'
import tokens from './assets/tokens.json'
import React from 'react'

export const TickleyTheme = createTheme({
  palette: {
    primary100: tokens.color.pri100.value,
    primary500: tokens.color.pri500.value,
    primary900: tokens.color.pri900.value,

    semantic: {
      red: '#F24822',
      purple1: '#5B67BA',
      green: '#009951',
      green1: '#D6F2CC',
      green2: '#B2DDA2',
      green3: '#7BB766',
      green4: '#367A1E',
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
    'headline-8-heavy': {
      fontWeight: 800,
      fontSize: '48px',
    },
    'headline-5-medium': {
      fontWeight: 500,
      fontSize: '66px',
    },
    'title-6-bold-34': {
      fontWeight: 600,
      fontSize: '34px',
    },
    'title-5-medium-26': {
      fontWeight: 500,
      fontSize: '26px',
    },

    'title-7-extrabold-20': {
      fontWeight: 700,
      fontSize: '20px',
    },
    'title-5-medium-18': {
      fontWeight: 500,
      fontSize: '18px',
    },
    'title-5-medium-16': {
      fontWeight: 500,
      fontSize: '16px',
    },
    'title-5-medium-12': {
      fontWeight: 500,
      fontSize: '12px',
    },
  },
})
//TODO: 타입 정의 파일로 옮기기
declare module '@mui/material/styles' {
  interface Palette {
    primary100: string
    primary500: string
    primary900: string

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
    primary100: string
    primary500: string
    primary900: string

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
    'headline-5-medium': true
    'headline-8-heavy': true
    'title-6-bold-34': true
    'title-5-medium-26': true
    'title-7-extrabold-20': true
    'title-5-medium-18': true
    'title-5-medium-16': true
    'title-5-medium-12': true
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    'headline-5-medium': React.CSSProperties
    'headline-8-heavy': React.CSSProperties
    'title-6-bold-34': React.CSSProperties
    'title-5-medium-26': React.CSSProperties
    'title-7-extrabold-20': React.CSSProperties
    'title-5-medium-18': React.CSSProperties
    'title-5-medium-16': React.CSSProperties
    'title-5-medium-12': React.CSSProperties
  }

  interface TypographyVariantsOptions {
    'headline-5-medium'?: React.CSSProperties
    'headline-8-heavy'?: React.CSSProperties
    'title-6-bold-34'?: React.CSSProperties
    'title-5-medium-26'?: React.CSSProperties
    'title-7-extrabold-20'?: React.CSSProperties
    'title-5-medium-18'?: React.CSSProperties
    'title-5-medium-16'?: React.CSSProperties
    'title-5-medium-12'?: React.CSSProperties
  }
}
