import { useState } from "react";

const Exercise1 = (props) => {
  const [counter, setCounter] = useState(props.defaultWhatever);

  const [flag, setFlag] = useState(false);

  var ethan = 0;

  const incrementCounter = () => {
    // setCounter(counter + 1);
    ethan += 1;
    console.log(ethan);
  };

  // Same as above
  // function incrementCounter() {
  //   setCounter(counter + 1);
  // }

  const whatever = () => {
    setFlag(!flag);
  };

  const tasks = [
    "clean up for Happy",
    "walk Happy",
    "feed Happy",
    "kiss Happy",
  ];

  return (
    <div>
      <p>{counter}</p>
      <p>{flag.toString()}</p>
      <button onClick={(e) => incrementCounter()}>Click me to Increment</button>
      <button onClick={whatever}>Toggle the Flag</button>

      <ul>
        {tasks.map((whatever, index) => {
          return <li key={index}>{whatever}</li>;
        })}
      </ul>
    </div>
  );
};

const initialValue = 99;

export { Exercise1 };
export default initialValue;
