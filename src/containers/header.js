import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  )
}
