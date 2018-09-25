
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Application } from 'Atoms'
import { Routes } from 'Routes'

import { theme } from 'theme'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Application>
        <Routes />
      </Application>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
