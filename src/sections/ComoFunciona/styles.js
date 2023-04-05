import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  @media (max-width: 550px) {
    width: 100%;
    padding: 0 20px;

    p {
      padding: 22px;
      text-align: justify;
      line-height: 24px;
      font-size: 14px;
      margin-top: 32px;
      background-color: #002e4f;
      margin-bottom: 73px;
      border-radius: 10px;
    }

    h2 {
      margin-top: 32px;
      margin-bottom: 48px;
      font-size: 22px;
    }
  }
`;

export const BgCards = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 68px;

  @media (max-width: 550px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    margin-bottom: 68px;
  }
`;

export const BgText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 736px;

  p {
    padding: 22px;
    text-align: justify;
    line-height: 24px;
    font-size: 14px;
    margin-top: 32px;
    background-color: #002e4f;
    margin-bottom: 73px;
    border-radius: 10px;
  }

  a {
    color: #ff8a00;
    font-weight: bold;
  }

  @media (max-width: 550px) {
    width: 100%;

    h3 {
      font-size: 18px;
      line-height: 27px;
      width: 100%;
    }

    span {
      color: #00b2ff;
    }
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
