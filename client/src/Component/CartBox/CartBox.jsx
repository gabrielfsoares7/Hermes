import { CartBoxContainer } from "./CartBox.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";




function CartBox(){

return(

    <CartBoxContainer>

        <div className="container-cart">
            <h3>Resumo do pedido</h3>
            <p>Alugados</p>
            <p>Comprados</p>

            <div className="line"></div>

            <form>
                <h3>Total</h3>
                <div className="input-field">
                    <p>Digite seu cpf</p>
                    <input
                        type="text"
                        placeholder="000.000.000-00" onChange={(e) => setcpf(e.target.value)} />
                </div>

                <div className="input-field">
                    <p>Card Number</p>
                    <input
                        type="text"
                        placeholder="4532 1488 0343 6467" onChange={(e) => setcarnumber(e.target.value)} />

                    <div className="row">
                        <div className="input-field2">
                            <p>Expira</p>
                            <input
                                type="date"
                                placeholder="MM/YY" onChange={(e) => setcarnumber(e.target.value)} />
                        </div>

                        <div className="input-field2">
                            <p>CVV</p>
                            <input
                                type="number"
                                placeholder="123" onChange={(e) => setCVV(e.target.value)} />
                        </div>


                    </div>
                    <button><FontAwesomeIcon icon={faCreditCard} /><h1>Complete sua compra</h1></button>

                </div>


            </form>

</div>
    </CartBoxContainer>
)}

export default CartBox;