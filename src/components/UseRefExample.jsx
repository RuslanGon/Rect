import { useRef, useEffect } from "react";

const UseRefExample = () => {
  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Устанавливаем фокус на инпут сразу после рендера компонента
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleClick = () => {
    console.log(buttonRef);
  };

  return (
    <div>
      <button onClick={handleClick} ref={buttonRef}>click to do</button>
      <br />
      <input type="text" placeholder="text" ref={inputRef} />
    </div>
  );
};

export default UseRefExample;
