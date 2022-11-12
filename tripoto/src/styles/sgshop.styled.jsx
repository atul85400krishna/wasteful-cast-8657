import styled from "styled-components"

export const SGShopWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  h1{
    font-weight:700;
    font-size:28px;
  }
  text {
    font-size: 16px;
    letter-spacing: 0.7px;
    line-height: 23px;
  }
  div {
    font-family: sans-serif;
    margin-bottom: 18px;
  }
`;
export const SGShopCard = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
  
  }
`;

export const SGShopCardIndividual = styled.div`
  width: 355px;
  margin-right: 15px;
  cursor:pointer;
  h3{
    font-size:18px;
    font-weight:700;
  }
  img {
    width: 100%;
    height: 60%;
    border-radius: 5px;
  }
  @media (max-width: 1000px) {

    width: 100%;
    height: auto;
    img {
      height: 70%;
    }
  }
`;
