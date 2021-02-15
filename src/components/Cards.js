import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Contatos</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem 
                            src="images/img-Fortal.jpg"
                            text="Avenida Engenheiro Santana Junior, 
                            3000, sala: 605 CEP: 60192-200 
                            Cel:(85) 9 9137-7964 Telefone: (85) 3244.1147 
                            Email:sindipostos@sindipostos-ce.com.br"
                            label='Fortaleza'
                            path='/services'
                        />
                        <CardItem 
                            src="images/img-Sobral.jpg"
                            text="Rua Dr. Arimatéia Monte e Silva, 1125 – Junco,
                            Cep: 62030-230
                            Fone: (88) 3614.5912
                            Email: subsederegiaonorte@sindipostos-ce.com.br"
                            label='Sobral'
                            path='/services'
                        />
                        <CardItem 
                            src="images/img-JuazeiroNO.jpg"
                            text="Av. Ailton Gomes, 4131 – Sala 207 – Lagoa Seca
                            – Cep: 63020-000,
                            Fone: (88) 3571.2208
                            Email: subsederegiaodocariri@sindipostos-ce.com.br"
                            label='Juazeiro do Norte'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
