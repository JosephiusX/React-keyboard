import React, {useState, useRef, useEffect} from 'react';

export const Keys = () => {

  const keyRef = useRef()
  
  const [text, setText] = useState("");

  function input (e, text) {
    e.preventDefault();
    setText(prevText => prevText + e.target.innerText)
  }

  const [layout, setLayout] = useState([
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "done", "z", "x", "c", "v", "b", "n", "m", ",", ".","?",
    "space"
  ])
  
  const [keys, setkeys] = useState ([
    layout.map((key,index)=>
      
        <button ref={keyRef} onClick={input} key={index}>{key}</button>
      
    )
  ])

  return (
    <div>
      <textarea type="text" autoFocus value={text} onChange={input} />
      {[keys]}
    </div>
  )
};