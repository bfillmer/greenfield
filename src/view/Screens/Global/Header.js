
import React from 'react'
import styled from 'styled-components'

import {Logo} from './Logo'

function ComposedHeader ({className}) {
  return (
    <header className={className}>
      <Logo />
    </header>
  )
}

export const Header = styled(ComposedHeader)`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`
