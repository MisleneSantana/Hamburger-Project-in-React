import { StyledMainTemplate } from "./style";
import { api } from "../../services/api";

// const loadProducts = async (setProducts) => {
//   try {
//     const response = await api.get("/products");
//     setProducts(response.data); //Atualiza o state
//   } catch (error) {
//     console.log(error);
//   }
// };

export const MainTemplate = ({ children, setProducts }) => {
  return (
    <>
      {/* <button onClick={() => loadProducts(setProducts)}>Limpar</button> */}
      <StyledMainTemplate>
        <div>{children}</div>
      </StyledMainTemplate>
    </>
  );
};
