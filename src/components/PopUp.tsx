import React from 'react';

interface IModalProps {
  isActive: boolean;
  children: React.ReactNode;
}

export const PopUp: React.FC<IModalProps> = ({ children, isActive }) => {
  const showHideClassName = isActive ? 'pop-up pop-up_active' : 'pop-up';
  return <div className={showHideClassName}>{children}</div>;
};
