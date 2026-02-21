import { Component } from "react";
import styled from "styled-components";


export const SearchContainer = styled.div`
display: flex;
padding: 10px;
gap: 15%;
margin: 10vh;


.cart {
  width: 12vh;
  height: 5vh;
  display: flex;
  font-size: 100%;
  align-items: center;
  gap: 3%;
  border-radius: 10%;
  background: none;
  color: white;
  border-style: none;
  border: 0.5px solid ;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.cart:hover{
  background-color: oklch(0.646 0.222 41.116);
    color: black;}

  .singin:hover{
  background-color: oklch(0.646 0.222 41.116);
    color: black;
  }

.text-button{
  color: white;
  font-size: 2.3;
  
}
.icon{
  color: white;
}


.singin {
  width: auto;
  min-width: 120px;
  height: 5vh;
  display: flex;
  font-size: 100%;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 10%;
  background: none;
  color: white;
  border-style: none;
  border: 0.5px solid ;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;

}



`;

