import classes from './CartItem.module.css';
 import {useDispatch} from 'react-redux';
 import { orderActions } from '../../store/redux';



const CartItem = (props) => {

  const dispatch = useDispatch();
  const { title, quantity, total, price , id} = props.item;


  const DecrementHandler = () =>{
         dispatch(orderActions.decreaseCount(id)); 
  }

  const IncrementHandler = ()=>{
    dispatch(orderActions.increaseCount(id)); 
  }

 


  

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={DecrementHandler} >-</button>
          <button onClick={IncrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
