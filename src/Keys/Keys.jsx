import React, {useState, useRef, useEffect} from 'react';


export const Keys = () => {



  // const keyElement = <button onClick={test} type='button' ref={keyRef} className="keyboard__key" >b</button>;

  const [layout, setLayout] = useState([
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
    "space"
  ])

  // layout.forEach(key => {
  //   console.log('hello key')
  // })



  return(
    <div >
       {layout.map( (key,index)=>
       (
           <button key={index}>{key}</button>
       )
       )}
        <div></div>
     </div>
  )
}; 
