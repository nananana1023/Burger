import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = props => {

    const controls = {
        lettuce: 'lettuce',
        beans: 'beans',
        cheese: 'cheese',
        tomato: 'tomato'
    };

    return (
        <div className={css.BuildControls}>
            <p><strong>Price:</strong> {props.price}</p>
            {Object.keys(controls).map(el => (
                <BuildControl
                    key={el}
                    ortsNemeh={props.ortsNemeh}
                    ortsHasah={() => props.ortsHasah(controls[el])}
                    disabled={props.disabledIngredients}
                    type={el} orts={controls[el]} />
            ))}

            <button
                onClick={props.showConfirmModal}
                disabled={props.disabled}
                className={css.OrderButton}>
                Submit
            </button>

        </div>
    );
};

export default BuildControls;