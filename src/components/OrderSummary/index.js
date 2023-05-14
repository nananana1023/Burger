import React from "react";
import Button from "../General/Button";

const OrderSummary = (props) => {
    return (
        <div>
            <h3>Your order:</h3>
            <ul>
                {Object.keys(props.ingredients).map(el => (
                    <li>{el}: {props.ingredients[el]}</li>
                ))}
            </ul>
            <p><strong>Total price: {props.price}₮ </strong></p>

            <p>Continue?</p>
            <Button daragdsan={props.onCancel} btnType="Danger" text="No" />
            <Button daragdsan={props.onContinue} btnType="Success" text="Yes" />

        </div>
    );
};

export default OrderSummary;