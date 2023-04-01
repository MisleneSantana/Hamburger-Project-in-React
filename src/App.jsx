import { useState, useEffect } from "react";
import { api } from "./services/api";
import { GlobalReset } from "./styles/reset";
import { GlobalStyle } from "./styles/global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledContainer } from "./style";
import { Header } from "./components/Header";
import { MainTemplate } from "./templates/MainTemplate";
import { ProductsList } from "./components/ProductsList/index";
import { Cart } from "./components/Cart/index";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false); //Alternar o modal com o resultado de filter

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        toast.error(error);
      }
    }
    loadProducts();
  }, []);

  const showProducts = (filteredProducts) => {
    const filterProduct = products.filter((product) => {
      return (
        product.name.toUpperCase().includes(filteredProducts.toUpperCase()) ||
        product.category.toUpperCase().includes(filteredProducts.toUpperCase())
      );
    });
    setProducts(filterProduct);
    // console.log(filteredProducts);
  };

  const handleClick = (productId) => {
    if (currentSale.find((product) => product.id === productId)) {
      toast.error("O item já foi adicionado ao carrinho", {
        autoClose: 2000,
      });
    } else {
      const selectedProduct = products.find(
        (product) => product.id === productId
      );
      setCurrentSale([...currentSale, selectedProduct]);
    }
  };

  const removeProductFromCart = (productId) => {
    const newCardList = currentSale.filter(
      (product) => product.id !== productId
    );
    setCurrentSale(newCardList);
  };

  const removeAll = () => {
    setCurrentSale([]);
  };

  return (
    <>
      <GlobalReset />
      <GlobalStyle />
      <ToastContainer position="bottom-right" />
      <StyledContainer>
        <Header
          showProducts={showProducts}
          setProducts={setProducts}
          isFiltered={isFiltered}
          setIsFiltered={setIsFiltered}
        />
        <MainTemplate>
          <ProductsList
            products={products}
            handleClick={handleClick}
            setProducts={setProducts}
            setIsFiltered={setIsFiltered}
          />
          <Cart
            currentSale={currentSale}
            removeProductFromCart={removeProductFromCart}
            removeAll={removeAll}
          />
        </MainTemplate>
      </StyledContainer>
    </>
  );
}

export default App;
