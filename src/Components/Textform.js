import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick =()=>
    {
        setText(text.toUpperCase());
        props.showAlert("Sucess, Text is converted to uppercase");
    }
    const handleOnChange =(event)=>
    {
        setText(event.target.value);
    }
    const handleLoClick =()=>
    {
        setText(text.toLowerCase());
        props.showAlert("Sucess, Text is converted to LowerCase");
    }
    const handleClClick =()=>
    {
        setText("");
    }
    const handleCopyText =()=>
    {
        var text=document.getElementById("textform");
        navigator.clipboard.writeText(text.value);
        props.showAlert("Sucess, Text is Copied");
    }
    const handleSpaces =()=>
    {
        setText(text.split(/[ ]+/).join(" ")); 
        props.showAlert("Sucess, Extra Spaces Are Removed");
    }
    const [text, setText] = useState("Enter Text Here");
    return (
        <>
            <h4>{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textform" rows="5"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2s" onClick={handleUpClick}>Convert to UpperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Covert To LowerCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
            <h4 className="my-3">Your Text Summary</h4>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h4> Preview</h4>
            <p>{text}</p>
        </>
    )
}
