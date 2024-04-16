import React, { ReactNode } from 'react'
import './modal.scss'

interface ModalProps {
    children: ReactNode;
}

export const Modal:React.FC<ModalProps>  = ({children}) => {
  return (
    <div className='modal'>
        {children}
    </div>
  )
}
