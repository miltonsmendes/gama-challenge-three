
import './styles.scss';


export function DonationSection() {

    return (
        <div className="donation-section-container">

            <div className="donation-board">
                <div>
                    <h1>Mural de doações</h1>
                </div>

                <div className="list-items-container">
                    <div>
                        <ul>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                            <li>Alimentos</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="help donation-board">
                <div>
                    <h1>AJUDE!</h1>
                </div>


                <div className="white-container-info">
                    <div>
                        CHAVE PIX CNPJ: <br />
                        02852132000177
                    </div>
                </div>

                <div className="white-container-info bank-account-container">
                    <div className="bank-account-info">
                        Conta bancária <br />

                        Banco Itaú (341)<br />
                        Agência: 5833<br />
                        Conta corrente: 01341-9<br />
                        CNPJ: 02.852.132.0001-77<br />
                    </div>
                </div>

            </div>

        </div>
    );

}