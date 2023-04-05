import styled from "styled-components";


export const Container = styled.div`
    width:100%;
    background-color: #00497E;
    text-align: center;
    padding-top:50px;

`;

export const Nav = styled.div`
    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 48px;

      @media(max-width:550px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
   }

   li{
      margin-left: 32px;
      list-style-type: none;
      font-weight: bold;

      @media(max-width:550px){
         display: flex;
         justify-content: center;
         align-items: center;
         margin:0;
         margin-top:16px;
      }
   }
`;

export const TextInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p.text-information{
        width: 370px;
        font-size: 18px;
        text-align: center;
        margin: 48px 0;
        line-height: 27px;
        font-family: 'Lato', sans-serif;
    }

    strong{
        color: #FF8A00;
    }
`;