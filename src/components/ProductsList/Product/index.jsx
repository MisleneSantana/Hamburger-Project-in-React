import { api } from "../../../services/api";

export const Product = ({ product, handleClick, setProducts }) => {
  const handleClickAndLoadProducts = (product) => {
    handleClick(product.id);

    const loadProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data); //Atualiza o state
      } catch (error) {
        console.error(error);
      }
    };
    loadProducts();
  };

  return (
    <>
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <section>
        <h3>{`${product.name.substring(0, 10).trim()}`}</h3>
        <p>{product.category}</p>
        <small>R$ {parseFloat(product.price).toFixed(2)}</small>
        <button onClick={() => handleClickAndLoadProducts(product)}>
          Adicionar
        </button>
      </section>
    </>
  );
};
