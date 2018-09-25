
import styled from 'styled-components'
import { Link } from '@reach/router'

import { themeValue } from 'theme'

export const A = styled(Link)`
  color: ${themeValue('colors.primary.base')};
  text-decoration: none;

  &:hover {
    color: ${themeValue('colors.primary.interaction')};
  }
`

export const ExternalA = styled.a`
  color: ${themeValue('colors.primary.base')};
  text-decoration: none;

  &:hover {
    color: ${themeValue('colors.primary.interaction')};
  }
`
