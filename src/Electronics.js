import React from "react";
import data from "./Data";

function Electronics(){

//const [state1, stateset1] = useState[0];

  function valueadd(val1,val2){
    //stateset1(val1+val2)
    return val1+val2;
  }
  
  /*const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }*/

    return (
        <>
        <tr>
      <td>Electronics</td>
      <td>{valueadd(data[0].children[0].value , data[0].children[1].value)}</td>
      <td> <input type="text"  /*value={inputValue} onChange={handleInputChange} */ /></td>
      <td><button >calculate%</button></td>
      <td><button >calculate Val</button></td>
      </tr> 
      <tr>
      <td>Phones</td>
      <td>{data[0].children[0].value}</td>
      <td> <input type="text" /*value={inputValue} onChange={handleInputChange} */ /></td>
      <td><button>calculate%</button></td>
      <td><button>calculate Val</button></td>
      <td></td>
      </tr>

      <tr>
      <td>Laptops</td>
      <td>{data[0].children[1].value}</td>
      <td> <input type="text"  /*value={inputValue} onChange={handleInputChange} */ /></td>
      <td><button>calculate%</button></td>
      <td><button>calculate Val</button></td>
      <td></td>
      </tr>
        </>
    )
}

export default Electronics