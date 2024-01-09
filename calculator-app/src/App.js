import React, { useState } from 'react';
import 'tachyons/css/tachyons.min.css';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        readOnly
        className="pa2 input-reset ba b--black-20 br4 mb2"
      />
      <div className="flex justify-between">
        <button
          onClick={() => handleButtonClick('7')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          7
        </button>
        <button
          onClick={() => handleButtonClick('8')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          8
        </button>
        <button
          onClick={() => handleButtonClick('9')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          9
        </button>
        <button
          onClick={() => handleButtonClick('/')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          /
        </button>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => handleButtonClick('4')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          4
        </button>
        <button
          onClick={() => handleButtonClick('5')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          5
        </button>
        <button
          onClick={() => handleButtonClick('6')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          6
        </button>
        <button
          onClick={() => handleButtonClick('*')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          *
        </button>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => handleButtonClick('1')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick('2')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          2
        </button>
        <button
          onClick={() => handleButtonClick('3')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          3
        </button>
        <button
          onClick={() => handleButtonClick('-')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          -
        </button>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => handleButtonClick('0')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          0
        </button>
        <button
          onClick={handleClear}
          className="pa2 bg-light-gray bn br4 grow"
        >
          C
        </button>
        <button
          onClick={handleCalculate}
          className="pa2 bg-light-gray bn br4 grow"
        >
          =
        </button>
        <button
          onClick={() => handleButtonClick('+')}
          className="pa2 bg-light-gray bn br4 grow"
        >
          +
        </button>
      </div>
      {result && <div className="pa3 result">{result}</div>}
    </div>
  );
};

const App = () => {
  return (
    <div className="App tc">
  {/* <ul class="background">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul> */}
      <div className="pa3 bg-light-gray br4">
        <Calculator />
      </div>
    </div>
  );
};

export default App;
