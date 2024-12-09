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

declare module '@mui/material/styles' {
  interface Theme {
    green: {
      100: string
    }
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    green: {
      100: string
    }
    status?: {
      danger?: string
    }
  }
}
