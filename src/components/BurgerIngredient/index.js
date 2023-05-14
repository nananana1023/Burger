import React from "react";
import css from "./style.module.css";

const BurgerIngredient = (props) => {
    if (props.type === 'BreadTop') return (
        <div className={css.BreadTop}>
            <div className={css.Seed}></div>
            <div className={`${css.Seed} ${css.Second}`}></div>
            <div className={`${css.Seed} ${css.Third}`}></div>
            <div className={`${css.Seed} ${css.Fourth}`}></div>
        </div>);
    if (props.type === 'lettuce') return <div className={css.Lettuce}></div>
    if (props.type === 'beans') return <div className={css.Beans}></div>
    if (props.type === 'cheese') return <div className={css.Cheese}></div>
    if (props.type === 'tomato') return <div className={css.Tomato}></div>
    if (props.type === 'BreadBottom') return <div className={css.BreadBottom}></div>
    return <div>...</div>
};

export default BurgerIngredient;