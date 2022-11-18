import React, { useState } from 'react';
import Modal from './components/Modal';

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'salmon',
  padding: '10px',
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button className='open-modal-btn' onClick={() => setIsOpen(true)}>
          Open Modal
        </button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Here is a modal!
        </Modal>
      </div>

      <div className='content' style={OTHER_CONTENT_STYLES}>
        Content
      </div>
    </>
  );
};

export default App;
