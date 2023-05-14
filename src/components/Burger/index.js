import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";

const Burger = props => {

    //object damjuulahad tuhain objctiin attribute-uudig array bolgon gargana
    const items = Object.entries(props.orts);
    let content = [];

    //items iin el bolgoniig salgaj hevlene
    items.map((el, index) => {
        //el[0] -> orts; el[1] -> shirheg

        for (let i = 0; i < el[1]; i++)
            content.push(<BurgerIngredient key={`${index + 1}${i + 1}`} type={el[0]} />);
    });

    if (content.length == 0)
        content = <p>Choose the ingredients of your burger</p>;
    return (
        <div className={css.Burger}>
            <BurgerIngredient type="BreadTop" />
            {content}
            <BurgerIngredient type="BreadBottom" />
        </div>
    );
};

export default Burger;
