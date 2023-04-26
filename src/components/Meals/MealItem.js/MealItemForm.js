import styles from "./MealItemForm.module.css";
import Input from "./../../UI/Input";
import { useRef, useState } from "react";

const MealitemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);

  const amountInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputAmount = amountInput.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(+inputAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInput}
        label="Количество"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Добавить</button>
      {!isAmountValid && <p>Введите кол-во от 1 до 10</p>}
    </form>
  );
};

export default MealitemForm;
