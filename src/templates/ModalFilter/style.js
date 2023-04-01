import styled from "styled-components";

export const StyledModalFilter = styled.section`
  display: flex;
    align-items: center;
    width: 90%;
    margin-top: 1rem;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        h2{
            font-size:var(--text-14);
            font-weight:700;
            color: var( --grey-100);
            line-height: 1.25rem;
        }

        p{
           font-size: 0.625rem;
           color: var(--grey-50);
           padding-right:1rem

           :hover{
            color: var(--grey-100);
           }
        }
    }

    @media (min-width: 768px) {

        margin-top: 0;

        div{

            h2{
                font-size:1.625rem;
                font-weight:700;
                line-height: 2.125rem;
            }
    
            p{
                display:flex;
                align-items: center;
                justify-content: center;
                width:8.5625rem;
                height:2.5rem;
                background-color:var(--color-primary);
                border: 2px solid var(--color-primary);
                color: var(--white-default);
                font-size: var(--text-14);
                font-weight:500;
                border-radius: calc(var(--border-radius)*2);
            }

        }
    }

`;
