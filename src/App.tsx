import React from 'react';
import HelloWorld from './HelloWorld';
import { I18nContext } from './context';
import './styles.css';

export default function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>

            <I18nContext.Provider value={{ locale: 'en_US' }}>
                <HelloWorld msg="Count"></HelloWorld>
            </I18nContext.Provider>
        </div>
    );
}
