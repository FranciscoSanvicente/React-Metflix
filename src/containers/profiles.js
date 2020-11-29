import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import Logo from '../logo.png'


export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={Logo} alt='Metflix' />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Has Iniciado Seción con ÉXITO</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
            data-testid="user-profile"
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
