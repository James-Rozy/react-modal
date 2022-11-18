import React, { useState } from 'react';
import Modal from './components/Modal';
import './styles/styles.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='container'>
      <header>
        <h1>React Modal Prototype</h1>
      </header>

      <div className='content'>
        <div className='btn-wrapper'>
          <button className='open-modal-btn' onClick={() => setIsOpen(true)}>
            Open Modal
          </button>

          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            Here is a modal!
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default App;
