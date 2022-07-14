import { useState } from "react";

// https://www.w3schools.com/react/react_forms.asp

const Exercise2 = (props) => {
  const [color, setColor] = useState("red");

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      2
      <form>
        <label>
          Enter your color:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <br />
        <p>Too lazy to type? Select a color here</p>
        <select value={color} onChange={handleChange}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
          <option value="black">Black</option>
        </select>
      </form>
      <div className="box" style={{ background: color }}></div>
    </div>
  );
};

export default Exercise2;
