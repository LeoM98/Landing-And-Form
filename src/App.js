import React from 'react';
import './STYLES/style.css'
import './App.css';
import './FONTS/red_rabbit.ttf'
import large from './IMG/large.png'
import imv from './IMG/imagen_v.jpg'
import im1 from './IMG/1.jpg'
import im2 from './IMG/2.jpg'
import im3 from './IMG/3.jpg'
import face from './IMG/facebook.png'
import insta from './IMG/instagram.png'
import twitt from './IMG/twitter.png'
import vimeo from './IMG/vimeo.png'

function App() {
    return (<div id="container">

        <div className="colores"></div>
        <div className="logo">
            <img src={large} alt=""></img>
        </div>

        <div className="imagen">
            <img src={imv} alt=""></img>
        </div>

        <div className="blanco">
            <div id="titulo">
                <strong><h1> A world of inspiration.</h1></strong>
            </div>

            <div className="texto1">
                <p>Vimeo is a community of 90 million+ people who absolutely love video. Think of it as part film festival, part  collaboration space, and part distribution hub. There’s no better place to discover mind-blowing videos, and work with your team on the next big thing.</p>    
            </div>

            <div className="boton">
                <button> <a href="https://vimeo.com/es/upload?utm_campaign=35329&utm_medium=vimeo-onboarding-6-201902&utm_source=email" target="blank">Add your videos</a></button>
            </div>

        </div>

        <div className="blanco2">
            <div className="titulo2">
                <h2>Get the creatives juice following.</h2>
            </div>

            <div className="colum">
                <div className="ico1">
                    <img src={im1} alt=""></img>
                </div>
                <div className="texto2">
                    <h3>Staff picks</h3>
                    <p>We curate videos that jumpstart careers and put creators on the map. <a href="https://vimeo.com/channels/staffpicks?utm_source=email&utm_medium=vimeo-onboarding-6-201902&utm_campaign=35329"target="blank"> Watch the latest. </a></p>
                </div>
            </div>

            <div className="colum2">
                <div className="ico2">
                    <img src={im2} alt=""></img>
                </div>
                <div className="texto3">
                    <h3>Vimeo blog</h3>
                    <p>Discover new features, video techniques, and the stories behind Staff Picks. <a href="https://vimeo.com/blog/?utm_source=email&utm_medium=vimeo-onboarding-6-201902&utm_campaign=35329"target="blank"> Read more.</a></p>
                </div>
            </div>

            <div className="colum3">
                <div className="ico3">
                    <img src={im3} alt=""></img>
                </div>
                <div className="texto4">
                    <h3>Stock footage</h3>
                    <p>Browse Vimeo Stock, including exclusive, royalty-free footage from iconic creators. Unlock access to 1,000 free clips when you become a paid member. <a href="https://vimeo.com/es/stock?utm_campaign=35329&utm_medium=vimeo-onboarding-6-201902&utm_source=email" target="blank"> Start browsing.</a></p>
                </div>
            </div>

            <div className="boton">
                <button><a href="https://vimeo.com/es/upload" target="blank"> Upload now</a></button>
            </div>
        </div>

        <div id="footer">
            <ul>

                <li><a href="https://www.facebook.com/Vimeo/" target="blank"><img src={face} alt=""></img></a></li>
                <li><a href="https://twitter.com/vimeo?lang=es"target="blank"><img src={twitt} alt=""></img></a></li>
                <li><a href="https://vimeo.com/es/"target="blank"><img src={vimeo} alt=""></img></a></li>
                <li><a href="https://www.instagram.com/vimeo/?hl=es-la"target="blank"><img src={insta} alt=""></img></a></li>
            </ul>
            <strong><p>™ + © Vimeo, Inc. All rights reserved.</p></strong>
        </div>
    </div>)

}

export default App;
