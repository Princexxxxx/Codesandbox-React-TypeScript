import React, { useEffect } from "react";
import "./styles.css";

interface IProps {
  msg?: string;
}

const HelloWorld: React.FC<IProps> = (props) => {
  const { msg } = props;

  useEffect(() => {
    console.log("log from useEffect");
  });

  return <span>{msg}</span>;
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <HelloWorld msg="Msg from HelloWorld FC."></HelloWorld>
    </div>
  );
}
