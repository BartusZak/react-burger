import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    //tworze funkcje       //obiekt o ilości pól tyle ile prop.ingredients ma kluczy    
    let transformedIngredients = Object.keys(props.ingredients)
        // wykonuje operacje na kazdym elemencie po kluczu (ktory nazwe igKey)
        .map(igKey => { 
        //zwracam tablice spread operator (dopisuje do tablcy  klucze i wykonuje funkcje z parametrem blank)
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    console.log(transformedIngredients);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Proszę dodać składniki.</p>;
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;