import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

export const Keys = () => {
  
  const input = (e) => setText(prevText => prevText + e.target.textContent)
  console.log(input);
  // textarea initial state
  const [text, setText] = useState("");

  const layout = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "clear", "z", "x", "c", "v", "b", "n", "m", ",", ".","?",
    "space"
  ]

  // capsLock state
  const [capsLock, setCapsLock] = useState(()=>false)

  const toggleCaps = () => setCapsLock(capsLock => !capsLock)
  const space = () => setText(text => text + " ");
  const backspace = () => setText(text => text.slice(0, -1));
  // logic pending
  const enter = () => console.log('submit whats in the text area and clear it')
  const clear = () => setText("");
  
  const keysLogic = () => {
      return layout.map((key,index)=> {
        if(key === 'caps') return <button onClick={toggleCaps} key={index}>{key}</button>
        if(key === 'space') return <button onClick={space} key={index}>{key}</button>
        if(key === 'backspace') return <button onClick={backspace} key={index}>{key}</button>
        if(key === 'enter') return <button onClick={enter} key={index}>{key}</button>
        if(key === 'clear') return <button onClick={clear} key={index}>{key}</button>
        else {
          return <button onClick={input} key={index}>{capsLock ? key.toUpperCase() : key.toLowerCase()}</button>
        }
      }
    )
  }

  // keyboard logic state
  const [keys, setkeys] = useState(keysLogic())

  useEffect(() => {
    setkeys(keysLogic())
  },[capsLock])
  
  return (
    <>
      <textarea type="text" autoFocus value={text} onChange={input} />
      {keys}
    </>
  )
};

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`

const TomatoButton = styled(Button)`
  background: tomato;
`