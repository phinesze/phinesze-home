import React from "react";
import style from "./Footer.css";

/**
 * フッター要素
 */
export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    return (
      <footer className={style.footer}>
        <div>©2019 Phinesze.</div>
      </footer>
    );
  }
}
