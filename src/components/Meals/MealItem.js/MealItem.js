import styles from "./MealItem.module.css";
import MealitemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "./../../../store/cart-contex";

const MealItem = (props) => {
  const cartContex = useContext(CartContext);

  const formattedPrice = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContex.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealitemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
