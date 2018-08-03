
import React from 'react'

import {Heading, P, A, Section} from 'view/Atoms'

import {ROUTE_ABOUT} from 'router'

export function Home () {
  return (
    <Section>
      <Heading>Home</Heading>
      <P><A href={ROUTE_ABOUT}>About</A></P>
      <P><A href='https://google.com' external>Google</A></P>
    </Section>
  )
}
