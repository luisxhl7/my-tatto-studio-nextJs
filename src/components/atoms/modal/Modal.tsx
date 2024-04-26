import React from 'react'
import { ModalProps } from '@/interface'
import './modal.scss'

export const Modal:React.FC<ModalProps>  = ({children, className}) => {
  return (
    <div className={`modal ${className}`}>
      {children}
    </div>
  )
}
