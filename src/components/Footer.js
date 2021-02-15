import React from 'react'

import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Redes Sociais e Informações
                </p>
                <p className="footer-subscription-text">
                    Inscreva-se para receber Informações atualizadas no seu e-mail
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Seu email"
                        className="footer-input"
                        />
                         <Button buttonStyle='btn--outline'>Inscreva-se</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
            <a 
            className="social-instagram"
            href="https://www.instagram.com/sindipostosce/?hl=pt"

            >
                <i class="fab fa-instagram"></i>
            </a>
            <a 
            className="social-facebook"
            href="https://www.facebook.com/sindipostosce/"
            
            >
                <i class="fab fa-facebook"></i>
            </a>
            </div>
        </div>
    )
}

export default Footer
