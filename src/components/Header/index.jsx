import { useState } from "react";
import logo from "../../assets/img/logo.svg";
import { api } from "../../services/api";
import { StyledHeader } from "./style";
import { ModalFilter } from "./ModalFilter";

export const Header = ({
  showProducts,
  setProducts,
  isFiltered,
  setIsFiltered,
}) => {
  const [filteredProducts, setFilteredProducts] = useState("");
  const [filteredProductsResult, setFilteredProductsResult] = useState(""); // Cópia do state original usado para renderizar resultados de busca em tela

  const loadAllProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submit = (event) => {
    event.preventDefault();
    showProducts(filteredProducts);
    setIsFiltered(true);
    setFilteredProductsResult(filteredProducts);
    setFilteredProducts("");
  };

  return (
    <>
      <StyledHeader>
        <div>
          <img src={logo} alt={logo}></img>
          <form onSubmit={submit}>
            <input
              type="text"
              placeholder="Digitar Pesquisa"
              value={filteredProducts}
              onChange={(event) => {
                setFilteredProducts(event.target.value);
              }}
            ></input>
            <button type="submit">Pesquisar</button>
          </form>
        </div>
      </StyledHeader>
      {isFiltered ? (
        <ModalFilter
          filteredProductsResult={filteredProductsResult}
          setIsFiltered={setIsFiltered}
          loadAllProducts={loadAllProducts}
        />
      ) : (
        ""
      )}
    </>
  );
};
