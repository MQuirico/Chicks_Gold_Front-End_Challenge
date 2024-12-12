import "./navBar.css"
import logo from "../../assets/chicks-logo-large.svg"
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";


export default function NavBar () {
    const buttons = [
        "CURRENCY",
        "ITEMS",
        "ACCOUNTS",
        "SERVICES",
        "SWAP",
        "SELL"
    ]

    return(
        <nav id="navBar">

            <img 
            id="logo" 
            src={logo}
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