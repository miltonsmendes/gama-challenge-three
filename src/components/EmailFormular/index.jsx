import emailjs from 'emailjs-com';

import './styles.scss';


export function EmailFormular() {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('lealtestGmail', 'template_wy4k7of', e.target, 'user_iomDcVHL2FDmhx0417e7H')
          .then((result) => {
              alert('Mensagem enviada! Obrigado pelo contato!')
          }, (error) => {
              alert(error.text)
          });
          e.target.reset();
    }

    return (
        <div className="email-section-container">

            <div className="contact-container">
                <div>
                    Contate-nos
                </div>
                <div>
                    Nosso endereço é: <br />
                    Lar Espírita da Terceira Idade André Luiz<br />
                    Rua Vera número 5787<br />
                    CEP 76824-360<br />
                    Porto Velho - RO
                </div>
            </div>

            <form onSubmit={sendEmail}>
                <div className="formular-container">
                    <div>Tem interesse em ajudar nosso projeto? <br />
                        Entre em contato com a gente!
                    </div>

                    <div className="input-container">
                        <div>Nome completo*</div>
                        <input type="text" name="name"></input>
                    </div>

                    <div className="input-container">
                        <div>E-mail*</div>
                        <input type="email" name="email"></input>
                    </div>

                    <div className="input-container">
                        <div>Mensagem*</div>
                        <textarea name="message"></textarea>
                    </div>

                    <div className="button-container">
                        <button type="submit">Enviar</button>
                    </div>
                </div>
            </form>

        </div>
    );

}