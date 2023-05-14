import React, { Component } from "react";
import Burger from "../../components/Burger";
import BurgerIngredient from "../../components/BurgerIngredient";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const INGREDIENT_PRICES = { lettuce: 150, cheese: 250, beans: 550, tomato: 300 };

class BurgerBuilder extends Component {
    state = {
        ingredients: {//created object
            lettuce: 0,
            beans: 0,
            cheese: 0,
            tomato: 0
        },

        totalPrice: 1000,
        purchasing: false,
        confirmOrder: false

    };

    ortsNemeh = (type) => {
        //shine object uusgej uurchlult hiigeed state ruu damjuulna
        //... -> ingredients dotorh buh ymiig zadlaad bich
        const newIngredients = { ...this.state.ingredients };
        //object iin attribute ruu array iin index bdlaar handaj bolno -> if type='lettuce'; newIngredients.salad++; gsn ug
        newIngredients[type]++;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({
            purchasing: true,
            totalPrice: newPrice,
            ingredients: newIngredients
        });
    };

    ortsHasah = (type) => {
        if (this.state.ingredients[type] > 0) {
            const newIngredients = { ...this.state.ingredients };
            newIngredients[type]--;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

            this.setState(
                {
                    // purchasing:newPrice>1000,
                    totalPrice: newPrice,
                    ingredients: newIngredients
                });

            if (newPrice == 1000) {
                this.setState({ purchasing: false });
            }
        };
    }

    continueOrder = () => {

    };

    showConfirmModal = () => {
        this.setState({ confirmOrder: true });
    };

    closeConfirmModal = () => {
        this.setState({ confirmOrder: false });
    };

    render() {
        const disabledIngredients = { ...this.state.ingredients };
        //attribute bolgon n key ru orj irne - array bdlar or . taviad handaj bolno
        for (let key in disabledIngredients) {
            //0-s baga bval disabledingredients=true
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }

        return (
            <div>
                <Modal
                    closeConfirmModal={this.closeConfirmModal}
                    show={this.state.confirmOrder}>
                    <OrderSummary
                        onCancel={this.closeConfirmModal}
                        onContinue={this.continueOrder}

                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients} />
                </Modal>
                {/* eh BurgerBuilder comp-s Burger huu comp ruu ingredients-iig damjuulna */}
                <Burger orts={this.state.ingredients} />
                <BuildControls
                    showConfirmModal={this.showConfirmModal}
                    disabledIngredients={disabledIngredients}
                    ortsNemeh={this.ortsNemeh}
                    ortsHasah={this.ortsHasah}
                    price={this.state.totalPrice}
                    disabled={!this.state.purchasing}
                />
            </div>
        )
    }
}

export default BurgerBuilder;
