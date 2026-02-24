import styled from "styled-components";



export const CartBoxContainer = styled.div`

   width: 350px;
    background-color: rgb(15, 14, 14);
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.08);
    padding: 40px;

    box-shadow: 0 10px 30px rgba(0,0,0,0.5);

    
    



    .container-cart{
        color: white;
        justify-content: center;
        font-size: 15px;
        min-height: 60vh;
        
}

    .container-cart h3{
        font-size: 20px;
        margin-bottom: 16px;
       
    }

    .container-cart p{
        margin-bottom: 10px;
        margin-top:10px;
    }

  .line {
    width: 100%;
    height: 1px;
    background-color: rgb(68, 68, 68);
    margin: 20px 0;
}

    .input-field{
        width: 100%;
    margin-bottom: 10px;
    }

    .input-field input {

          width: 100%;
          background-color: transparent;
          outline: none;
          border-radius: 5px;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 14px;
          gap: 40px;
          
    }

    .row{
        display: flex;
        gap: 20px;
    }

    .input-field2{
        flex: 1;
    }


    .input-field2 input {
        color: rgb(133, 133, 133);
          width: 100%;
          background-color: transparent;
          outline: none;
          border-radius: 5px;
          border: 1px solid rgba(255,255,255,0.08);
    }

    button{
        display: flex;
        margin-top: 30px;
        padding: 10px;
        width: 100%;
        justify-content: center;
        gap: 6px;
        align-items: center;
        white-space: nowrap;
        color: white;
        background-color: rgb(91, 58, 255);
        border-style: none;
        border-radius: 5px;
        font-size: 16px;
        
        
        
    }
 h1{
    font-weight: normal;
    font-size: 16px;
 }


`;

