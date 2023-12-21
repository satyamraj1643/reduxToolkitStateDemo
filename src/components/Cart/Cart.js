import React from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  // Access the ordersArray state using useSelector
  const orderDetails = useSelector((state) => state.orderSlice.ordersArray);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {orderDetails.map((order) => (
          <CartItem
            key={order.id} // Add a unique key for each order
            item={{
              title: order.title,
              quantity: order.quantity, // You may want to calculate the quantity based on your logic
              total: order.total, // Assuming total is the same as price for now
              price: order.price,
              id: order.id,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
