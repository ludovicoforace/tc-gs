export interface Theme {
  fontFamily: string
  fontSizes: {
    regular: string
    large: string
    small: string
  },
  bgs: {
    darker: string
    lighter: string
  },
  colors: {
    text: string
  }
}

export enum Contact {
  Email = 'temp@placeholder.com'
}

export enum UserErrorMessage {
  UIFallback = 'Our apologies, something went wrong with our User Interface!',
}
