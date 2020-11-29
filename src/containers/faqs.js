import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Preguntas frecuentes</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Input placeholder="Correo electrónico" />
        <OptForm.Button>Pruebalo ahora</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>¿Listo para mirar? Ingrese su correo electrónico para crear o reiniciar su membresía.</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
