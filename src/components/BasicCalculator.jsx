import React from 'react';

const BasicCalculator = () => {
    // ...Calculator logic here...

    return (
        <div id="basic-body" className=''>
            <div className='container my-4 d-flex flex-column justify-content-center align-items-center'>
                <div id="display" className='basic-display border rounded-3'></div>
            </div>
            <div className="container calculator border rounded-3">
                <div className='my-1'>
                    <button className="dr-key btn btn-secondary mx-1" id="clear" value="AC">AC</button>
                    <button className="s-key btn btn-secondary m-1" id="divide" value="/">/</button>
                    <button className="s-key btn btn-secondary m-1" id="multiply" value="x">x</button>
                </div>
                <div className='my-1'>
                    <button className="s-key m-1 btn btn-secondary" id="seven" value="7">7</button>
                    <button className="s-key m-1 btn btn-secondary" id="eight" value="8">8</button>
                    <button className="s-key m-1 btn btn-secondary" id="nine" value="9">9</button>
                    <button className="s-key m-1 btn btn-secondary" id="subtract" value="-">-</button>
                </div>
                <div className='my-1'>
                    <button className="s-key m-1 btn btn-secondary" id="four" value="4">4</button>
                    <button className="s-key m-1 btn btn-secondary" id="five" value="5">5</button>
                    <button className="s-key m-1 btn btn-secondary" id="six" value="6">6</button>
                    <button className="s-key m-1 btn btn-secondary" id="add" value="+">+</button>
                </div>
                <div className='my-1'>
                    <button className="s-key m-1 btn btn-secondary" id="one" value="1">1</button>
                    <button className="s-key m-1 btn btn-secondary" id="two" value="2">2</button>
                    <button className="s-key m-1 btn btn-secondary" id="three" value="3">3</button>
                </div>
                <div className='my-1'>
                    <button className="dr-key mx-1 btn btn-secondary" id="zero" value="0">0</button>
                    <button className="s-key m-1 btn btn-secondary" id="decimal" value=".">.</button>
                    <button className="dc-key m-1 btn btn-secondary" id="equals" value="=">=</button>
                </div>
            </div>
        </div>
    );
};

export default BasicCalculator;
