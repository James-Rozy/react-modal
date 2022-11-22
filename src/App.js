import React, { useState } from 'react';
import './styles/styles.css';
import Modal from './components/Modal';
import Header from './components/Header';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='container'>
      <Header>
        <h1>React Modal Prototype</h1>
      </Header>

      <div className='content'>
        <div className='btn-wrapper'>
          <button className='open-modal-btn' onClick={() => setIsOpen(true)}>
            Open Modal
          </button>

          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default App;
