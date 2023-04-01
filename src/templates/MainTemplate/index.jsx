import { StyledMainTemplate } from "./style";
import { api } from "../../services/api";
import { ModalFilter } from "../ModalFilter";

export const MainTemplate = ({
  setProducts,
  isFiltered,
  filteredProductsResult,
  setIsFiltered,
  children,
}) => {
  const loadAllProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <StyledMainTemplate>
        {isFiltered ? (
          <ModalFilter
            filteredProductsResult={filteredProductsResult}
            setIsFiltered={setIsFiltered}
            loadAllProducts={loadAllProducts}
          />
        ) : (
          ""
        )}
        <div>{children}</div>
      </StyledMainTemplate>
    </>
  );
};
