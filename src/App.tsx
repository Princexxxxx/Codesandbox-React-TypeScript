import React, { useEffect, useState } from 'react';
import './styles.css';

interface IProps {
    msg?: string;
}

const HelloWorld: React.FC<IProps> = (props) => {
    const { msg } = props;

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('`HelloWorld` component re-render.');
    });

    return (
        <div>
            <span>
                {msg} : {count}
            </span>
            <button onClick={() => setCount(count + 1)}>计数</button>
        </div>
    );
};

export default function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>

            <HelloWorld msg="Count"></HelloWorld>
        </div>
    );
}
