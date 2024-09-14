/* eslint-disable no-eval */
import { useState } from 'react';
import './app.css';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  function handleClick(value) {
    setInput(input + value);
  }

  function calculate() {
    setResult(eval(input));
    setInput('');
  }

  function clear() {
    setInput('');
    setResult('');
  }

  return (
    <div className='main'>
      <div className='display'>
        <button className='logo'>
          <i className='fa-solid fa-calculator'></i>
        </button>

        <h2 id='result'>
          {input}
          {result}
        </h2>
      </div>
      <div className='buttons'>
        <button onClick={clear} id='clear'>
          C
        </button>
        <button onClick={() => handleClick('%')} id='normal-btn'>
          %
        </button>
        <button onClick={() => handleClick('/')} id='normal-btn'>
          /
        </button>
        <button onClick={() => handleClick('*')} id='normal-btn'>
          *
        </button>
      </div>
      <div className='buttons'>
        <button onClick={() => handleClick('7')} id='normal-btn'>
          7
        </button>
        <button onClick={() => handleClick('8')} id='normal-btn'>
          8
        </button>
        <button onClick={() => handleClick('9')} id='normal-btn'>
          9
        </button>
        <button onClick={() => handleClick('-')} id='normal-btn'>
          -
        </button>
      </div>
      <div className='buttons'>
        <button onClick={() => handleClick('4')} id='normal-btn'>
          4
        </button>
        <button onClick={() => handleClick('5')} id='normal-btn'>
          5
        </button>
        <button onClick={() => handleClick('6')} id='normal-btn'>
          6
        </button>
        <button onClick={() => handleClick('+')} id='normal-btn'>
          +
        </button>
      </div>
      <div className='buttons'>
        <button onClick={() => handleClick('1')} id='normal-btn'>
          1
        </button>
        <button onClick={() => handleClick('2')} id='normal-btn'>
          2
        </button>
        <button onClick={() => handleClick('3')} id='normal-btn'>
          3
        </button>
        <button onClick={() => handleClick('.')} id='normal-btn'>
          .
        </button>
      </div>
      <div className='buttons'>
        <button onClick={() => handleClick('0')} id='normal-btn'>
          0
        </button>
        <button onClick={() => handleClick(+'00')} id='normal-btn'>
          00
        </button>
        <button onClick={() => calculate('=')} id='equalTo'>
          =
        </button>
      </div>
    </div>
  );
}
