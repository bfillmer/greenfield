
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Application } from 'Atoms'
import { Routes } from 'Routes'

import { theme, GlobalStyle } from 'theme'

function App () {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Application>
          <Routes />
        </Application>
      </ThemeProvider>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
