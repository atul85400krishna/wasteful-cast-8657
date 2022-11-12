import styled from "styled-components"
export const BeachWrapper = styled.div`
  margin: auto;
  
  width: 85%;
  font-family: sans-serif;
  h1{
    font-size:29px;
    font-weight:700;
    margin-bottom:8px;
  }
  text {
    line-height: 20px;
    letter-spacing: 0.6px;
  }
  @media (max-width: 790px) {
    width: 95%;
  }
`;

export const BeachGridWrapper = styled.div`
  display: grid;
  gap: 10px;
  
  grid-template-columns: repeat(3, 1fr);
  img {
    width: 100%;
    height: 220px;
    border-radius: 8px;
  }

  h3 {
    font-weight: 700;
  }

  span {
    color: black;
    font-weight: 500;
    margin-right: 4px;
  }

  h5 {
    color: rgb(56, 159, 221);
    margin-left: 4px;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 500;
  }
 

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    img {
      width: 100%;
      height: 25rem;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export const VlogWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  margin-bottom:40px;
  div {
    width: 23%;
  }
  img {
    width: 100%;
    height: 11rem;
    border-radius: 5px;
    object-fit: cover;
    object-position: center;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  span {
    color: black;
    font-weight: 500;
    margin-right: 4px;
  }

  h5 {
    color: rgb(56, 159, 221);
    margin-left: 4px;
    margin-top: -5px;
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    div {
      width: 100%;
    }
    img {
      height: 25rem;
      object-fit: cover;
      object-position: center;
    }
  }
`;
