import React, {useState, useRef} from 'react';

const templateKey =<button type='button' value='' name='' className="keyboard__key" >b</button>;
  

const keyLayout = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
  "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
  "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
  "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
  "space"
];

export const Keys = () => {
  return(
    <div>
      {templateKey}
    </div>

  )
}; 
