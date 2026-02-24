import { SearchContainer } from "./SearchBar.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const navigate = useNavigate();

    return (

        <SearchContainer>
<button className="cart" onClick={()=> navigate("/cart")}><FontAwesomeIcon icon={faShoppingCart} /><p className="text-button">Cart</p></button>
<button className="singin"onClick={()=> navigate("/login")}><FontAwesomeIcon icon={faUser} /><p className="text-button">Sing In</p></button>

        </SearchContainer>
    )
}

export default SearchBar;