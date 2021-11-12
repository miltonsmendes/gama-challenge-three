import { HeaderMenu } from './components/HeaderMenu'
import { Header } from './components/Header'
import { ImageSlider } from './components/CarouselComponent'
import { SliderData } from './components/CarouselComponent/SliderData'
import { WorkSection } from './components/WorkSection'
import { DonationSection } from './components/DonationSection'
import { SocialsSection } from './components/SocialsSection'
import { EmailFormular } from './components/EmailFormular'
import { MapSection } from './components/MapSection'
import { Footer } from './components/Footer'

import './App.scss';

function App() {
  return (
    <>
      <HeaderMenu />
      <div id="Quem somos">
        <Header />
      </div>
      <ImageSlider slides={SliderData} />
      <WorkSection />
      <div id="Doações" >
        <DonationSection />
      </div>
      <div id="Redes Sociais" >
        <SocialsSection />
      </div>
      <div id="Contatos" >
        <EmailFormular />
      </div>
      <MapSection />
      <div id="Parceiros">
        <Footer />
      </div>
    </>
  );
}

export default App;
