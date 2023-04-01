import { api } from "../../../services/api";

export const Product = ({
  product,
  handleClick,
  setProducts,
  setIsFiltered,
}) => {
  const handleClickAndLoadProducts = (product) => {
    setIsFiltered(false); //Limpa o modal com o resultado de busca
    handleClick(product.id);

    const loadProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data); //Atualiza o state
      } catch (error) {
        console.log(error);
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
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <small>
          R${" "}
          {Number(product.price).toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })}
        </small>
        <button onClick={() => handleClickAndLoadProducts(product)}>
          Adicionar
        </button>
      </section>
    </>
  );
};
