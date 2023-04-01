import styled from "styled-components";

export const StyledCart = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    border-radius: 0.3125rem;
    background-color: var(--grey-0);

    h2 {
      display: flex;
      align-items: center;
      height: 3.75rem;
      background-color: var(--color-primary);
      padding-left: 1rem;
      font-size: var(--text-default);
      font-weight: 700;
      color: var(--white-default);
      line-height: 1.5rem;
      border-radius: 0.3125rem 0.3125rem 0 0;
    }

    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      height: 9.875rem;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: var(--text-18);
        font-weight: 700;
        line-height: 1.5rem;
      }

      p {
        font-size: var(--text-14);
        font-weight: 400;
        color: var(--grey-50);
        line-height: 1.5rem;
      }
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0 2rem 0;
      border-bottom: 2px solid var(--grey-20);
    }
  }

  @media (min-width: 768px) {
    width: 22.6875rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    div>ul {
    gap:0.5rem;
    padding: 0 0 1rem 0;
    }
  }
`;
