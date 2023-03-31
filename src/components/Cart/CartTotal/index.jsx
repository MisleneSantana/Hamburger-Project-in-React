import { StyledCartTotal } from "./style";

export const CartTotal = ({ currentSale, removeAll }) => {
  if (currentSale.length > 0) {
    const total = currentSale
      .reduce((previousValue, currentValue) => {
        return previousValue + currentValue.price;
      }, 0)
      .toLocaleString("pt-br", { minimumFractionDigits: 2 });

    return (
      <StyledCartTotal>
        <div>
          <h3>Total</h3>
          <small>R$ {total}</small>
        </div>
        <button onClick={() => removeAll()}>Remover todos</button>
      </StyledCartTotal>
    );
  }
};
