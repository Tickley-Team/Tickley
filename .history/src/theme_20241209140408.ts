import { createTheme } from '@mui/material/styles'
import tokens from './assets/tokens.json'
import React from 'react'

export const TickleyTheme = createTheme({
  palette: {
    primary100: tokens.color.pri100.value,
    primary500: tokens.color.pri500.value,
    primary900: tokens.color.pri900.value,

    gray100: tokens.color.gray100.value,
    gray200: tokens.color.gray200.value,
    gray300: tokens.color.gray300.value,
    gray400: tokens.color.gray400.value,
    gray600: tokens.color.gray600.value,
    gray700: tokens.color.gray700.value,
    gray800: tokens.color.gray800.value,
    gray900: tokens.color.gray900.value,
    gray1000: tokens.color.gray1000.value,

    semanticRed: '#F24822',
    'semantic-purple1': '#5B67BA',
    'semantic-green:': '#009951',
    'semantic-green1': '#D6F2CC',
    'semantic-green2': '#B2DDA2',
    'semantic-green3': '#7BB766',
    'semantic-green4': '#367A1E',
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

    gray100: string
    gray200: string
    gray300: string
    gray400: string
    gray600: string
    gray700: string
    gray800: string
    gray900: string
    gray1000: string

    semanticGreen1: string
    semanticGreen2: string
    semanticGreen3: string
    semanticGreen4: string
    semanticRed: string
    semanticPurple1: string
    semanticGreen: string
  }

  interface PaletteOptions {
    primary100: string
    primary500: string
    primary900: string

    gray100: string
    gray200: string
    gray300: string
    gray400: string
    gray600: string
    gray700: string
    gray800: string
    gray900: string
    gray1000: string

    semanticGreen1: string
    semanticGreen2: string
    semanticGreen3: string
    semanticGreen4: string
    semanticRed: string
    semanticPurple1: string
    semanticGreen: string
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
