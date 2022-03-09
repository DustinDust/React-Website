import { FaBeer } from 'react-icons/fa';
import './App.css';
import {
  Header,
  Footer,
  Features,
  WhatGPT3,
  Possibility,
  Blog,
} from './containers';
import { CTA, NavBar, Brand } from './components';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
