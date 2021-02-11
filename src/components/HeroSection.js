import React from 'react'

import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className= 'hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted  />

            <h1>SindiPostos</h1>
            <p>Sindicato do Comércio Varejista de Derivados de Petróleo do Estado do Ceará</p>
            <div className="hero-btns">
                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn-large'
                > CONHEÇA-NOS 
                </Button>

                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn-large'
                > Entre em contato <i class="fas fa-gas-pump"></i>
                </Button>

            </div>
        </div>
    )
}

export default HeroSection
