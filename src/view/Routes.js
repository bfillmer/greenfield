
import React from 'react'
import {CuriProvider} from '@curi/react'

import {router, ROUTE_HOME, ROUTE_ABOUT} from 'router'

import {Home} from 'view/Screens/Home'
import {About} from 'view/Screens/About'

const routesMap = {
  [ROUTE_HOME]: Home,
  [ROUTE_ABOUT]: About
}

export function Routes () {
  return (
    <CuriProvider router={router}>
      {
        ({ response, navigation, router }) => {
          const Route = routesMap[response.name] ? routesMap[response.name] : routesMap[ROUTE_HOME]
          return <Route />
        }
      }
    </CuriProvider>
  )
}
