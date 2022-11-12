import styled from "styled-components"

export const SGVideoWrapper = styled.div`
  display: flex;
  cursor:pointer;
  margin-top: 60px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SGIndividualVideoWrapper = styled.div`
  width: 33.4%;

  img {
    width: 100%;
    cursor:pointer;
  }
  @media (max-width: 1000px) {
    width: 90%;

    img {
      width: 100%;
    }
  }
`;
