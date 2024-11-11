import type { Component } from "solid-js";
import styles from "./styles.module.scss";

const App: Component = () => {
  return (
    <div class={styles.wrapper}>
      <header class={styles.header}>
        <title>Git Revert Changes Demo</title>
      </header>
      <div class={styles.container}>
        <div class={styles.box1}>Box A</div>
        <div class={styles.box2}>Box B</div>
        <div class={styles.box3}>Box C</div>
        <div class={styles.box4}>Box D</div>
      </div>
    </div>
  );
};

export default App;
