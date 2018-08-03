
import React from 'react'
import {ThemeProvider} from 'styled-components'

import {Header} from 'view/Screens/Global'
import {Application} from 'view/Atoms'
import {Routing} from 'view/Routing'

import {theme} from 'view/theme'

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <Application>
        <Header />
        <Routing />
      </Application>
    </ThemeProvider>
  )
}
