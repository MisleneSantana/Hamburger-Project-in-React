import styled from "styled-components";

export const StyledCartProduct = styled.li`
  display: flex;
  gap: 1rem;
  width: 90%;

  div {
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-20);
    object-fit: cover;

    img {
      height: 4.375rem;
      width: 5rem;
      object-fit: cover;
    }
  }

  span {
    width: 70%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div {
      width: 99%;
      height: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      background-color: var(--grey-0);

      h3 {
        display: flex;
        height: 2rem;
        font-size: var(--text-18);
        font-weight: 700;
        line-height: 1.5rem;
        color: var(--grey-100);
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
        font-size: var(--text-12);
        font-weight: 500;
        line-height: 0.9375rem;
        color: var(--grey-30);
        cursor: pointer;

        :hover{
          color: var(--grey-100);
        }

      }
    }

    p {
      font-size: var(--text-12);
      line-height: 1rem;
      font-weight: 400;
      color: var(--grey-50);
    }
  }

  @media (max-width: 320px) {
    width: 18.75rem;

    span > div > h3 {
      font-size: var(--text-14);
    }
  }

  span>div>h3{
    font-size:var(--text-12);
  }
`;
