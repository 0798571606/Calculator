import { useState } from 'react';
import './app.css';

export default function Calculator() {
  const [expression, setExpression] = useState([]);
  const [isResult, setIsResult] = useState(false);

  function handleClick(value) {
    const lastItem = expression[expression.length - 1];
    if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastItem))
      return;

    if (isResult) {
      setExpression([value]);
      setIsResult(false);
      setExpression([...expression, value]);
    } else setExpression([...expression, value]);
  }

  function handleResult() {
    const result = expression
      .join('')
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, cur, index, array) => {
        switch (cur) {
          case '+':
            return (acc += array[index + 1]);
          case '-':
            return (acc -= array[index + 1]);
          case '*':
            return (acc *= array[index + 1]);
          case '/':
            return (acc /= array[index + 1]);
          default:
            return acc;
        }
      });

    // if (isNaN(result)) {
    //   setExpression([...expression, 'Cannot']);
    // } else {
    setExpression([result]);
    setIsResult(true);
    // }
  }

  return (
    <div className='main'>
      <div className='display'>
        <button className='logo'>
          <i className='fa-solid fa-calculator'></i>
        </button>

        <h2 id='result'>{expression}</h2>
      </div>
      <div className='buttons'>
        <button onClick={() => setExpression([])} id='clear'>
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
        <button onClick={() => handleClick(7)} id='normal-btn'>
          7
        </button>
        <button onClick={() => handleClick(8)} id='normal-btn'>
          8
        </button>
        <button onClick={() => handleClick(9)} id='normal-btn'>
          9
        </button>
        <button onClick={() => handleClick('-')} id='normal-btn'>
          -
        </button>
      </div>
      <div className='buttons'>
        <button onClick={() => handleClick(4)} id='normal-btn'>
          4
        </button>
        <button onClick={() => handleClick(5)} id='normal-btn'>
          5
        </button>
        <button onClick={() => handleClick(6)} id='normal-btn'>
          6
        </button>
        <button onClick={() => handleClick('+')} id='normal-btn'>
          +
        </button>
      </div>
      <div className='buttons'>
        <button onClick={() => handleClick(1)} id='normal-btn'>
          1
        </button>
        <button onClick={() => handleClick(2)} id='normal-btn'>
          2
        </button>
        <button onClick={() => handleClick(3)} id='normal-btn'>
          3
        </button>
        <button onClick={() => handleClick('.')} id='normal-btn'>
          .
        </button>
      </div>
      <div className='buttons'>
        <button onClick={() => handleClick(0)} id='normal-btn'>
          0
        </button>
        <button onClick={() => handleClick(0)} id='normal-btn'>
          00
        </button>
        <button onClick={() => handleResult('=')} id='equalTo'>
          =
        </button>
      </div>
    </div>
  );
}
