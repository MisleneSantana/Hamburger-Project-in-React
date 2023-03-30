import { useState } from "react";
import logo from "../../assets/img/logo.svg";
import { StyledHeader } from "./style";

export const Header = ({ showProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

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
    </>
  );
};
