import styled from "styled-components";


export const ContainerCard = styled.div`

display: grid;
  gap: 5%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 4%;
  background-color: #000000f3;


  


img {
    border-radius: 10px;
    width: 100%;
    box-shadow: 0 10px 25px rgba(28, 27, 27, 0.3);
    cursor: pointer;
    margin: 2%;
    
    
}

h1 {
    margin-top: 4%;
    text-transform: capitalize;
    color: #ffffff;
    font-size: 100%;
    padding: 0%;
}

.price-comprar {
    margin-top: 2%;
    color: #fb795c;
    font-size: 75%;
    
    
}

.price-alugar {
    margin-top: 5%;
    font-size: 75%;
    color: #7b67ff;
    
    
}

.info{
    margin-top: 1%;
    display: flex;
    gap: 5%;
flex-direction: column;}


.averange{
    color: white;
}

.averange icon{
    color: white;
}

.Texts{
    margin: 5%;
}

    
`;
