import {StyledCartTotal} from "./style";

export const CartTotal = ({ currentSale, removeAll }) => {
  if (currentSale.length > 0) {
    const total = currentSale
      .reduce((previousValue, currentValue) => {
        return previousValue + currentValue.price;
      }, 0)
      .toFixed(2);

    return (
      <StyledCartTotal>
        <div class="total_container">
          <h3>Total</h3>
          <small>R$ {total}</small>
        </div>
        <button onClick={() => removeAll()}>Remover todos</button>
      </StyledCartTotal>
    );
  }
};
