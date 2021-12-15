import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items=useSelector((state)=>state.cart.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {items.map((e,i)=> <ul key={i}>
        <CartItem 
          item={{ title:e.name , quantity: e.quantity, total: e.totalPrice, price: e.price ,id:e.id}}
        />  
      </ul> )}
    </Card>
  );
};

export default Cart;