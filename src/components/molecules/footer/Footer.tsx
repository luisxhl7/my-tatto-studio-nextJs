'use client'
import React from 'react'
import { CardOfInfoDropdown } from '../../molecules/card-of-info-dropdown/CardOfInfoDropdown'
import './footer.scss'

export const Footer = () => {

  return (
    <div className='footer'>
      <CardOfInfoDropdown title={'CONTÁCTENOS'}>
        <span>Teléfono: (601) 1234567</span>
        <span>WhatsApp: (+57) 444 333 22 11</span>
        <span>Servicio al cliente WhatsApp: (+57) 444 333 22 11</span>
        <span>Medellin: (4) 333 22 11</span>
      </CardOfInfoDropdown>

      <CardOfInfoDropdown title={'ACERCA DE MY TATTOO STUDIO'}>
        <a href=" ">Términos de Uso</a>
        <a href=" ">¿Quiénes Somos?</a>
        <a href=" ">Responsabilidad Social</a>
      </CardOfInfoDropdown>

      <CardOfInfoDropdown title={'SERVICIO AL CLIENTE'}>
        <a href=" ">Aplicar mi garantía</a>
        <a href=" ">Preguntas Frecuentes</a>
        <a href=" ">Estado de mi recolección</a>
      </CardOfInfoDropdown>
      
      <CardOfInfoDropdown title={'UBICACIÓN'}>
        <span>Medellin cr333 #22 11</span>
      </CardOfInfoDropdown>
    </div>
  )
}
