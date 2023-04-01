import { StyledModalFilter } from "./style";

export const ModalFilter = ({
  filteredProductsResult,
  setIsFiltered,
  loadAllProducts,
}) => {
  return (
    <StyledModalFilter>
      <div>
        <h2>
          Resultados para:{" "}
          {`${
            filteredProductsResult[0].toUpperCase() +
            filteredProductsResult.substring(1)
          }`}
          {/* { `${filteredProductsResult}`} */}
        </h2>
        <p
          onClick={() => {
            setIsFiltered(false);
            loadAllProducts();
          }}
        >
          Limpar busca
        </p>
      </div>
    </StyledModalFilter>
  );
};
