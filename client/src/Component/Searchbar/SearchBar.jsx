import { SearchContainer } from "./SearchBar.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {

    return (

        <SearchContainer>
<button className="cart"><FontAwesomeIcon icon={faShoppingCart} /><p className="text-button">Cart</p></button>
<button className="singin"><FontAwesomeIcon icon={faUser} /><p className="text-button">Sing In</p></button>

        </SearchContainer>
    )
}

export default SearchBar;