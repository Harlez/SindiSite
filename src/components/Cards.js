import React from 'react'

import './Cards.css'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h1> TESTE </h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-5.jpg'
                    text='EXEMPLO'
                    label='Local'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>     
    )
}

export default Cards