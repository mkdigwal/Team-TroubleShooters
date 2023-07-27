import React, { useState } from 'react'
import ReactGA from 'react-ga';


export default function TextForm(props) {

    const handleUpClick = () => {
        ReactGA.event({'category':'click', 'action':'submit', 'label':'Button Clicked'});
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = () => {
        let newDText = text.toLowerCase();
        setText(newDText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const clearText = () => {
        setText('');
    }

    const [text, setText] = useState('Hey!')
    return (
        <div>
            <h1>{props.heading}</h1>
            <div>
                <textarea className='form-control' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343434', color: props.mode === 'light' ? 'black' : 'white' }}
                    value={text} onChange={handleOnChange} id='myBox' rows='8'></textarea>
            </div>
            <button className='btn btn-primary my-3' onClick={handleUpClick} >Convert to Uppercase</button>
            <button className='btn btn-primary ml-3' onClick={handleDownClick} >Convert to Lowercase</button>
            <button className='btn btn-primary ml-3' onClick={clearText} >Clear Text</button>

            <h2>Preview</h2>
            <h4>{text}</h4>

        </div>
    )
}
