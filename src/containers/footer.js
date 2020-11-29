import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Preguntas? Contáctenos.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">Preguntas más frecuentes</Footer.Link>
          <Footer.Link href="#">Relaciones con inversionistas</Footer.Link>
          <Footer.Link href="#">Maneras de mirar</Footer.Link>
          <Footer.Link href="#">Información corporativa</Footer.Link>
          <Footer.Link href="#">Originales de Metflix</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Centro de ayuda</Footer.Link>
          <Footer.Link href="#">Trabajos</Footer.Link>
          <Footer.Link href="#">Términos de Uso</Footer.Link>
          <Footer.Link href="#">Contacta con nosotros</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Cuenta</Footer.Link>
          <Footer.Link href="#">Canjear tarjetas de regalo</Footer.Link>
          <Footer.Link href="#">Privacidad</Footer.Link>
          <Footer.Link href="#">Prueba de velocidad</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media Centre</Footer.Link>
          <Footer.Link href="#">Comprar tarjetas regalo</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Avisos legales</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Metflix Latino América</Footer.Text>
       <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-light text-light">
            Desarrollado por:
            <span className="text-warning font-weight-normal">
              Francisco Sanvicente
            </span>
            , Usando <i className="fab fa-react" /> React JS 
            
          </div>
        </div>
      </div>
    </div>
    </Footer>

  );
}
