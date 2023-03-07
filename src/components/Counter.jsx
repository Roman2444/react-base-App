import React from 'react';

const Counter = () => {
    const [counter, setCounter] = React.useState(24)

    function increment() {
        setCounter((prev) => prev + 1);
      }
      function decrement() {
        setCounter((prev) => prev + 1);
      }

    return (
        <>  
            <p> this it counter </p> 
            <h1>{counter}</h1>
            <button onClick={() => increment()}>increment</button>
            <button onClick={() => decrement()}>decrement</button>
        </>
    );
};

export default Counter;
 