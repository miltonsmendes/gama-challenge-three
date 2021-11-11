import MesaBrasilLogo from '../../assets/images/mesabrasil-logo.svg';
import FimcaLogo from '../../assets/images/fimca-logo.svg';

import './styles.scss';


export function Footer() {

    return (
        <div className="footer-section-container">
            <div className="partners-container">
                <div className="footer-title">Parceiros</div>
                <div className="partners-logo">
                    <div><img src={MesaBrasilLogo} /></div>
                    <div><img src={FimcaLogo} /></div>
                    <div><img src={MesaBrasilLogo} /></div>
                    <div><img src={FimcaLogo} /></div>
                </div>
            </div>

            <div className="adress-container">
                <div className="footer-title">Contato</div>
                <div className="adress-text">
                    Lar Espírita da Terceira<br />
                    Idade André Luiz <br />
                    Rua Vera número 5787 <br />
                    CEP 76824-360<br />
                    Porto Velho - RO<br />
                    Telefone: (69) 9999-9999<br />
                </div>
            </div>

            <div className="socials-container">
                <div className="footer-title">Redes sociais</div>
                <div className="socials-icons-container">
                    <div><i class="fab fa-instagram fa-2x"></i></div>
                    <div><i class="fab fa-whatsapp fa-2x"></i></div>
                    <div><i class="fab fa-facebook fa-2x"></i></div>
                </div>
                <div>Direitos reservados</div>
            </div>
        </div>
    );

}