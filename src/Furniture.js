import React from "react";
import data from "./Data";

function Furniture(){

    function valueadd1(val1,val2){
        return val1+val2;
        
      }
 /*const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }*/

    return (
        <>
        <tr>
      <td>Furniture</td>
      <td>{valueadd1(data[1].children[0].value , data[1].children[1].value)}</td>
      <td> <input type="text"  /*value={inputValue} onChange={handleInputChange} */ /></td>
      <td><button>calculate%</button></td>
      <td><button>calculate Val</button></td>
      <td></td>
      </tr>

      <tr>
      <td> Tables</td>
      <td>{data[1].children[0].value}</td>
      <td> <input type="text"  /*value={inputValue} onChange={handleInputChange} */ /></td>
      <td><button>calculate%</button></td>
      <td><button>calculate Val</button></td>
      <td></td>
      </tr>

      <tr>
      <td> Chairs</td>
      <td>{data[1].children[1].value}</td>
      <td> <input type="text"  /*value={inputValue} onChange={handleInputChange} */ /></td>
      <td><button>calculate%</button></td>
      <td><button>calculate Val</button></td>
      <td></td>
      </tr>
        </>
    )
}

export default Furniture