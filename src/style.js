import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  

  @media (min-width: 768px){
    margin-bottom:0;
    // height: 99vh;
  }
`;
