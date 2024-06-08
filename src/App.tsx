import {useState} from 'react';
import Modal from './components/Modal/Modal';
import {ButtonProps} from './types';

const App = () => {
  const [showModal, setShowModal] = useState(false);


  const modalButtons: ButtonProps[] = [
    {type: 'primary', label: 'Continue', onClick: () => alert('Hello! Have a good day :)')},
    {type: 'danger', label: 'Close', onClick: () => setShowModal(false)},
  ];

  return (
    <div className="m-2">
      <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>Open Modal</button>

      <Modal show={showModal} title="Some kinda modal title" buttons={modalButtons} onClose={() => setShowModal(false)}>
        <div className="modal-body">
          <p>This is modal content</p>
        </div>
      </Modal>
    </div>
  );
};

export default App;