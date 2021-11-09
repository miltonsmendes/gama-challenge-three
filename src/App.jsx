import {Header} from './components/Header'
import {CarouselComponent} from './components/CarouselComponent'
import {WorkSection} from './components/WorkSection'
import {DonationSection} from './components/DonationSection'
import {SocialsSection} from './components/SocialsSection'
import {EmailFormular} from './components/EmailFormular'
import {MapSection} from './components/MapSection'

function App() {
  return (
    <>
      <Header />
      <CarouselComponent />
      <WorkSection />
      <DonationSection />
      <SocialsSection />
      <EmailFormular />
      <MapSection />
    </>
  );
}

export default App;
