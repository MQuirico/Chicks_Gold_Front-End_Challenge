
export default function StyledSelect ({icon, label, data = [], width = "10vw", height = "auto"}){
    return (
        <fieldset 
        id="styledSel"
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: "none",
            ailgnItems: "center",
            width: width,
            height: height,
            fontFamily: "system-ui, -apple-system, sans-serif"
        }}
        >
            <legend
            style={{
                fontSize: "1.5vh",
            }}
                >
                {label}
            </legend>

            {icon}

            <select 
            id="menu"
            style={{
                width: "80%",
                borderRadius: "9px",
                border: "none",
                outline: "none",
                boxShadow: "none",
                fontSize: "1.7vh",
                color: "white"
            }}
            >
                {data.map((item, index) => 
                    <option 
                    key={index} 
                    value={item.value}
                    >{item.label}

                    </option>)}
            </select>
        </fieldset>
    )
}