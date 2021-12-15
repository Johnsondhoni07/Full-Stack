import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiaction } from '../../Store/ui-slice';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const cartQuantity = useSelector((state=>state.cart.totalQuantity));
  const ToggleCartHandler = () => {
    dispatch(uiaction.toggle())
  }
  return (
    <button className={classes.button} onClick={ToggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
