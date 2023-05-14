import React from "react";
import css from './style.module.css';

const BuildControl = props => (
    <div className={css.BuildControl}>
        <div className={css.Label}>{props.orts}</div>
        <button disabled={props.disabled[props.type]}
            className={css.Less}
            onClick={props.ortsHasah}>Remove</button>
        <button className={css.More}
            onClick={() => props.ortsNemeh(props.type)}>Add</button>
    </div>
);

export default BuildControl;