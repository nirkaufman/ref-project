import React, {useRef, useEffect} from 'react';
import Input from "../shared/Input";
import Dropdown from "../shared/Dropdown";

const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  }, []);

  return (
      <div>
        <h1>React. React. React.</h1>


        <Input ref={inputRef} label={"User name"}/>
        <Input label={"User name"}/>

        <button>button</button>

      </div>
  );
}

export default App;

