import {useState} from 'react';
import Modal from './components/Modal/Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="m-2">
      <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>Open Modal</button>

      <Modal show={showModal} title="Some kinda modal title" onClose={() => setShowModal(false)}>
        <div className="modal-body">
          <p>This is modal content</p>
        </div>
      </Modal>
    </div>
  );
};

export default App;