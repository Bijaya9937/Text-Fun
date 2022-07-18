import React,{useState} from 'react'

export default function Textform(props) {
    const changeUp=()=>{
        // console.log("Clicked");
        let upper=text.toUpperCase();
        setText(upper);
        if(text==="")
        {
            props.showAlert("Textfield is empty!","danger");
        }
        else
        {
            props.showAlert("Converted to Uppercase","success")
        }
        
    }
    const changeLow=()=>{
        // console.log("Clicked");
        let lower=text.toLowerCase();
        setText(lower);
        if(text==="")
        {
            props.showAlert("Textfield is empty!","danger");
        }
        else
        {
            props.showAlert("Converted to Lowercase","success")
        }
    }
    const changeCopy=()=>{
        navigator.clipboard.writeText(text);
        if(text==="")
        {
            props.showAlert("Textfield is empty!","danger");
        }
        else
        {
            props.showAlert("Text Copied!","success");
        }
    }
    const changeHandler=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const changeClear=()=>{
        setText("");
        if(text==="")
        {
            props.showAlert("Textfield is empty!","danger");
        }
        else
        {
            props.showAlert("Text Cleared!","success");
        }
        
    }
    const [text,setText]=useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3 className="my-3">Play With Text</h3>
            <textarea className="form-control" placeholder="Enter the text" id="exampleFormControlTextarea1"style={{backgroundColor:props.mode==='dark'?'#1f82a3':'white',color:props.mode==='dark'?'white':'black',placeholder:props.mode==='dark'?'white':'black'}} value={text} onChange={changeHandler} rows="7"></textarea>
            <button type="button" className="btn btn-primary my-3 mx-1" onClick={changeUp}>Change to Uppercase</button>
            <button type="button" className="btn btn-primary my-3 mx-1" onClick={changeLow}>Change to Lowercase</button>
            <button type="button" className="btn btn-primary my-3 mx-1" onClick={changeCopy}>Copy Text</button>
            <button type="button" className="btn btn-primary my-3 mx-1" onClick={changeClear}>Clear Text</button>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</b></p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
    )
}
