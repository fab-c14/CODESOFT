import React, { useState } from 'react';
import 'tachyons';

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
    <div className="tc pa3 bg-light-gray br4 v-mid">
      <div className="grid grid-cols-4 gap-2 ">
      <input
        type="text"
        value={input}
        readOnly
        className="pa2 f4 input-reset ba b--black-20 br4 mb2 w-40 tc"
      />
      <div>
        <button
          onClick={() => handleButtonClick('7')}
          className="ma2 pa3 f3 bg-red bn br4 grow"
        >
          7
        </button>
        <button
          onClick={() => handleButtonClick('8')}
          className="ma2 pa3 f3 bg-red bn br4 grow"
        >
          8
        </button>
        <button
          onClick={() => handleButtonClick('9')}
          className="ma2 pa3 f3 bg-red bn br4 grow"
        >
          9
        </button>
        <button
          onClick={() => handleButtonClick('/')}
          className="ma2 pa3 f3 bg-green bn br4 grow"
        >
          /
        </button>
      </div>
      <div>
        <button
          onClick={() => handleButtonClick('4')}
          className="ma2 pa3 f3 bg-red bn br4 grow"
        >
          4
        </button>
        <button
          onClick={() => handleButtonClick('5')}
          className="ma2 pa3 f3 bg-red bn br4 grow"
        >
          5
        </button>
        <button
          onClick={() => handleButtonClick('6')}
          className="ma2 pa3 f3 bg-red bn br4 grow"
        >
          6
        </button>
     
        <button
          onClick={() => handleButtonClick('*')}
          className="ma2 pa3 f3 bg-green bn br4 grow"
          >
          *
        </button>
      </div>
      <div>
        <button
          onClick={() => handleButtonClick('1')}
          className="ma2 pa3 f3 bg-red bn br4 grow"
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick('2')}
          className="ma2 pa3 f3 bg-red bn br4 grow"
        >
          2
        </button>
        <button
          onClick={() => handleButtonClick('3')}
          className="ma2 pa3 f3 bg-red bn br4 grow"
        >
          3
        </button>
        <button
          onClick={() => handleButtonClick('-')}
          className="ma2 pa3 f3 bg-green bn br4 grow"
        >
          -
        </button>
        </div>
        <div>

        
        <button
          onClick={() => handleButtonClick('0')}
          className="ma2 pa3 f3 bg-red bn br4 grow"
        >
          0
        </button>
        <button
          onClick={handleClear}
          className="ma2 pa3 f3 bg-red bn br4 grow"
        >
          C
        </button>
        <button
          onClick={handleCalculate}
          className="ma2 pa3 f3 bg-green bn br4 grow"
        >
          =
        </button>
        <button
          onClick={() => handleButtonClick('+')}
          className="ma2 pa3 f3 bg-green bn br4 grow"
        >
          +
        </button>
      </div>
      {result && <div className="pa3 f4 b result">{"Output  : "}{result}</div>}
      </div> 
    </div>
  );
};

export default Calculator;
