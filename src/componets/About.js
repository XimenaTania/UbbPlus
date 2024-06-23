import React from 'react'
import pastor from './imagenes/igle1.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='containerPas'>
                <img src={pastor} alt='pastor' />
                <div className='col-2'>
                    <h2>Union Bautista Boliviana</h2>
                    <span className='line'></span>
                    <p>“La Unión Bautista Boliviana data del 1898 con la llegada de Archivaldo Reekie enviado por el entonces Misionero Bautista Canadiense. Llega a nuestro país el 20 de abril de 1898 con la intención de iniciar la predicación evangelística en el país.
                         Cuatro años después organiza la primera iglesia Evangélica Bautista en Bolivia en la ciudad de Oruro cuyo nombre es “Iglesia Bautista Del Señor Resucitado”.    
                    </p>
                    <p> El 24 de febrero de 1936, se organiza la primera institución evangelística con el nombre de la Unión Bautista Boliviana.”  </p>
                    <button className='button'>Leer mas</button>
                </div>
            </div>
        </div>
    )
}

export default About
