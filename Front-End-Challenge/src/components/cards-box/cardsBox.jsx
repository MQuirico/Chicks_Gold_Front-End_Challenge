import "./cardsBox.css"
import { GiSettingsKnobs } from "react-icons/gi";
import StyledSelect from "../styled-select/styledSelect";
import CardsArea from "../cards-area/cardsArea";
import { options } from "../../data/data,";
export default function CardsBox (){
    
    return(
        <main id="cardsBox">
            <div id="topArea">
                <p
                id="perPageAndTotal"
                >
                Showing 20 of 135
                </p>

                <StyledSelect 
                    label="Sort by:"
                    icon={<GiSettingsKnobs 
                        style={{
                            color: "lightblue",
                            alignSelf: "center",
                            fontSize: "4vh"
                        }} 
                        class="hvr-grow"
                        />}
                    data={options}  
                />
                
            </div>

            <CardsArea/>
        </main>
    )
}