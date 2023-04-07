import styled from 'styled-components';


export const Container = styled.header`
   width: 100%;
   height: 250px;
   text-align: center;
   margin-top:100px;

   footer{
      position: fixed;
      bottom: 0;
      right: 0;
      padding: 32px;
      cursor: pointer;
      

      h4{
         font-size: 12px;
      }
   }

   @media (max-width: 550px){
      width: 100%;
   }
`;

export const Nav = styled.nav`


   ul{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 48px;
      animation-name: slide 2s;

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

   a{
      font-weight: bold;
   }

   a:hover{
      color: #FF8A00;

   }
`;

