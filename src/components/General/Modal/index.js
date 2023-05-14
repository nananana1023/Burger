import React from "react";
import css from './style.module.css';
import OrderSummary from "../../OrderSummary";
import Shadow from "../Shadow";

const modal = (props) => (
    <div>
        <Shadow show={props.show} closeConfirmModal={props.closeConfirmModal} />
        <div

            style={{ transform: props.show ? 'translateY(0)' : 'translateY(-)', opacity: props.show ? '1' : '0' }}

            className={css.Modal}>
            {props.children}
        </div>
    </div>

);

export default modal;