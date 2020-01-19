import React from "react";
import style from "./Overlay.css";

interface Props {
  children?: React.ReactNode;
}

/**
 * オーバーレイ表示に使用する要素。オーバーレイ表示させる要素を子要素として内包する。
 */
export default class Overlay extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    return <div className={style.overlay}>{this.props.children}</div>;
  }
}
