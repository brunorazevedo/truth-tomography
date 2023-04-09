import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #00497e;
  text-align: center;
  padding:48px;

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

export const BgAutores = styled.div`

  padding: 48px;
  margin-top: 48px;

  @media (max-width: 375px) {
    width: 100%;
    padding: 0;
    padding: 28px;
  }

  
`;

export const BgInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 412px) {
    font-size:14px;
  }

  @media (max-width: 550px) {
    font-size:14px;
  }

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 16px;
  }
`;

export const InfoAutores = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #002e4f;
  padding: 32px;
  border-radius: 32px;
  margin-left: 48px;
  margin-right:48px;
  margin-bottom: 48px;
  text-align: center;

  @media (max-width: 375px) {
        margin-left: 0px;
        margin-right:0px;
        width: 100%;
        margin-top: 0;
        padding: 0;
        padding: 32px;
    }


  h2 {
    color: #00b2ff;
}

h2.autor {
      width: 250px;
      font-size:18px;
}


    
    @media (max-width: 412px) {
        margin-left: 0px;
        margin-right:0px;
    }

    @media (max-width: 550px) {
        margin-left: 0px;
    margin-right:0px;
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

export const SectionTermo = styled.div`
    text-align: center;
    margin-top: 64px;
    
    h2{
        font-size: 32px;
        margin-bottom: 8px;
    }
    p{
        font-size:14px;
    }
`;