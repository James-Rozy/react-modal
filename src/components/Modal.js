import React from 'react';
import { createPortal } from 'react-dom';
import '../styles/modal.css';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  // padding: '50px',
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000,
};

const optionalCheckboxes = document.getElementsByClassName('optional');

const selectAllOptional = () => {
  for (let i = 0; i < optionalCheckboxes.length; i++) {
    optionalCheckboxes[i].checked = true;
    // optionalCheckboxes.setAttribute('')
  }
};

const deselectAllOptional = () => {
  for (let i = 0; i < optionalCheckboxes.length; i++) {
    optionalCheckboxes[i].checked = false;
    // optionalCheckboxes.removeAt
  }
};

export default function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;
  return createPortal(
    <div>
      <div style={OVERLAY_STYLES} />
      <form style={MODAL_STYLES} className='modal'>
        <header className='modal-header'>
          <h2>Data Elements to Export</h2>
          <button type='button' className='modal-btn' onClick={onClose}>
            Cancel
          </button>
        </header>

        <div>
          {/* <section>
              <header>
                Mandatory Elements
              </header>
            </section> */}
          <section>
            <header className='modal-header'>
              <h3>Default Elements</h3>
            </header>
            <div className='modal-checkbox-grid'>
              {/* MANDATORY ELEMENTS */}
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Diagnosis Id'
                  className='mandatory'
                  checked
                  disabled
                />
                <label htmlFor='Diagnosis Id' className='mandatory'>
                  Diagnosis ID
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Visit Id'
                  className='mandatory'
                  checked
                  disabled
                />
                <label htmlFor='Visit Id' className='mandatory'>
                  Visit ID
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Source'
                  className='mandatory'
                  checked
                  disabled
                />
                <label htmlFor='Source' className='mandatory'>
                  Source
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Diagnosis Status'
                  className='mandatory'
                  checked
                  disabled
                />
                <label htmlFor='Diagnosis Status' className='mandatory'>
                  Diagnosis Status
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Diagnosis Code'
                  className='mandatory'
                  checked
                  disabled
                />
                <label htmlFor='Diagnosis Code' className='mandatory'>
                  Diagnosis Code
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Diagnosis Description'
                  className='mandatory'
                  checked
                  disabled
                />
                <label htmlFor='Diagnosis Description' className='mandatory'>
                  Diagnosis Description
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Poisoning Classification'
                  className='mandatory'
                  checked
                  disabled
                />
                <label htmlFor='Poisoning Classification' className='mandatory'>
                  Poisoning Classification
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Facility'
                  className='mandatory'
                  checked
                  disabled
                />
                <label htmlFor='Facility' className='mandatory'>
                  Facility
                </label>
              </div>
              {/* DEFAULT ELEMENTS */}
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Drug Class'
                  className='default'
                  defaultChecked
                />
                <label htmlFor='Drug Class' className='default'>
                  Drug Class
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Intentionality'
                  className='default'
                  defaultChecked
                />
                <label htmlFor='Intentionality' className='default'>
                  Intentionality
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Drug Type'
                  className='default'
                  defaultChecked
                />
                <label htmlFor='Drug Type' className='default'>
                  Drug Type
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Admission Death Date'
                  className='default'
                  defaultChecked
                />
                <label htmlFor='Admission/Death Date' className='default'>
                  Admission/Death Date
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Admission/Death Time'
                  className='default'
                  defaultChecked
                />
                <label htmlFor='Admission/Death Time' className='default'>
                  Admission/Death Time
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Jurisdiction'
                  className='default'
                  defaultChecked
                />
                <label htmlFor='Jurisdiction' className='default'>
                  Jurisdiction
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='County'
                  className='default'
                  defaultChecked
                />
                <label htmlFor='County' className='default'>
                  County
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Race'
                  className='default'
                  defaultChecked
                />
                <label htmlFor='Race' className='default'>
                  Race
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Ethnicity'
                  className='default'
                  defaultChecked
                />
                <label htmlFor='Ethnicity' className='default'>
                  Ethnicity
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Sex'
                  className='default'
                  defaultChecked
                />
                <label htmlFor='Sex' className='default'>
                  Sex
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Age'
                  className='default'
                  defaultChecked
                />
                <label htmlFor='Age' className='default'>
                  Age
                </label>
              </div>
            </div>
          </section>

          <section>
            <header className='modal-header'>
              <h3>Optional Elements</h3>
              <div className='button-wrapper'>
                <button
                  type='button'
                  id='optional-select-all'
                  className='modal-btn'
                  onClick={selectAllOptional}
                >
                  Select All
                </button>
                <button
                  type='button'
                  id='optional-deselect-all'
                  className='modal-btn'
                  onClick={deselectAllOptional}
                >
                  Deselect All
                </button>
              </div>
            </header>
            <div className='modal-checkbox-grid'>
              {/* OPTIONAL ELEMENTS */}
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Visit Sequence'
                  className='optional'
                />
                <label htmlFor='Visit Sequence' className='optional'>
                  Visit Sequence
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Discharge Date'
                  className='optional'
                />
                <label htmlFor='Discharge Date' className='optional'>
                  Discharge Date
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Discharge Time'
                  className='optional'
                />
                <label htmlFor='Discharge Time' className='optional'>
                  Discharge Time
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Received Date'
                  className='optional'
                />
                <label htmlFor='Received Date' className='optional'>
                  Received Date
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Received Time'
                  className='optional'
                />
                <label htmlFor='Received Time' className='optional'>
                  Received Time
                </label>
              </div>
              <div className='input-wrapper'>
                <input type='checkbox' name='MMWR Week' className='optional' />
                <label htmlFor='MMWR Week' className='optional'>
                  MMWR Week
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Admission Location'
                  className='optional'
                />
                <label htmlFor='Admission Location' className='optional'>
                  Admission Location
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Discharge Location'
                  className='optional'
                />
                <label htmlFor='Discharge Location' className='optional'>
                  Discharge Location
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Emergency Event'
                  className='optional'
                />
                <label htmlFor='Emergency Event' className='optional'>
                  Emergency Event
                </label>
              </div>
              <div className='input-wrapper'>
                <input type='checkbox' name='SSN' className='optional' />
                <label htmlFor='SSN' className='optional'>
                  SSN
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Patient First Name'
                  className='optional'
                />
                <label htmlFor='Patient First Name' className='optional'>
                  Patient First Name
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Patient Last Name'
                  className='optional'
                />
                <label htmlFor='Patient Last Name' className='optional'>
                  Patient Last Name
                </label>
              </div>
              <div className='input-wrapper'>
                <input type='checkbox' name='Patient Id' className='optional' />
                <label htmlFor='Patient Id' className='optional'>
                  Patient ID
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Patient Status'
                  className='optional'
                />
                <label htmlFor='Patient Status' className='optional'>
                  Patient Status
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Patient Status Date'
                  className='optional'
                />
                <label htmlFor='Patient Status Date' className='optional'>
                  Patient Status Date
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Patient Disposition'
                  className='optional'
                />
                <label htmlFor='Patient Disposition' className='optional'>
                  Patient Disposition
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Mode of Arrival'
                  className='optional'
                />
                <label htmlFor='Mode of Arrival' className='optional'>
                  Mode of Arrival
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Street Address'
                  className='optional'
                />
                <label htmlFor='Street Address' className='optional'>
                  Street Address
                </label>
              </div>
              <div className='input-wrapper'>
                <input type='checkbox' name='ZIP' className='optional' />
                <label htmlFor='ZIP' className='optional'>
                  ZIP
                </label>
              </div>
              <div className='input-wrapper'>
                <input type='checkbox' name='City' className='optional' />
                <label htmlFor='City' className='optional'>
                  City
                </label>
              </div>
              <div className='input-wrapper'>
                <input type='checkbox' name='' className='optional' />
                <label htmlFor='' className='optional'></label>
              </div>
              <div className='input-wrapper'>
                <input type='checkbox' name='State' className='optional' />
                <label htmlFor='State' className='optional'>
                  State
                </label>
              </div>
              <div className='input-wrapper'>
                <input type='checkbox' name='Region' className='optional' />
                <label htmlFor='Region' className='optional'>
                  Region
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Geocode Source'
                  className='optional'
                />
                <label htmlFor='Geocode Source' className='optional'>
                  Geocode Source
                </label>
              </div>
              <div className='input-wrapper'>
                <input type='checkbox' name='Home Phone' className='optional' />
                <label htmlFor='Home Phone' className='optional'>
                  Home Phone
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Other Phone'
                  className='optional'
                />
                <label htmlFor='Other Phone' className='optional'>
                  Other Phone
                </label>
              </div>
              <div className='input-wrapper'>
                <input type='checkbox' name='Birth Date' className='optional' />
                <label htmlFor='Birth Date' className='optional'>
                  Birth Date
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Parent First Name'
                  className='optional'
                />
                <label htmlFor='Parent First Name' className='optional'>
                  Parent First Name
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Parent Middle Name'
                  className='optional'
                />
                <label htmlFor='Parent Middle Name' className='optional'>
                  Parent Middle Name
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Parent Last Name'
                  className='optional'
                />
                <label htmlFor='Parent Last Name' className='optional'>
                  Parent Last Name
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Message Control Id'
                  className='optional'
                />
                <label htmlFor='Message Control Id' className='optional'>
                  Message Control ID
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Facility OID'
                  className='optional'
                />
                <label htmlFor='Facility OID' className='optional'>
                  Facility OID
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Insurance Company'
                  className='optional'
                />
                <label htmlFor='Insurance Company' className='optional'>
                  Insurance Company
                </label>
              </div>
              <div className='input-wrapper'>
                <input type='checkbox' name='Company Id' className='optional' />
                <label htmlFor='Company Id' className='optional'>
                  Company ID
                </label>
              </div>
              <div className='input-wrapper'>
                <input type='checkbox' name='Plan Type' className='optional' />
                <label htmlFor='Plan Type' className='optional'>
                  Plan Type
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Plan Effective Date'
                  className='optional'
                />
                <label htmlFor='Plan Effective Date' className='optional'>
                  Plan Effective Date
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Plan Expiration Date'
                  className='optional'
                />
                <label htmlFor='Plan Expiration Date' className='optional'>
                  Plan Expiration Date
                </label>
              </div>
              <div className='input-wrapper'>
                <input type='checkbox' name='Active' className='optional' />
                <label htmlFor='Active' className='optional'>
                  Active
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Secondary Insurance Company'
                  className='optional'
                />
                <label
                  htmlFor='Secondary Insurance Company'
                  className='optional'
                >
                  Secondary Insurance Company
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Secondary Company Id'
                  className='optional'
                />
                <label htmlFor='Secondary Company Id' className='optional'>
                  Secondary Company ID
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Secondary Plan Type'
                  className='optional'
                />
                <label htmlFor='Secondary Plan Type' className='optional'>
                  Secondary Plan Type
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Secondary Plan Effective Date'
                  className='optional'
                />
                <label
                  htmlFor='Secondary Plan Effective Date'
                  className='optional'
                >
                  Secondary Plan Effective Date
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Secondary Plan Expiration Date'
                  className='optional'
                />
                <label
                  htmlFor='Secondary Plan Expiration Date'
                  className='optional'
                >
                  Secondary Plan Expiration Date
                </label>
              </div>
              <div className='input-wrapper'>
                <input
                  type='checkbox'
                  name='Secondary Active'
                  className='optional'
                />
                <label htmlFor='Secondary Active' className='optional'>
                  Secondary Active
                </label>
              </div>
            </div>
          </section>
        </div>
        <footer className='modal-footer'>
          <button type='reset'>Reset</button>
          <button type='submit'>Export</button>
        </footer>
      </form>
    </div>,
    document.getElementById('portal')
  );
}
