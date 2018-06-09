
import React from 'react'
import {CuriProvider} from '@curi/react'

import {router, ROUTE_HOME, ROUTE_ABOUT} from 'router'

import {Home} from 'view/Screens/Home'
import {About} from 'view/Screens/About'

const routesMap = {
  [ROUTE_HOME]: Home,
  [ROUTE_ABOUT]: About
}

// Render Function ({response, navigation, router})
export function Curious ({children}) {
  return (
    <CuriProvider router={router}>
      {children}
    </CuriProvider>
  )
}

export function Routing () {
  return (
    <Curious>
      {({response}) => {
        const Route = routesMap[response.name] ? routesMap[response.name] : routesMap[ROUTE_HOME]
        return <Route />
      }}
    </Curious>
  )
}
