import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 8.6875rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--grey-0);

  div {
    height: 8.6875rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    background-color: var(--grey-0);

    img {
      width: 9.9375rem;
      height: 2.3125rem;
      margin-top: 1rem;
    }

    form {
      width: 90%;
      height: var(--input-height);
      display: flex;
      align-items: center;
      background-color: var(--white-default);
      border-radius: calc(var(--border-radius) * 2);
      border: 2px solid var(--grey-20);
      margin-bottom: 1rem;

      :hover {
        border: 2px solid var(--black--fonts);
      }

      input {
        width: 70%;
        height: 100%;
        font-size: var(--text-default);
        font-weight: 400;
        line-height: 1.21rem;
        color: var(--grey-20);
        border: none;
        outline: none;
        padding-left: 0.5rem;

        :focus{
          color:var(--grey-50);
        }
      }

      button {
        width: 6.6875rem;
        height: 2.5rem;
        padding: 0 1.25rem 0 1.25rem;
        background-color: var(--color-primary);
        border-radius: calc(var(--border-radius) * 2);
        border: 2px solid var(--color-primary);
        font-size: var(--text-14);
        color: var(--white-default);
        font-weight: 500;
        line-height: 1.0625rem;
        margin-right: 0.5rem;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 5rem;
    justify-content: center;

    div {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 5rem;
      width: 90%;

      img {
        height: 2.3125rem;
        margin-top: 0;
      }

      form {
        width: 22.8125rem;
        height: 3.75rem;
        margin-bottom: 0;
      }
    }
  }
`;
