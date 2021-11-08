import './styles.scss';


export function EmailFormular() {

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

            <div className="formular-container">
                <div>Tem interesse em ajudar nosso projeto? <br />
                    Entre em contato com a gente!
                </div>

                <div className="input-container">
                    <div>Nome completo*</div>
                    <input type="text"></input>
                </div>

                <div className="input-container">
                    <div>E-mail*</div>
                    <input type="text"></input>
                </div>

                <div className="input-container">
                    <div>Mensagem*</div>
                    <textarea></textarea>
                </div>

                <div className="button-container">
                    <button type="button">Enviar</button>
                </div>
            </div>

        </div>
    );

}