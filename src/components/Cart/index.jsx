import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";
import { StyledCart } from "./style";
import {StyledCartProduct} from "./CartProduct/style";

export const Cart = ({ currentSale, removeProductFromCart, removeAll }) => {
  return (
    <>
      <StyledCart>
        <div>
          <h2>Carrinho de compras</h2>
          {currentSale.length > 0 ? (
            <>
              <ul>
                {currentSale.map((currentProduct) => (
                  <StyledCartProduct key={currentProduct.name}>
                    <CartProduct
                      currentProduct={currentProduct}
                      removeProductFromCart={removeProductFromCart}
                    />
                  </StyledCartProduct>
                ))}
              </ul>
              <CartTotal currentSale={currentSale} removeAll={removeAll} />
            </>
          ) : (
            <>
              <section>
                <h1>Sua sacola está vazia</h1>
                <p>Adicione itens</p>
              </section>
            </>
          )}
        </div>
      </StyledCart>
    </>
  );
};
