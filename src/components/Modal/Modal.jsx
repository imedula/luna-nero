import React from 'react';
import './Modal.css';

const Modal = ({ children, onClose }) => {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) { 
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-container">
                <div className="modal-title">
                    <button className="modal-close" onClick={onClose}>
                        &times;
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;