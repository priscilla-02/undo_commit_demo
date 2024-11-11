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
        <div class={styles.box2}>Box C</div>
        <div class={styles.box2}>Box D</div>
        <div class={styles.box2}>Box E</div>
        <div class={styles.box2}>Box F</div>
        <div class={styles.box2}>Box G</div>
      </div>
    </div>
  );
};

export default App;
