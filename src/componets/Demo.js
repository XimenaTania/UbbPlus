import React from 'react'
import './Demo.css'
import mapass from './imagenes/mapa.png'
const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>Somos mas de 240 iglesias a nivel nacional</p>
                    <p>Encuentra tu iglesia</p>
                    <p>Puedes encontrar a tu igleias o la igleias que desees .</p>
                    <button className='button'>Buscar</button>
                </div>
                <div className='col-2'>
                <img className='figura' src={mapass} alt='mapass' />
                </div>
            </div>
        </div>
    )
}

export default Demo
