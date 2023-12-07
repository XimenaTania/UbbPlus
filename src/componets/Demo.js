import React from 'react'
import './Demo.css'

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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_j9wXnuIpi0?si=3ZPCiOEnkgBq3VJR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Demo
