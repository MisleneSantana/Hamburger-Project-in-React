export const CartProduct = ({ currentProduct, removeProductFromCart }) => {
  return (
    <>
      <div>
        <img src={currentProduct.img} alt={currentProduct.name}></img>
      </div>
      <span className="cart_data">
        <div>
          <h3>{`${currentProduct.name.substring(0, 10).trim()}`}</h3>
          <button onClick={() => removeProductFromCart(currentProduct.id)}>
            Remover
          </button>
        </div>
        <p>{currentProduct.category}</p>
      </span>
    </>
  );
};
