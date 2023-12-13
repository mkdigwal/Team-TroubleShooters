import React, { useState } from 'react'


export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    const [user, setUser] = useState(
        {
            name: '',
            contact: '',
            address: '',
            comment: ''
        }
    )

    let value, name;
    const handleinput = (input) => {
        value = input.target.value;
        name = input.target.id;

        setUser({ ...user, [name]: value });
    }

    const [text, setText] = useState('Hey!')

    const clearText = () => {
        setText('');
        setUser({
            name: '',
            contact: '',
            address: '',
            comment: ''
        });
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <div>
                <textarea className='form-control' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343434', color: props.mode === 'light' ? 'black' : 'white' }}
                    value={user.name} onChange={(e) => { handleOnChange(e); handleinput(e); }} id='name' rows='1'></textarea>
            </div>
            <h1>{props.contact}</h1>
            <div>
                <textarea className='form-control' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343434', color: props.mode === 'light' ? 'black' : 'white' }}
                   value={user.contact} onChange={(e) => { handleOnChange(e); handleinput(e); }} id='contact' rows='1'></textarea>
            </div>
            <h1>{props.address}</h1>
            <div>
                <textarea className='form-control' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343434', color: props.mode === 'light' ? 'black' : 'white' }}
                   value={user.address} onChange={(e) => { handleOnChange(e); handleinput(e); }} id='address' rows='3'></textarea>
            </div>
            <h1>{props.comment}</h1>
            <div>
                <textarea className='form-control' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343434', color: props.mode === 'light' ? 'black' : 'white' }}
                   value={user.comment} onChange={(e) => { handleOnChange(e); handleinput(e); }} id='comment' rows='4'></textarea>
            </div>
            <button className='btn btn-primary ml-3 mt-5' onClick={clearText} >Submit</button>
            <button className='btn btn-primary ml-3 mt-5' onClick={clearText} >Search</button>
            <button className='btn btn-primary ml-3 mt-5' onClick={clearText} >Clear Text</button>

            <h2 style={{ marginTop: 100 }}>Preview</h2>
            <h4>{text}</h4>

        </div>
    )
}
