import React from "react";
import style from "./MainButton.css";

interface Props {
  type: string;
  text: string;
  onClick: () => void;
}

/**
 * メインで使用するボタン
 */
export default class MainButton extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    return (
      <button type={this.props.type} className={style.button} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}
