
import React from 'react'
import {Curious} from '@curi/react'

import {ROUTE_HOME, ROUTE_ABOUT} from 'router'

import {Home} from 'view/Screens/Home'
import {About} from 'view/Screens/About'

const routesMap = {
  [ROUTE_HOME]: Home,
  [ROUTE_ABOUT]: About
}

export function Routes () {
  return (
    <Curious>
      {
        ({ response }) => {
          const Route = routesMap[response.name] ? routesMap[response.name] : routesMap[ROUTE_HOME]
          return <Route />
        }
      }
    </Curious>
  )
}
