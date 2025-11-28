import { LogoContainer } from "./Logo.js";
import LogoImg from "../../img/Logo.png";

function Logo() {
    return (
        <LogoContainer>
            <img src={LogoImg} alt="Logo" />

        </LogoContainer>
    );
}

export default Logo;
