import styled from "styled-components";

export const StyledMainTemplate = styled.main`
  width: 99vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 90%;
    margin:3rem 0 1rem 0;

    div {
      width: 90%;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
