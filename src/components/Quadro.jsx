import React from "react";
import imagem from '../assets/dog.jpg'
import './Quadro.css'

const Quadro = () =>{
    return(
        <div className="Q-1">
            <div className="Q-1.2">
                <img src={imagem} alt="dog numa casa de sushi" />
            </div>
            <div className="Q-1.3">
                <h2>Susisha</h2>
                <p>Conheça o cachorro mais fofo do Brasil.</p>
            </div>
        </div>
    );
};
export default Quadro;