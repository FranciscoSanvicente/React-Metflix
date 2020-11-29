import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Películas, Series, Programas de Televisión y mucho más</Feature.Title>
          <Feature.SubTitle>Mira en cualquier lugar. Cancela en cualquier momento.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Pruebalo ahora</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>¿Listo para mirar? Ingrese su correo electrónico para crear o reiniciar su membresía.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
