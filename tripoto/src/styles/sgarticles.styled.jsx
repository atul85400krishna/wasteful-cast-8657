import styled from "styled-components"

export const WebseriesWrapper = styled.div`
  margin-top:50px;
   margin-bottom:50px;
   cursor: pointer;
  h1 {
    margin-bottom: 4px;
    font-size: 28px;
    font-weight: 700;
    line-height: 30.8px;
  }
  text {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }

  span {
    color: black;
    margin-right: 2px;
  }

  h5 {
    color: rgb(56, 159, 221);
  }
`;

export const WeseriesCard = styled.div`
   padding:0px 5px;
   margin-top:10px;
 
 
  img {
    align-items:center;
    height:210px;
    object-fit: cover;
    object-position:center;
    width:100%;
    border-radius: 4px;
  
  }
  h3{
    font-weight:700;

  }
  h5{
    font-size:16px;
  }
`;
