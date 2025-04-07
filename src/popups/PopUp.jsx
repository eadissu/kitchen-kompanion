import { useEffect } from 'react';
import '../popups/PopUps.css';

/*
  All children:
    SetQuantityNumeric
*/

function Popup({ children, onClose }) {
  useEffect(() => {
    document.body.classList.add('popup-open');
    return () => document.body.classList.remove('popup-open');
  }, []);

  return (
    <>
      <div className="popup-overlay" onClick={onClose} />
      <div className="popup-content">
        {children}
      </div>
    </>
  );
}

export default Popup;
