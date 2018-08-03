
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {themeValue} from 'view/theme'

import {makeNavigate} from 'router'

function InternalLink ({href, children, ...props}) {
  return (<a href={href} onClick={makeNavigate(href)} {...props}>{children}</a>)
}

function ExternalLink ({children, ...props}) {
  return (<a {...props}>{children}</a>)
}

function Link ({external, ...props}) {
  return external ? <ExternalLink {...props} /> : <InternalLink {...props} />
}

export const A = styled(Link)`
  color: ${themeValue('colors.primary.base')};
  text-decoration: none;

  &:hover {
    color: ${themeValue('colors.primary.interaction')};
  }
`

A.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool
}

A.defaultProps = {
  external: false
}
