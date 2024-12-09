import '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    green: {
      100: string
    }
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
declare module '@mui/material/styles' {
  interface Palette {
    custom: Palette['primary']
  }

  interface PaletteOptions {
    custom?: PaletteOptions['primary']
  }
}
