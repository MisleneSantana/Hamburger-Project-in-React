import { useState } from "react";
import logo from "../../assets/img/logo.svg";
import { StyledHeader } from "./style";
import { useEffect } from "react";

export const Header = ({ showProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   console.log("Oi");
  // }, [{ useState }]);

  const submit = (event) => {
    event.preventDefault();
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
              onChange={(event) => setFilteredProducts(event.target.value)}
            ></input>
            <button onClick={() => showProducts(filteredProducts)}>
              Pesquisar
            </button>
          </form>
        </div>
      </StyledHeader>
      {filteredProducts ? <h1>Resultados para: {filteredProducts}</h1> : null}
    </>
  );
};
