import React, {useState, useRef, useEffect} from 'react';

export const Keys = () => {
  
  const [text, setText] = useState("");

  function input (e) {
    e.preventDefault();
    setText(prevText => prevText + e.target.textContent)
  }

  const [layout, setLayout] = useState([
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "done", "z", "x", "c", "v", "b", "n", "m", ",", ".","?",
    "space"
  ])
  
  const [capsLock, setCapsLock] = useState(() => {
    console.log('setting caps state');
    return false
  })

  // turnary operator
// <if this is true> ? <render this> : <otherwise default to this>

  const toggleCaps = () => {
    setCapsLock(capsLock => !capsLock)
    console.log(keys)
  }
 
  const [keys, setkeys] = useState([
      layout.map((key,index)=> {

        if(key === 'caps') {
          return <button onClick={toggleCaps} key={index}>{capsLock ? key.toUpperCase() : key.toLowerCase()}</button>
        } else {
          return <button onClick={input} key={index}>{capsLock ? key.toUpperCase() : key.toLowerCase()}</button>
        }
      }
    )
  ])


  return (
    <div>
      <textarea type="text" autoFocus value={text} onChange={input} />
      {[keys]}
    </div>
  )
};