import React, { useState } from 'react'


export default function Text(props) {
  const [text, setText] = useState('');
  const Upercase = () => {
    console.log("button clicked")
    let newtext = text.toUpperCase()
    setText(newtext);
    props.showAlert("The Uppercase", "Sucess");
  }
  const Lowercase = () => {
    console.log("button clicked")
    let newtext = text.toLowerCase()
    setText(newtext);
    props.showAlert("The lowerCase", "Sucess");
  }


  const handleDownload = () => {

    const blob = new Blob([text], { type: 'text/plain' });


    const url = URL.createObjectURL(blob);


    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-text-file.txt';


    link.click();


    URL.revokeObjectURL(url);
    props.showAlert("The text Download ", "Sucess");
  };

  const hadle = (event) => {
    setText(event.target.value);

  }

  const copyToClipboard = () => {
    const textarea = document.getElementById('textarea');
    textarea.select();
    props.showAlert("Text copied to clipboard", "Success");
  }
  const handleClear = () => {
    setText('');
    props.showAlert("Text cleared", "Success");
  }

  return (

    <div className='container'>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="textarea" value={text} onChange={hadle} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'Orange' }} rows="5"></textarea>
        <button type="button" className="btn btn-primary mx-2 my-3  mb-3" onClick={Upercase} >Conver in Uppercase</button>
        <button type="button" className="btn btn-primary mx-2 my-3 mb-3" onClick={Lowercase}>Conver in Lowecase</button>
        <button type="button" className="btn btn-primary mx-2 my-3 mb-3" onClick={handleDownload}>Download</button>
        <button type="button" className="btn btn-primary mx-2 my-3  mb-3 " onClick={copyToClipboard}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-2 my-3 mb-3" onClick={handleClear}>Clear Text</button>
      </div>
      <div className='container'>
        <h1>
          Text summary
        </h1>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.split(' ').join('').length} characters</p>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.006} min read</p>
        <h3 >Preview </h3>
        <p>{text}</p>
      </div>
    </div>
  )
}
