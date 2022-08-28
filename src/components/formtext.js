import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function FormText(props) {

  let [text,setText] = useState("");

  const handleupclick = ()=>{
    console.log("Converted to Uppercase");
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to UpperCase","success");
  }

  const handleonchange = (event)=>{
   console.log("you tried to change the text");
   setText (event.target.value);

  }

  const handleclear = ()=>{
   setText('');
   console.log("Cleared text");
  }

  const handledownclick = ()=>{
    console.log("Converted to Lower case");
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to LowerCase","success");
  }

  const handlecopy=()=>{
   let text = document.getElementById('myBox')
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showalert('Copied to Clipboard','success');
  }
  
  return (
    
    <div style={{height : '100vh',backgroundColor : props.mode==='light'?'white':'black',color : props.mode==='light'?'black':'white'}} className='my-30' >
{/* // < class="mb-3" */}
{/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}

<h1>{props.heading}</h1>

<textarea className="form-control mx-3" rows="10" id ="myBox" style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='light'?'black':'white'}} onChange = {handleonchange} value={text}></textarea>

<button className="btn btn-primary mx- 3 my-3" onClick={handleupclick}>Convert into Upper Case</button>

<button className="btn btn-primary mx-3 my-3" onClick={handledownclick}>Convert into Lower Case</button>

<button className="btn btn-primary mx-3 my-3" onClick={handleclear}>Clear Text</button>

<button className='btn btn-primary mx-3 my-3' id='copy' onClick={handlecopy}>Copy Text</button>

<a href="https://google.com" target="blank">Google</a>

<div className="container my-3 mx-3">
  <h2>Text Summary</h2>
<p>{text.split(' ').length} words,  {text.length} characters </p>
<p>{Math.ceil(0.08*text.split(' ').length)} Minutes read</p>

<h3 className= "my-2">Preview</h3>
<p>{text.length>0?text:"Enter the text in text area"}</p>

</div>


    </div>

  )
  }

  FormText.propTypes =
{
  heading : PropTypes.string
}
FormText.defaultProps = 
{
  heading : "default heading"
}


