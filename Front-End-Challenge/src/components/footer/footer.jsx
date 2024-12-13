import { PiCurrencyBtcFill } from "react-icons/pi";
import { SiEthereum } from "react-icons/si";
import { SiLitecoin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import {
    amex,
    visa,
    master,
    skrill,
    CGlogo
} from "../../assets/index"
import "./footer.css"

export default function Footer () {
    return(
        <footer id="footer">
            <section id="section1">
                <div id="payMethods">
                    <div id="creditCards">
                        <img 
                        class="hvr-grow"
                        src={visa} 
                        title="Visa"
                        />

                        <img
                        class="hvr-grow" 
                        src={master} 
                        title="MasterCard"
                        />

                        <img 
                        class="hvr-grow"
                        src={amex} 
                        title="American Express"
                        />

                        <img 
                        class="hvr-grow"
                        src={skrill} 
                        title="Skrill"
                        />
                    </div>

                    <div id="currencies">
                        <PiCurrencyBtcFill 
                        class="hvr-grow"
                        style={{
                            color: "greenyellow"
                        }}
                        title="Bitcoin (BTC)"
                        />

                        <SiEthereum
                        class="hvr-grow"
                        style={{
                            color: "black"
                        }}
                        title="Ethereum (ETH)"
                        />

                        <PiCurrencyBtcFill 

                        class="hvr-grow"
                        style={{
                            color: "orange"
                        }}
                        title="Bitcoin (BTC)"
                        />

                        <SiLitecoin 
                        class="hvr-grow"
                        style={{
                            color: "gray"
                        }}
                        title="Litecoin (LTC)"
                        />
                    </div>

                    <p id="text">
                        and 50+ more
                    </p>
                </div>
            </section>

            <section id="section2">
                <div id="social">
                    <FaFacebook 
                        class="hvr-grow"
                        style={{
                        backgroundColor: "white",
                        borderRadius: "50px",
                        color: "blue",
                        cursor: "pointer"
                        }}
                        title="Facebook"
                     />

                    <FaInstagram 
                        class="hvr-grow"
                        style={{
                        color: "fuchsia",
                        cursor: "pointer"
                        }} 
                        title="Folow us on @ChicksGold"
                    />

                    <BsTwitterX 
                        class="hvr-grow"
                        style={{
                        color: "black",
                        cursor: "pointer"
                        }} 
                        title="Keep up to date with us on X"
                    />

                    <BsDiscord 
                        class="hvr-grow"
                        style={{
                        cursor: "pointer"
                        }}
                        title="Join our Discord Server"
                    />
                </div>

                <div id="siteLinks">
                    <div id="logoEmail">
                        <img src={CGlogo} />
                        <a>support@chicksgold.com</a>
                    </div>

                    <ul id="chicksGold"> ChicksGold
                        <li><a>Games</a></li>
                        <li><a>About us</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Sitemap</a></li>
                    </ul>
                    
                    <ul id="support"> Support
                        <li><a>Contact us</a></li>
                        <li><a>FAQ</a></li>
                    </ul>

                    <ul id="legal"> Legal
                        <li><a>Privacy Policy</a></li>
                        <li><a>Terms of Service</a></li>
                        <li><a>Copyright Policy</a></li>
                    </ul>

                    <div id="trustpilot">
                        <MdStars 
                        style={{
                            borderRadius: "50px",
                            color: "greenyellow",
                            fontSize: "4vh"
                        }}
                        />
                        <MdStars 
                        style={{
                            borderRadius: "50px",
                            color: "greenyellow",
                            fontSize: "4vh"
                        }}
                        />
                        <MdStars 
                        style={{
                            borderRadius: "50px",
                            color: "greenyellow",
                            fontSize: "4vh"
                        }}
                        />
                        <MdStars 
                        style={{
                            borderRadius: "50px",
                            color: "greenyellow",
                            fontSize: "4vh"
                        }}
                        />
                        <MdStars 
                        style={{
                            borderRadius: "50px",
                            color: "greenyellow",
                            fontSize: "4vh"
                        }}
                        />

                        <p>TrustPilot Reviews</p>
                    </div> 

                </div>

                <p 
                id="allRights">
                    ©2017 - 2020 Chicksgold.com. All Rights Reserved
                </p>
            </section>
        </footer>
    )
}