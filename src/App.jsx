import {Header} from './components/Header'
import {WorkSection} from './components/WorkSection'
import {DonationSection} from './components/DonationSection'
import {SocialsSection} from './components/SocialsSection'
import {EmailFormular} from './components/EmailFormular'
import {MapSection} from './components/MapSection'
import { HeaderMenu } from './components/HeaderMenu'

import './App.scss';

function App() {
  return (
    <>
      <HeaderMenu />
      <Header />
      <WorkSection />
      <DonationSection />
      <SocialsSection />
      <EmailFormular />
      <MapSection />
    </>
  );
}

export default App;
