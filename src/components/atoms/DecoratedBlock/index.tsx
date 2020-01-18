import React from "react";
import style from "./DecoratedBlock.css";

export interface DecoratedTextProps {
  text?: string;
}

export default class DecoratedBlock extends React.Component<DecoratedTextProps, {}> {
  constructor(props: DecoratedTextProps) {
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
