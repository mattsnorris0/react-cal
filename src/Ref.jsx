import { useRef } from 'react';

export default function Ref() {
  const ref = useRef('Hello');

  const handleClick = () => {
    if (ref.current) {
      ref.current.textContent = 'Goodbye';
    }
  };

  return (
    <div>
      {/* <input type='text' ref={ref} placeholder='Click the button to focus me' /> */}
      <button onClick={handleClick}>Button</button>
      <div ref={ref}>Hello</div>
    </div>
  );
}
