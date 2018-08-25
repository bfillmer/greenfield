
import Browser from '@hickory/browser'
import {curi} from '@curi/router'
import scroll from '@curi/side-effect-scroll'

// ROUTE IDENTIFIERS
export const ROUTE_HOME = 'route/HOME'
export const ROUTE_404 = 'route/404'

export const history = Browser()

const routes = [
  {name: ROUTE_HOME, path: ''},
  {name: ROUTE_404, path: '(.*)'}
]

export const router = curi(history, routes, {
  sideEffects: [scroll()]
})

export function getPathname (ROUTE_ID) {
  return router.route.pathname(ROUTE_ID)
}

// Create a navigation function to leverage curi.
export function makeNavigate (ROUTE_ID) {
  const pathname = getPathname(ROUTE_ID)

  return function navigate (e) {
    if (e && e.preventDefault) {
      e.preventDefault()
    }

    history.navigate(pathname)
  }
}
