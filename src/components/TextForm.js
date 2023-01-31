import React, { useState } from 'react'
// useState is a hook


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }

    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges(); // it will remove the selection

        // Method 2: don't write selection line
        props.showAlert("Text has been copied", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed", "success");
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }


    const [text, setText] = useState("");
    // const [text, setText] = useState("Enter text here");
    // text is a variable and setText is a function
    // useState must be placed inside function component
    // ! setText("new text");
    // text value can't be changed directly
    // setText is a function that changes the value of text
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="10" style={{ background: props.mode === 'dark' ? '#5dafe780' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                    {/* 
                    in style= we uses two curly 
                    brackets one for writing js and 
                    other for writing object inside js 
                    */}
                </div>

                <button disabled={text.length === 0} onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Convert to Uppercase</button>
                <button disabled={text.length === 0} onClick={handleLoClick} className="btn btn-primary mx-2 my-2">Convert to Lowercase</button>
                <button disabled={text.length === 0} onClick={handleClearClick} className="btn btn-primary mx-2 my-2">Clear Text</button>
                <button disabled={text.length === 0} onClick={handleCopy} className="btn btn-primary mx-2 my-2">Copy Text</button>
                <button disabled={text.length === 0} onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Remove Extra Spaces</button>
                {/* disabled will disable the button 
                when text.length is true i.e. string is 
                empty */}
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                {/* using regular expression
                separating using \s -> white space
                and \n -> new line */}
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} minutes read</p>
                {/* <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read</p> */}
                <h2>Preview</h2>
                {/* if there is no text present then 
                show other text */}
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
