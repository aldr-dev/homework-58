import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props extends React.PropsWithChildren {
  type: string;
  onDismiss?: () => void;
  clickDismissable?: boolean;
}

const Alert: React.FC<Props> = ({type, onDismiss, clickDismissable,  children}) => {
  const presentDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  const uniqueKey = Math.random();

  return (
    <AnimatePresence>
      <motion.div
        key={uniqueKey}
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}>

        <div className={`alert alert-${type} alert-dismissible w-25`}
             style={{cursor: clickDismissable ? 'pointer' : 'default'}}
             onClick={clickDismissable ? presentDismiss : undefined}>
          {children}
          {clickDismissable || onDismiss === undefined ? null : (
            <button type="button" className="btn-close" onClick={onDismiss}></button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;