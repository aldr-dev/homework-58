import React from 'react';

interface Props extends React.PropsWithChildren {
  type: string;
  onDismiss?: () => void;
  clickDismissible?: boolean;
}

const Alert: React.FC<Props> = ({type, onDismiss, clickDismissible,  children}) => {

  const presentDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <div className={`alert alert-${type} alert-dismissible w-25`} style={{cursor: clickDismissible ? 'pointer' : 'default'}} onClick={clickDismissible ? presentDismiss : undefined}>
      {children}
      {clickDismissible || onDismiss === undefined ? null : (
        <button type="button" className="btn-close" onClick={onDismiss}></button>
      )}
    </div>
  );
};

export default Alert;