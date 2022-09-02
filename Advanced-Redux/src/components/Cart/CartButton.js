import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiSliceActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const qnt = useSelector(state => state.cartReducer.totalQuantity)

  const toggleCartHandler = () => {
    dispatch(uiSliceActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{qnt}</span>
    </button>
  );
};

export default CartButton;
