import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const BasicCalculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [cacheValue, setCacheValue] = useState('0');

    const handleClearClick = () => {
        setDisplayValue('0');
        setCacheValue('0');
    };

    const handleDigitLimit = (value, callback) => {
        if (value.length <= 24) {
            callback(value);
        } else {
            const lastNumber = cacheValue.split(/[-+*/=]/).pop();
            setDisplayValue('Digit Limit Met');
            setTimeout(() => {
                callback(lastNumber);
            }, 500);
        }
    };

    const handleNumberClick = (value) => {
        const lastNumber = cacheValue.split(/[-+*/=]/).pop();
        if (cacheValue.includes('=')) {
            setDisplayValue(value);
            setCacheValue(value);
        } else if (lastNumber.length < 24) {
            if (displayValue === '0') {
                setDisplayValue(value);
                setCacheValue(value);
            } else if (isNaN(displayValue)) {
                setDisplayValue(value);
                setCacheValue((prevValue) => prevValue + value);
            } else {
                setDisplayValue((prevValue) => prevValue + value);
                setCacheValue((prevValue) => prevValue + value);
            }
        } else {
            handleDigitLimit(displayValue + value, (newValue) => {
                setDisplayValue(newValue);
                setCacheValue((prevValue) => prevValue);
            });
        }
    };

    // Helper function to count occurrences of a substring within a string
    const countOccurrences = (string, substring) => {
        const escapedSubstring = substring.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(escapedSubstring, 'g');
        const matches = string.match(regex);
        return matches ? matches.length : 0;
      };

      const handleParenthesisClick = () => {
        if (!cacheValue.includes('(')) {
            // If cacheValue has no open parenthesis, add an open parenthesis
            if (cacheValue === '0') {
                setCacheValue('(');
                setDisplayValue('(');
            } else {
                setCacheValue((prevValue) => prevValue + '(');
                setDisplayValue((prevValue) => prevValue + '(');
            }
        } else if (countOccurrences(cacheValue, '(') > countOccurrences(cacheValue, ')')) {
            // If cacheValue has an open parenthesis without a closing one, add a closing parenthesis
            setCacheValue((prevValue) => prevValue + ')');
            setDisplayValue((prevValue) => prevValue + ')');
        } else {
            // If cacheValue has equal number of open and close parenthesis, add another open parenthesis
            setCacheValue((prevValue) => prevValue + '(');
            setDisplayValue((prevValue) => prevValue + '(');
        }
    };
    

    const handleOperatorClick = (operator) => {
        // Check if the displayValue is the result of a previous evaluation
        if (!cacheValue.includes('=')) {
            if (operator === '-' && displayValue === '0') {
                setDisplayValue('-');
                setCacheValue('-');
            } else {
                const lastCharacter = displayValue.slice(-1);
                if (!isNaN(lastCharacter) || lastCharacter === '.') {
                    // Concatenate the operator to the cacheValue
                    setCacheValue((prevValue) => prevValue + operator);
                    setDisplayValue(operator);
                } else if ((lastCharacter !== operator) && (lastCharacter !== '(') && (lastCharacter !== ')')) {
                    // Replace the last operator in the cacheValue
                    setCacheValue((prevValue) => prevValue.slice(0, -1) + operator);
                    setDisplayValue((prevValue) => prevValue.slice(0, -1) + operator);
                } else {
                    setCacheValue((prevValue) => prevValue + operator);
                    setDisplayValue((prevValue) => prevValue + operator);
                }
            }
        } else {
            // Split the cacheValue based on '=' and take the value after '='
            const resultValue = cacheValue.split('=')[1] || '';
            setCacheValue(resultValue + operator);
            setDisplayValue(operator);
        }
    };
    


    const handleDecimalClick = () => {
        const lastNumber = cacheValue.split(/[-+*/]/).pop();
        if (isNaN(parseFloat(lastNumber))) {
            setDisplayValue((prevValue) => prevValue + '0.');
            setCacheValue((prevValue) => prevValue + '0.');
        } else if (!lastNumber.includes('.') && !cacheValue.includes('=')) {
            setDisplayValue((prevValue) => prevValue + '.');
            setCacheValue((prevValue) => prevValue + '.');
        } else if (cacheValue.includes('=')) {
            setDisplayValue('0.');
            setCacheValue('0.');
        }
    };

    const handleDeleteClick = () => {
        if (cacheValue.includes('=')) {
            return;
        }
    
        setCacheValue((prevValue) => {
            const newValue = prevValue.slice(0, -1);
            return newValue === '' ? '0' : newValue;
        });
    
        setDisplayValue((prevValue) => {
            const newValue = prevValue.slice(0, -1);
            return newValue === '' ? '0' : newValue;
        });
    };
    

    const handleEqualsClick = () => {
        try {
          const lastCharacter = cacheValue.slice(-1);
          const expression = fixExpression(cacheValue);
          const result = evaluate(expression);
      
          if (isNaN(result)) {
            setDisplayValue('Invalid Expression');
          } else {
            if (!isFinite(result)) {
              setDisplayValue('Division by Zero');
            } else {
              setDisplayValue(result.toString());
            }
            setCacheValue((prevValue) => prevValue + '=' + result.toString());
          }
        } catch (error) {
          setDisplayValue('Error');
        }
      };
      
      // Helper function to fix expression for automatic fixes
      const fixExpression = (expression) => {
        const fixedExpression = expression
          .replace(/([\d)])\(/g, '$1*(')
          .replace(/([*/+-.])-(?!\d)/g, '$10-')
          .replace(/([*/+-.])-([\d(])/g, '$1-$2');
        return fixedExpression;
      };
      



    return (
        <div id="basic-body" className="">
            <div className="container my-4 d-flex flex-column justify-content-center align-items-center">
                <div className='container mt-3 d-flex flex-column justify-content-center align-items-center'>
                    <div id="display" className='basic-display border rounded-3'>
                        <div className='text-end text-warning d-block formulaScreen'>{cacheValue}</div>
                        <div className='text-end fs-4 p-1'>{displayValue}</div>
                    </div>
                </div>
            </div>
            <div className="container calculator border rounded-3">
                <div className="my-1">
                    <button className="s-key btn btn-warning mx-1  fs-4" id="clear" value="AC" onClick={handleClearClick}>AC</button>
                    <button className="s-key btn btn-primary m-1  fs-4" id="parenthesis" value="()" onClick={() => handleParenthesisClick('()')}>( )</button>
                    <button className="s-key btn btn-primary m-1  fs-4" id="divide" value="/" onClick={() => handleOperatorClick('/')}>/</button>
                    <button className="s-key btn btn-primary m-1  fs-4" id="multiply" value="x" onClick={() => handleOperatorClick('*')}>x</button>
                </div>
                <div className="my-1">
                    <button className="s-key m-1 btn btn-secondary  fs-4" id="seven" value="7" onClick={() => handleNumberClick('7')}>7</button>
                    <button className="s-key m-1 btn btn-secondary  fs-4" id="eight" value="8" onClick={() => handleNumberClick('8')}>8</button>
                    <button className="s-key m-1 btn btn-secondary  fs-4" id="nine" value="9" onClick={() => handleNumberClick('9')}>9</button>
                    <button className="s-key m-1 btn btn-primary  fs-4" id="subtract" value="-" onClick={() => handleOperatorClick('-')}>-</button>
                </div>
                <div className="my-1">
                    <button className="s-key m-1 btn btn-secondary  fs-4" id="four" value="4" onClick={() => handleNumberClick('4')}>4</button>
                    <button className="s-key m-1 btn btn-secondary  fs-4" id="five" value="5" onClick={() => handleNumberClick('5')}>5</button>
                    <button className="s-key m-1 btn btn-secondary  fs-4" id="six" value="6" onClick={() => handleNumberClick('6')}>6</button>
                    <button className="s-key m-1 btn btn-primary  fs-4" id="add" value="+" onClick={() => handleOperatorClick('+')}>+</button>
                </div>
                <div className="my-1">
                    <button className="s-key m-1 btn btn-secondary  fs-4" id="one" value="1" onClick={() => handleNumberClick('1')}>1</button>
                    <button className="s-key m-1 btn btn-secondary  fs-4" id="two" value="2" onClick={() => handleNumberClick('2')}>2</button>
                    <button className="s-key m-1 btn btn-secondary  fs-4" id="three" value="3" onClick={() => handleNumberClick('3')}>3</button>
                </div>
                <div className="my-1">
                    <button className="s-key m-1 btn btn-secondary  fs-4" id="decimal" value="." onClick={() => handleDecimalClick('.')}>.</button>
                    <button className="s-key mx-1 btn btn-secondary  fs-4" id="zero" value="0" onClick={() => handleNumberClick('0')}>0</button>
                    <button className="s-key mx-1 btn btn-danger  fs-4" id="delete" value="-1" onClick={() => handleDeleteClick('0')}>Del</button>
                    <button className="dc-key m-1 btn btn-success  fs-4" id="equals" value="=" onClick={handleEqualsClick}>=</button>
                </div>
            </div>
        </div>
    );
};

export default BasicCalculator;
