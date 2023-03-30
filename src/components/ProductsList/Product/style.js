import styled from "styled-components";

export const StyledProduct = styled.li`
  display: flex;
  flex-direction: column;
  height: var(--card-height);
  gap: 1rem;
  background-color: var(--white-default);
  border-radius: 0.3125rem;
  border: 2px solid var(--grey-20);

  div {
    display: flex;
    width: 15.625rem;
    height: 9.375rem;
    background: var(--grey-0);
    align-items: center;
    justify-content: center;
    object-fit: cover;

    img {
      display: flex;
      height: 11.0625rem;
      object-fit: cover;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0.5rem 1rem;

    h3 {
      font-size: var(--text-18);
      line-height: 1.5rem;
      font-weight: 700;
      color: var(--black--fonts);
    }

    p {
      font-size: var(--text-12);
      line-height: 1rem;
      color: var(--grey-50);
      font-weight: 400;
    }

    small {
      font-size: var(--text-14);
      font-weight: 600;
      line-height: 1.5rem;
      color: var(--color-primary);
    }

    button {
      width: var(--button-width);
      height: var(--button-height);
      border-radius: calc(var(--border-radius) * 2);
      background-color: var(--color-primary);
      border: 2px solid var(--color-primary);
      padding: 0 1.25rem;
      font-size: var(--text-14);
      font-weight: 600;
      color: var(--white-default);
    }
  }

  @media (min-width: 800px) {
    div{
      width: 18.75rem;
    
    }
  }

  @media (min-width: 900px){
    div{
      width: 9.375rem;
      img{
        height: 9.375rem;
      }
    }
  }

  @media (min-width: 1000px){
    div{
      width: 11.25rem;
      img{
        height: 10rem;
      }
    }
  }

  @media (min-width: 1050px){
    div{
      width: 11.875rem;
      img{
        height: 10rem;
      }
    }
  }

  @media (min-width: 1100px){
    div{
      width: 12.5rem;
      img{
        height: 10rem;
      }
    }

    @media (min-width: 1300px){
      div{
        width: 15.625rem;
        img{
          height: 10rem;
        }
      }

      @media (min-width: 1400px){
        div{
          width: 17.1875rem;
          img{
            height: 10rem;
          }
        }

        @media (min-width: 1500px){
          div{
            width: 18.75rem;
          }
  }

`;
