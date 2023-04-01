import styled from "styled-components";

export const StyledCartTotal = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 0 1rem 0;

  .total_value {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h3 {
      font-size: var(--text-14);
      font-weight: 600;
      color: var(--black--fonts);
      line-height: 1.5rem;
    }

    small {
      font-size: var(--text-14);
      line-height: 1.5rem;
      font-weight: 600;
      color: var(--grey-50);
    }
  }

  button {
    width: 90%;
    height: 3.75rem;
    border-radius: calc(var(--border-radius) * 2);
    background-color: var(--grey-20);
    border: 2px solid var(--grey-20);
    font-size: var(--text-default);
    font-weight: 600;
    color: var(--grey-50);

    :hover {
      background-color: var(--grey-50);
      border: 2px solid var(--grey-50);
      color: var(--white);
    }
  }

  @media (min-width: 768px) {
    margin: 0 0 1rem 0;
  }
`;
