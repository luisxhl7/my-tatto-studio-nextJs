import React, { useState } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import { CardOfInfoDropdownProps } from '@/interface';
import './CardOfInfoDropdown.scss';

export const CardOfInfoDropdown: React.FC<CardOfInfoDropdownProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
