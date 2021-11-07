import './styles.scss';


export function EmailFormular() {

    return (
        <div className="email-section-container">

            <div className="contact-container">
                <div>
                    Contate-nos
                </div>
                <div>
                    Nosso endereço é:
                    Lar Espírita da Terceira Idade André Luiz
                    Rua Vera número 5787
                    CEP 76824-360
                    Porto Velho - RO
                </div>
            </div>

            <div>
                <div>Tem interesse em ajudar nosso projeto?
                    Entre em contato com a gente!
                </div>

                <div>
                    <input type="text"></input>
                </div>

                <div>
                    <input type="text"></input>
                </div>

                <div>
                    <input type="text"></input>
                </div>

                <div>
                    <button type="button">Enviar</button>
                </div>
            </div>

        </div>
    );

}