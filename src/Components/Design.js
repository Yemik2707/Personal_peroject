import React from 'react'



const Design = (props) => {

    return (
       <div className = 'design'>
        <select className = 'dropdown1'>
        <option selected value="Choose Color">Choose Color</option>
        <option value="Pink">Pink</option>
        <option value="Blue">Blue</option>
        <option value="Orange">Orange</option>
      </select>

      <select className = 'dropdown2'>
      <option selected value="Choose Shape">Choose Shape</option>
      <option value="Square">Square</option>
      <option value="Circle">Circle</option>
      <option value="Semi-circle">Semi-circle</option>
    </select>
      <select className = 'dropdown3'>
      <option selected value="Choose Print">Choose Print</option>
      <option value="Square">Aztec</option>
      <option value="Circle">Polka dots </option>
      <option value="Semi-circle">Leaf</option>
    </select>
    </div>
    )
}

export default Design