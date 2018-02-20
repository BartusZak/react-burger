import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Sałata', type: 'salad'},
    { label: 'Bekon', type: 'bacon'},
    { label: 'Ser', type: 'cheese'},
    { label: 'Mięso', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Aktualna cena: <strong>{props.price.toFixed(2)}</strong> zł</p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label}
                label={ctrl.label}
                //type={ctrl.type} // mozna tak ale lepiej arrow function
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}
    </div>
);

export default buildControls;