
import React from 'react'
import {ThemeProvider} from 'styled-components'

import {Application} from 'view/Atoms'
import {Routing} from 'view/Routing'

import {theme} from 'view/theme'

export function App () {
  return (
    <ThemeProvider theme={theme}>
      <Application>
        <Routing />
      </Application>
    </ThemeProvider>
  )
}
