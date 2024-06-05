'use client'

import React, { useState } from 'react'
import './ModalInfoText.scss'

export const ModalInfoText = () => {
  const [openModal, setOpenModal] = useState(true)

  const handleCloseModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className={`modalInfoText ${!openModal ? '--animated-close' : ''}`}>
    
      <button
        className='modalInfoText__button-close-modal'
        onClick={handleCloseModal}
      >
        X
      </button>
      
      <h3>Bienvenidos!!</h3>
      <p>
        Este proyecto ha sido desarrollado únicamente con fines de práctica.
        Todo el contenido, incluidas las imágenes y los datos recopilados, 
        es completamente ficticio. No hay ninguna afiliación real con los 
        sitios mencionados ni con los datos de los usuarios.
      </p>
    
    </div>
  )
}
