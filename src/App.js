// import "./styles.css";
// import styles from "./App.module.css";
import styled from "styled-components";

const RedColorStyled = styled.div`
  background-color: black;
  color: white;
`;

export default function App() {
  return (
    <RedColorStyled>
      <div className="App">
        {/* <div className="App" style={{ backgroundColor: "red" }}> */}
        {/* <h1 className={styles.head}>Hello CodeSandbox</h1> */}
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </RedColorStyled>
  );
}
