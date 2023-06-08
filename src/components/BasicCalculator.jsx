import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const BasicCalculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [cacheValue, setCacheValue] = useState('0');

    const handleDigitLimit = (value, callback) => {
        
    };

    const handleNumberClick = (value) => {
        
    };

    const handleOperatorClick = (operator) => {
        
    };

    const handleDecimalClick = () => {
       
    };

    const handleDeleteClick = () => {
       
    };

    const handleClearClick = () => {
       
    };

    const handleEqualsClick = () => {
        
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
                    <button className="dr-key btn btn-warning mx-1  fs-4" id="clear" value="AC" onClick={handleClearClick}>AC</button>
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
