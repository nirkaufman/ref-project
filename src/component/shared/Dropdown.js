import React, {useRef, useState, useEffect} from 'react';

const Dropdown = ({children}) => {
  const childRef = useRef();
  const [width, setWidth] = useState();
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    setWidth(childRef.current.clientWidth);
  }, []);

  return (
      <div>
        {React.cloneElement(children, {
          ref: childRef,
          onMouseEnter: toggleDropdown,
          onMouseLeave: toggleDropdown,
        })}

        {visible && (
            <div style={{width, border: '1px solid pink'}}>
              I am the dropdown content
            </div>
        )}

      </div>
  )
};

export default Dropdown;



