import { RecoilRoot } from 'recoil';
import { CatchCopy } from './components/CatchCopy';
import { Header } from './components/Header';
import { Calc } from './components/Calc';
import { Result } from './components/Result';
import { Microwave } from './components/Microwave';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import './style.css';

const App: React.FC = () => (
  <RecoilRoot>
    <div className="wrapper">
      <CatchCopy />
      <Header />
      <main className="main">
        <Calc />
        <Result />
        <Microwave />
      </main>
      <Footer />
      <Modal />
    </div>
  </RecoilRoot>
);

export default App;
