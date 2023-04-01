import { Product } from "./Product";
import { StyledProductsList } from "./style";
import { StyledProduct } from "./Product/style";

export const ProductsList = ({
  products,
  handleClick,
  setProducts,
  setIsFiltered
}) => {

  return (
    <>
      <StyledProductsList>
        {products.map((product) => (
          <StyledProduct key={product.id}>
            <Product
              product={product}
              handleClick={handleClick}
              setProducts={setProducts}
              setIsFiltered={setIsFiltered}
            />
          </StyledProduct>
        ))}
      </StyledProductsList>
    </>
  );
};
