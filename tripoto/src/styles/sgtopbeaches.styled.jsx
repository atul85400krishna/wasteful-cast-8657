import styled from "styled-components"

export const WebseriesWrapper = styled.div`
  margin-top:50px;
   margin-bottom:50px;
  h1 {
    margin-bottom: 8px;
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
    line-height:15px;
   
  }
  h6{
    color:rgb(255,145,108);
    font-size:14px;
    margin-top:4px;
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
    margin-bottom:8px;
  }
  h5{
    font-size:16px;
  }
`;
