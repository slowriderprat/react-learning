import './App.css';
import Button from './Button';
import { useState } from 'react';

const App = () => {

    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Hello World !!</h1>
            <h2>Current Counter is: { count }</h2>
            <button onClick={() => setCount(0)}>Reset Counter</button>
            <button onClick={() => count > 10 ? "" : setCount(count + 1)}>Increase Counter</button>
            <button onClick={() => count === 0 ? "" : setCount(count - 1)}>Decrease Counter</button>
            {/* <button>Hello World</button> */}
        </div>
    );
};


export default App;
