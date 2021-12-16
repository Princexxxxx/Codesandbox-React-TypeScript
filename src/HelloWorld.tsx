import React, { useContext, useEffect, useState } from 'react';
import { I18nContext } from './context';

interface IProps {
    msg?: string;
}

const HelloWorld: React.FC<IProps> = (props) => {
    const { msg } = props;

    /**
     * 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。
     * 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。
     *
     * 别忘记 useContext 的参数必须是 context 对象本身
     */
    const i18n = useContext(I18nContext);

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('`HelloWorld` component re-render.', i18n);
    });

    return (
        <div>
            <p>
                {msg} : {count}
            </p>
            <button onClick={() => setCount(count + 1)}>计数</button>

            <p>Current Language: {i18n.locale}</p>
        </div>
    );
};

export default HelloWorld;
