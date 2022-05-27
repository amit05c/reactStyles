// import "./styles.css";
// import styles from "./App.module.css";
import styled from "styled-components";
import { useState } from "react";

const RedColorStyled = styled.div`
  background-color: ${(props) => props.color};
  /* color: ${(props) => props.colors}; */
`;

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <RedColorStyled color={count > 5 ? "blue" : "white"}>
      <div className="App">
        {/* <div className="App" style={{ backgroundColor: "red" }}> */}
        {/* <h1 className={styles.head}>Hello CodeSandbox</h1> */}
        <h1 onClick={() => setCount(count + 1)}>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div>{count}</div>
      </div>
    </RedColorStyled>
  );
}
