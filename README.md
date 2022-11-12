# Project Setup:

  in project directory

    yarn init -y
    yarn add snowpack

    touch index.html styles.css

    mkdir src
    cd src
    touch index.jsx

  back in project directory

    yarn add react react-dom

    in src mkdir App
    in app touch App.jsx
      touch index.js
 <!-- <textarea class="use-keyboard-input" style="position: absolute; top: 130px; right: 30px; width: 300px;"></textarea>

   <div class="keyboard">
    <div class="keyboard__keys">
      <button type="button" class="keyboard__key">a</button>

      <button type="button" class="keyboard__key keyboard__key--wide">
        <i class="material-icons">backspace</i>
      </button>

      <button type="button" class="keyboard__key keyboard__key--extra-wide">
        <i class="material-icons">space_bar</i>
      </button>

      <button type="button" class="keyboard__key keyboard__key--wide keyboard__key--activatable">
        <i class="material-icons">keyboard_capslock</i>
      </button>
      
      <button type="button" class="keyboard__key keyboard__key--wide keyboard__key--dark">
        <i class="material-icons">check_circle</i>
      </button>
    </div>

  </div> -->

  # Components Needed:
    
    TextArea

    Container
      KeyboardKeys
        Key



# TextInput vs innerHTML

it seems like inner html would be more for if I had an icon I want to select instead of just some input,
it would be the more inclusive option though