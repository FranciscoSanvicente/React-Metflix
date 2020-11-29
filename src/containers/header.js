import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import Logo from '../logo.png';


export function HeaderContainer({ children }) {
  return (
    <Header>
    
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={Logo} alt='Metflix' />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Iniciar Seción</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
