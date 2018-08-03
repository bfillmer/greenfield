
import React from 'react'

import {A, Heading, P, Section} from 'view/Atoms'

import {ROUTE_HOME} from 'router'

export function About () {
  return (
    <Section>
      <Heading>About</Heading>
      <P><A href={ROUTE_HOME}>Home</A></P>
    </Section>
  )
}
