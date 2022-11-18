import React, {useState, useRef, useEffect} from 'react';

export const Keys = () => {
  
  const input = (e) => {
    setText(prevText => prevText + e.target.textContent)
  }

  // textarea initial state
  const [text, setText] = useState("");

  const layout = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "done", "z", "x", "c", "v", "b", "n", "m", ",", ".","?",
    "space"
  ]

  
  // capsLock state
  const [capsLock, setCapsLock] = useState(false)

  
  const toggleCaps = () => {
    setCapsLock(capsLock => !capsLock)
  }
  
  const keysLogic = () => {
      return layout.map((key,index)=> {
        if(key === 'caps') {
          return <button onClick={toggleCaps} key={index}>{capsLock ? key.toUpperCase() : key.toLowerCase()}</button>
        } else {
          return <button onClick={input} key={index}>{capsLock ? key.toUpperCase() : key.toLowerCase()}</button>
        }
      }
    )
  }

  // keyboard logic state
  const [keys, setkeys] = useState(keysLogic())
  
  useEffect(() => {
    // console.log('capsLock is', capsLock);
    setkeys(keysLogic())
  },[capsLock])
  
  return (
    <>
      <textarea type="text" autoFocus value={text} onChange={input} />
      {keys}
    </>
  )
};