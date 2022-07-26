import React, { useState, useRef, useCallback, useEffect } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0); // react에서 count(실제의 state 값)와 setCount(count를 업데이트 할 수 있는 함수) 두가지를 리턴해준다.
  const spanRef = useRef();
  // const spanRef = React.createRef(); // 상태가 변하면 계속해서 spanRef 생성, 반복적으로 생성하지 않기 위해서 useRef(); 사용

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }); // useCallback 이라는 것으로 메모리에 저장해놓고 반복해서 사용하는 것을 막는다.

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, [count]);
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
