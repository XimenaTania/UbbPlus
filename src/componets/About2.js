import React from 'react'
import pastor from './imagenes/carrusel2.jpg'
import './About2.css'

const About2 = () => {
    return (
        <div className='about2' id='about2'>
            <div className='containerPas'>
                <img src={pastor} alt='pastor' />
                <div className='col-2'>
                    <h2>Nuestras actividades</h2>
                    <span className='line'></span>
                    <p>La union femenil misionera bautistata te invita a que seas parte de esta hermosa actividad de evangelizmo y misiones.    
                    </p>
                    <p> Comunicate con nuestra hermana:  </p>
                   
                </div>
            </div>
        </div>
    )
}

export default About2
