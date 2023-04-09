import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #00497e;
  text-align: center;
  padding: 60px;

  h1 {
    font-size: 38px;

    @media (max-width: 550px) {
      font-size: 32px;
    }
    @media (max-width: 375px) {
      font-size: 24px;
    }
  }

  h3 {
    margin-top: 32px;
  }

  a:hover {
    color: #ff8a00;
  }
`;

export const BgAutores = styled.div``;

export const BgInfo = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 64px;
  @media (max-width: 375px) {
    height: 800px;
  }

  @media (max-width: 412px) {
    height: 900px;
  }

  @media (max-width: 700px) {
    height: 900px;
    padding:0;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;

export const InfoAutores = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #002e4f;
  padding: 32px;
  margin-left: 48px;
  margin-right: 48px;
  border-radius: 32px;

  @media (max-width: 375px) {
    width: 100%;
    margin: 0;
    margin: 0 24px
  }

  h2 {
    color: #00b2ff;
    margin-top: 12px;

    @media (max-width: 375px) {
      font-size: 22px;
    }
  }

  p {
    margin-bottom: 32px;
  }

  a {
    font-weight: bold;
    text-transform: uppercase;
  }

  a:hover {
    color: #00b2ff;
  }
`;
