import Modal from "../UI/Modal"
import Button from "../UI/Button";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 22.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>22.99</span>
      </div>
      <div className={classes.actions}>
        <Button className="cart-btn-close" onClick={props.onHideCart}>Close</Button>
        <Button className="cart-btn">Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;
