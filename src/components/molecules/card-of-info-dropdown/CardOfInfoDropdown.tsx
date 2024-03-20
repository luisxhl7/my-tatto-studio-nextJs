import React, { useState, ReactNode } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import './CardOfInfoDropdown.scss';

interface CardOfInfoDropdownProps {
  title: string;
  children: ReactNode;
}

export const CardOfInfoDropdown: React.FC<CardOfInfoDropdownProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Asegura que 'isOpen' sea un booleano

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id='cardOfInfoDropdown'
      className={`cardOfInfoDropdown ${isOpen ? '--isOpen' : ''}`}
      onClick={toggleIsOpen}
      data-testid='cardOfInfoDropdown'
    >
      <div className='cardOfInfoDropdown__content-title'>
        <span className='cardOfInfoDropdown__title'>{title}</span>
        <KeyboardArrowDown
          className={`cardOfInfoDropdown__arrow ${isOpen ? '--isOpen' : ''}`}
          data-testid='cardOfInfoDropdownArrow'
        />
      </div>
      {children}
    </div>
  );
};
