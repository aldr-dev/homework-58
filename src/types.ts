import React from 'react';

export interface ButtonProps {
  type: string;
  label: string;
  onClick: React.MouseEventHandler;
}