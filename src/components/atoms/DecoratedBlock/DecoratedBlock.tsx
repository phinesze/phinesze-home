import React from "react";
import style from "./DecoratedBlock.css";

/**
 * スクエアメニューに使用されるタイトル文字列を装飾するブロック部分
 */
export default class DecoratedBlock extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render(): JSX.Element {
    return (
      <div className={style.decoratedBlock}>
        <div className={style.DecoratedBlockBack} />
        <div className={style.decoratedBlockShadow} />
        <div className={style.decoratedBlockInner}>{this.props.children || "..............."}</div>
      </div>
    );
  }
}
