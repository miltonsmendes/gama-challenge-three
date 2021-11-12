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
                        <strong>CHAVE PIX CNPJ:</strong> <br />
                        02852132000177
                    </div>
                </div>

                <div className="white-container-info bank-account-container">
                    <div className="bank-account-info">
                        <p><strong>Conta bancária</strong> <br /> <br />

                        Banco Itaú (341)<br />
                        <strong>Agência:</strong> 5833<br />
                        <strong>Conta corrente:</strong> 01341-9<br />
                        <strong>CNPJ:</strong> 02.852.132.0001-77<br />
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );

}