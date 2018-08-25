
import React from 'react'
import {CuriProvider} from '@curi/react'

import {router, ROUTE_HOME} from 'router'

import {Home} from 'view/Screens'

const routesMap = {
  [ROUTE_HOME]: Home
}

export function Routing () {
  return (
    <CuriProvider router={router}>
      {/* curiProps = {response, navigation, router} */}
      {(curiProps) => {
        const Route = routesMap[curiProps.response.name] ? routesMap[curiProps.response.name] : routesMap[ROUTE_HOME]
        return <Route {...curiProps} />
      }}
    </CuriProvider>
  )
}
