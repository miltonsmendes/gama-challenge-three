import HeartImage from '../../assets/images/heart-icon.svg';
import HeartBeatImage from '../../assets/images/heart-beat-icon.svg';
import HandsIcon from '../../assets/images/hands-icon.svg';

import './styles.scss';


export function WorkSection() {

    return (
        <div className="work-section-container">


            <div className="icon-container">
                <div>
                    <img src={HeartImage} />
                </div>
                <div>
                    <p>Ajudamos idosos<br />
                        em situação de risco.</p>
                </div>

            </div>

            <div className="icon-container">
                <div>
                    <img src={HeartBeatImage} />
                </div>
                <div>
                    <p>Contribuímos para<br />
                        auxiliar em situação.</p>
                </div>

            </div>

            <div className="icon-container">
                <div>
                    <img src={HandsIcon} />
                </div>
                <div>
                    <p>Queremos garantir<br />
                        a qualidade de vida.</p>
                </div>


            </div>

        </div>
    );

}