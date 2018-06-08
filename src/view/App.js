
import React from 'react'
import {CuriProvider} from '@curi/react'
import {ThemeProvider} from 'styled-components'

import {Application} from 'view/Shared/Structural'
import {Header} from 'view/Global/Header'
import {Routes} from 'view/Routes'

import {theme} from 'view/theme'

import {router} from 'router'

export function App () {
  return (
    <CuriProvider router={router}>
      {() => (
        <ThemeProvider theme={theme}>
          <Application>
            <Header />
            <Routes />
          </Application>
        </ThemeProvider>
      )}
    </CuriProvider>
  )
}
