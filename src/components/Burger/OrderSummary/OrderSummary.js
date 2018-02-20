import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    // array polkich nazw
    const nazwy = [
        "Sałata",
        "Bekon",
        "Ser",
        "Mięso"
    ]
    //zmienna to iteracji
    let i = 0;
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{nazwy[0+i++]}</span>: {props.ingredients[igKey]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Twoje Zamówienie</h3>
            <p>Przepyszny burger z następującymi składnikami:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Kontynuować do podsumowania zamówienia?</p>
            <button>ANULUJ</button>
            <button>KONTYNUUJ</button>
        </Aux>
    );    
};

export default orderSummary;