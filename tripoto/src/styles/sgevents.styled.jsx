import styled from "styled-components"

export const SGEventWrapper = styled.div`
  h1 {
    margin-bottom: 4px;
    font-size: 28px;
    font-weight: 700;
    line-height: 30.8px;
  }
  text {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const EventImageWrapper = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 15px;
  img {
    width: 100%;
    object-fit:cover;
    object-position: top;
  }
`;
