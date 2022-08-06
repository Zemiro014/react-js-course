import React, { useContext, useEffect, useState } from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const [btnIsHighlighted, setbtnIshilighted] = useState(false)
    const { items } = cartCtx

    const numberOfCardItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setbtnIshilighted(true)

        const timer = setTimeout(() => {
            setbtnIshilighted(false)
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCardItems}
            </span>
        </button>
    )
}
export default HeaderCartButton;