import React from "react";
import Logo from "../Component/Logo/Logo.jsx";
import Menu from "../Component/Menu/Menu.jsx";
import SearchBar from "../Component/Searchbar/SearchBar.jsx";
import { Container } from "./Header.js";



function Header() {
  return (
    
    <Container>
      <Logo />;
      <Menu />
      <SearchBar />
    </Container>
  ); 
}

export default Header;