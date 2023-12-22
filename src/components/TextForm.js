import React, {useState} from 'react'


export default function TextForm(props) {
 
  const handleUpClick = ()=>{
    console.log("uppercase button is clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Upper Case');
  
   }
   const handleonChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  
   }
   const handleLoClick=() =>{
    console.log("lower case buton was clicked");
    let lower=text.toLowerCase();
    setText(lower);
    props.showAlert('Converted to Lower Case');
   }
  const [text, setText] = useState('');
 return (
  <>
    <div className='container' style={{color : props.mode === 'light' ? '#3d3953' : 'white'}}>
    <h2>{props.heading}</h2>
    <div className="shadow-lg p-1 mb-1 bg-white rounded mb-2">
  <textarea className="form-control" id="myBox" value={text} onChange={handleonChange} style={{backgroundColor : props.mode === 'light' ? 'white' : '#3F3D58',color:props.mode === 'light' ? 'black' : 'white'}} rows="8"></textarea>
  </div>
 
   
  <button className="btn btn-secondary mx-3 " onClick={handleUpClick}>convert to uppercase</button>

  
<button className="btn btn-secondary mx-3" onClick={handleLoClick}>convert to lower case</button>
 
  </div>
 <div className="container my-3" style={{color : props.mode === 'light' ? '#3d3953' : 'white'}}>
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length} words and {text.length} letters</p>
  <p>{0.008*text.split(" ").length} minutes taken to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:'Enter your text in the above box for preview'}</p>
 </div>
  </>)
    
}

