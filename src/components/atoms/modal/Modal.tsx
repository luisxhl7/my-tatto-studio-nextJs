import React, { ReactNode } from 'react'
import './modal.scss'

interface ModalProps {
  children: ReactNode;
  className: String;
}

export const Modal:React.FC<ModalProps>  = ({children, className}) => {
  return (
    <div className={`modal ${className}`}>
      {children}
    </div>
  )
}
