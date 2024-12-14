import "./filters.css"
import StyledSelect from "../styled-select/styledSelect"
import { MdAttachMoney } from "react-icons/md";
import { BiSolidJoystick } from "react-icons/bi";
import { GiFeather } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {games, priceRanges, itemTypes} from "../../data/data,"
export default function Filters (){
    console.log(typeof games)
    return(
        <div id="filtersSearch">
            <h1 id="title">
                Condimentum consectetur
            </h1>

            

            <fieldset id="filters">
                <StyledSelect 
                    label="Select a game"
                    icon={<BiSolidJoystick 
                        style={{
                            color: "orange",
                            alignSelf: "center",
                            fontSize: "4vh"
                        }}
                        class="hvr-grow"
                    /> }
                    width="10vw"
                    data={games}
                />

                <input 
                    type="search"
                    id="searchBar"
                    placeholder="Search..."
                />

                <StyledSelect 
                    label="Price"
                    icon={<MdAttachMoney 
                        style={{
                            color: "greenyellow",
                            alignSelf: "center",
                            fontSize: "4vh"
                        }}
                        class="hvr-grow"
                    /> }
                    width="10vw"
                    data={priceRanges}
                />
                    
                <StyledSelect 
                    label="Item type"
                    icon={<GiFeather 
                        style={{
                            color: "greenyellow",
                            alignSelf: "center",
                            fontSize: "4vh"
                        }}
                        class="hvr-grow"
                    /> }
                    width="12vw"
                    data={itemTypes}
                />
            </fieldset>
        </div>
    )
}