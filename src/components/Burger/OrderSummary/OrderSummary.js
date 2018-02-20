import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
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
        </Aux>
    );    
};

export default orderSummary;