import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState(""); 

    const uppercase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to upper case","success")
    };

    const lowercase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lower case","success")
    };

    const reversewords = () =>{
        setText(text.split('').reverse().join(''))
        props.showAlert("content reversed","success")
    }

    const clearcase = ()=>{
        setText('')
        props.showAlert("content cleared","success")
    }

    const handleonChange = (event) => {
        setText(event.target.value);
    };

    const removeExtraspace = ()=>{
        let newtext = text.split(/[  ]+/)
        setText(newtext.join(" "))
        props.showAlert("extra spaces removed","success")
    }

    return (
        <>
            <div className = "conatiner" style={{color: props.mode === 'light'?'black':'white'}}>
                <div className="mb-3 my-3">
                    <label htmlFor="myBox" className="form-label">{props.heading}</label>
                    <textarea
                        className="form-control"
                        id="myBox"
                        value={text}
                        placeholder="Enter text here"
                        onChange={handleonChange}
                        rows="6" style={{backgroundColor: props.mode === 'light'?'white':'#2024d4', color: props.mode === 'light'?'black':'white'}}
                    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={uppercase}>Convert to Uppercase</button>
                <button disabled={text.length===0}  className="btn btn-primary mx-1" onClick={lowercase}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={clearcase}>Clear character</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={reversewords}>reverse</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={removeExtraspace}>Remove Extra space</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to Read</p>

            {/* original.split('').reverse().join('') */}
           
                <h1>Preview</h1>
                <p>{text.length > 0 ? text:"Enter text to preview"}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string,
};
