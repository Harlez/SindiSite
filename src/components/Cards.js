import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Locais</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                            src="images/img-Fortal.jpg"
                            text="Avenida Engenheiro Santana Junior,
                            3000, sala: 605
                            CEP: 60192-200
                            Cel.: (85) 9 9137-7964
                            Telefone: (85) 3244.1147
                            Email: sindipostos@sindipostos-ce.com.br"
                            label='Fortaleza'
                            path='/services'
                        />

                        <CardItem 
                            src="images/img-Fortal.jpg"
                            text="Teste"
                            label='Fortaleza'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
