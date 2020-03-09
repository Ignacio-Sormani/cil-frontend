import React from 'react';
import './contact.css';
import Header from '../../../layout/header';
import Footer from '../../../layout/footer';

class Contact extends React.Component {
  render() {
    return (
      <>
        <Header historyProp={this.props.history} />
        <div class="flex-col">
          <div id="contact-div" class="flex-col">
            <form id="form" class="flex-col">
              <input
                id="subject"
                type="text"
                placeholder="Asunto"
                name="name"
                required
              />
              <input
                id="e-mail"
                type="text"
                placeholder="Email"
                name="name"
                required
              />
              <textarea
                id="msg"
                placeholder="Mensaje..."
                name="msg"
                required
              ></textarea>
              <button type="button" id="button-submit">
                Submit
              </button>
            </form>
          </div>
          <div class="flex-row">
            <p id="contact">
              CONTACTO:
              <br />
              <br />
              WhastApp: +5493364504555
              <br />
              Instagram: @venta-instrumentos-cil
              <br />
              <br />
              <br />
              SUCURSALES:
              <br />
              <br />
              Mendoza 2019 - Rosario, Santa Fe,Argentina
              <br />
              Corrientes 777 - CABA, Buenos Aires, Argentina
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Contact;
