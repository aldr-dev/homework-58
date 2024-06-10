import {useState} from 'react';
import Modal from './components/Modal/Modal';
import {ButtonProps} from './types';
import Alert from './components/Alert/Alert';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const modalButtons: ButtonProps[] = [
    {type: 'primary', label: 'Continue', onClick: () => alert('Hello! Have a good day :)')},
    {type: 'danger', label: 'Close', onClick: () => setShowModal(false)},
  ];

  return (
    <div className="m-2">
      <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>Open Modal</button>

      <div className="mb-5">
        <Modal show={showModal} title="Some kinda modal title" buttons={modalButtons} onClose={() => setShowModal(false)}>
          <div className="modal-body">
            <p>This is modal content</p>
          </div>
        </Modal>
      </div>

      {showAlert ? (
        <>
          <Alert type="warning" onDismiss={() => setShowAlert(false)}>
            This is a warning type alert
          </Alert>
        </>
      ) : null}

      <Alert type="success">
        This is a success type alert
      </Alert>
    </div>
  );
};

export default App;