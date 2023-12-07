import React from 'react'
import user1 from './imagenes/mision.jpg'
import user2 from './imagenes/vision.jpg'

import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Nuestro objetivo</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p><span>MISION</span></p>
                        <p>La misión con las cuales nace la Unión Bautista Boliviana y que son los que siguen orientando su labor en Bolivia, son los siguientes:
                            •	Proclamar el evangelio de Jesucristo según las ordenanzas de la Biblia y establecer iglesias en todo el territorio nacional. 
                            •	Enseñar las verdades de la fe cristiana para el desarrollo integral del hombre.
                            •	Servir a las necesidades del hombre a través de la acción social, sin discriminación de credo, grupo social o cultura 
                        </p>
                      
                        <p></p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p><span>VISION</span></p>
                        <p>“Somos la unión de iglesia evangélicas bautistas de Bolivia y tenemos un 
                            compromiso misionero integral destinado
                             a la transformación de personas, de comunidades 
                             y la sociedad multicultural.”</p>
                        
                        <p></p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Testimonials
