
import { css, injectGlobal } from 'styled-components'

// Reusable definitions for colors, spacings, etc.
export const theme = {
  colors: {
    grays: {
      100: '#fafafa',
      200: '#f4f5f8',
      300: '#dbdde6',
      400: '#bfc1ca',
      500: '#222'
    },
    primary: {
      base: '#80deea',
      contrast: '#b4ffff',
      interaction: '#4bacb8'
    },
    secondary: {
      base: '#ff5722',
      contrast: '#ff8a50',
      interaction: '#c41c00'
    }
  },
  space: {
    small: '0.5rem',
    base: '1rem',
    medium: '2rem',
    large: '4rem'
  }
}

// Inject some global styles that are most likely to be coupled to theme variables.
injectGlobal`
  html {
    /* 1rem = 10px @ base browser settings */
    font-size: 62.5%;
  }
  body {
    font-weight: normal;
    font-family: sans-serif;
    font-size: 1.6rem;
    background-color: ${theme.colors.grays['100']};
  }
`

// Simple lens to allow easy access to nested theme values.
const get = (obj, path) => path.split('.').reduce((a, b) => (a && a[b]) ? a[b] : null, obj)

export const themeValue = path => props => {
  const value = get(props.theme, path)

  if (value) {
    return value
  } else {
    throw new Error(`The provided path - ${path} - was not found in the theme.`)
  }
}

// Media Queries & Breakpoints
// Usage: ${media.desktop`display: block;`}
const breakpoints = {
  tabletPortrait: 600,
  tabletLandscape: 900,
  desktop: 1200,
  desktopLarge: 1800
}

// Iterate through the sizes and create a media template
export const media = Object.keys(breakpoints).reduce((acc, label) => {
  return Object.assign({}, acc, {
    [label]: (...args) => css`
      @media (min-width: ${breakpoints[label] / 16}em) {
        ${css(...args)}
      }
    `
  })
}, {})
