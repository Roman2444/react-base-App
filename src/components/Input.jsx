import React from "react";


const Input = () => {
    const [value, setValue] = React.useState("");

    function reverseVal() {
      const val = value.split("").reverse().join("");
      setValue(val);
    }


    return (
        <div>
            <input
                value={value}
                type="text"
                onChange={(e) => setValue(e.target.value)}
            ></input>
            <p>{value}</p>
            <button onClick={() => reverseVal()}>reverse</button>
            <hr />
            
        </div>
    );
};

export default Input;