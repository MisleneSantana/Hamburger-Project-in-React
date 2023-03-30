import styled from "styled-components";

export const StyledProductsList = styled.ul`
  display: flex;
  gap: 1rem;
  overflow-y: scroll;
  margin: 1rem;

  @media (min-width: 768px) {
    margin: 0;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 49rem;
    width: 300px;
  }

  @media (min-width: 800px) {
    width: 21.875rem;
    // overflow-y: hidden;
  }

  @media (min-width: 900px) {
    width: 43.75rem;
  }

  @media (min-width: 1000px) {
    width: 50rem;
    overflow-y: hidden;
  }

  @media (min-width: 1100px) {
    width: 50rem;
  }

  @media (min-width: 1300px) {
    width: 56.25rem;
  }

  @media (min-width: 1400px) {
    width: 59.375rem;
  }
`;
