import '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    green: {
      100: string
    }
    customColor: {
      main: string
      light?: string
      dark?: string
    }
  }

  interface PaletteOptions {
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
