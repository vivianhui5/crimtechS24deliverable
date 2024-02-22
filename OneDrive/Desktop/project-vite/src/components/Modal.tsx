import { useState } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

export default function Modal() {
  // state for detemining what to render
  const [isOpen, setIsOpen] = useState(false);

  // function to change state of isOpen
  const toggleModal = () => setIsOpen(!isOpen);

  // render the button if isOpen is false, else render the modal
  return !isOpen ? (
    <button onClick={toggleModal}>Click Me!</button>
  ) : createPortal(
    <div style={{ // css styling
      position: 'fixed', 
      top: '50%', 
      left: '50%',
      transform: 'translate(-50%, -50%)', 
      width: '20rem', 
      height: '20rem', 
      backgroundColor: 'white', 
      padding: '20px', 
      boxSizing: 'border-box',
      border: '1px solid #ccc', 
      borderRadius: '5px', 
      zIndex: 1000, 
    }}>
      {/* text rendered in pop up */}
      <p>hi</p>
      {/*close button, when clicked calls toggleModal to change state */}
      <button onClick={toggleModal} style={{ position: 'absolute', top: '10px', right: '10px' }}>close</button>
    </div>,
    modalRoot as Element
  );
}
