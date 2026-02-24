import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Header from "../Component/Header.jsx";
import CartBox from "../Component/CartBox/CartBox.jsx";
import { Container } from "../styles/Cart.js";




function Cart (){

    return (
        <>
        <Header />


<Container>
<div className="CartBox">
    <CartBox />
</div>
    
</Container>
        
        </>
    )
}

export default Cart;