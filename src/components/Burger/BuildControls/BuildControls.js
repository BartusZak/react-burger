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
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label}/>
        ))}
    </div>
);

export default buildControls;