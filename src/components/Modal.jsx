// import React from 'react';
import { createPortal } from 'react-dom';
import '../styles/Modal.css';
import CustomCheckbox from './CustomCheckbox';

// const MODAL_STYLES = {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: '#fff',
//   zIndex: 1000,
// };

// const OVERLAY_STYLES = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, 0.7)',
//   zIndex: 1000,
// };

const optionalCheckboxes = document.getElementsByClassName('optional');

const selectAllOptional = () => {
  for (let i = 0; i < optionalCheckboxes.length; i++) {
    optionalCheckboxes[i].checked = true;
  }
};

const deselectAllOptional = () => {
  for (let i = 0; i < optionalCheckboxes.length; i++) {
    optionalCheckboxes[i].checked = false;
  }
};

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;
  return createPortal(
    <div>
      <div className='modal--overlay' />
      <form className='modal'>
        <header className='modal--header'>
          <h2>Data Elements to Export</h2>
          <button type='button' className='modal--btn' onClick={onClose}>
            Cancel
          </button>
        </header>

        <div className='modal--checkbox-grid'>
          <CustomCheckbox name='ID' label='ID' />
          <CustomCheckbox name='First Name' label='First Name' />
          <CustomCheckbox name='Last Name' label='Last Name' />
          <CustomCheckbox name='Description' label='Description' />
          <CustomCheckbox name='Role' label='Role' />
        </div>
        
        <footer className='modal--footer'>
          <button type='reset' className='modal--btn'>
            Reset
          </button>
          <button type='submit' className='modal--btn'>
            Export
          </button>
        </footer>
      </form>
    </div>,
    document.getElementById('portal')
  );
}

export default Modal;