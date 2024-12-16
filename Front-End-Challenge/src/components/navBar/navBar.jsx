import "./navBar.css"
import logo from "../../assets/chicks-logo-large.svg"
import favicon from "../../assets/chicks_gold_favicon.jpg"
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { useMediaQuery } from '@mui/material';



export default function NavBar () {
    const buttons = [
        "CURRENCY",
        "ITEMS",
        "ACCOUNTS",
        "SERVICES",
        "SWAP",
        "SELL"
    ]

    const isMobile = useMediaQuery("(max-device-width: 520px) and (orientation: portrait)")

    return(
        <nav id="navBar">

            <img 
            id="logo" 
            src={isMobile ? favicon : logo}
            />

            <div 
            id="line"
            />

            <div id="buttons">
                {buttons.map((item, index) => 
                    <button key={index}>{item} <MdKeyboardArrowDown /></button>
                    )
                }
            </div>

            <div id="currencyCart">
                <button id="U$D">U$D <MdKeyboardArrowDown /></button>
                <button id="CART"><FaCartShopping /> CART (5)</button>
            </div>

            <button id="signIn">SIGN IN <FaUserAlt /></button>


        </nav>
    )
}