import React from "react";
import style from "./Overlay.css";

interface OverrayProps {
  children?: React.ReactNode;
}

export default class Overlay extends React.Component<OverrayProps> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    return <div className={style.overlay}>{this.props.children}</div>;
  }
}
