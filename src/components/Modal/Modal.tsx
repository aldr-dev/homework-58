import React from 'react';
import { ButtonProps } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  buttons?: ButtonProps[];
}

const Modal: React.FC<Props> = ({ show, title, onClose, buttons, children }) => {
  return (
    <>
      <AnimatePresence>
        {show && (
          <>
            <div className="modal-backdrop show" style={{ display: show ? 'block' : 'none' }} />
            <div className="modal show" style={{ display: show ? 'block' : 'none' }} onClick={onClose}>
              <motion.div
                initial={{ y: 10, x: 0, opacity: 0 }}
                animate={{ y: 50, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="modal-dialog"
                onClick={(event) => event.stopPropagation()}>
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5">{title}</h1>
                    <button type="button" className="btn-close" onClick={onClose}></button>
                  </div>
                  {children}
                  {buttons && buttons.length > 0 ? (
                    <div className="modal-footer">
                      {buttons.map((button, index) => (
                        <button type="button" key={index} className={`btn btn-${button.type}`} onClick={button.onClick}>{button.label}</button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;