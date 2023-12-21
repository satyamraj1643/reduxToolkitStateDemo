import classes from './CartButton.module.css';


import { useSelector } from 'react-redux';

const CartButton = (props) => {

  let totalamount = 0;

  const orderArray = useSelector((state)=> state.orderSlice.ordersArray);
   orderArray.forEach(element => {
       totalamount += element.quantity;
   });



  return (
    <button  onClick = {props.onClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalamount}</span>
    </button>
  );
};

export default CartButton;
