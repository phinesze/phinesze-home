import React from "react";
import style from "./SquareMenuItem.css";
import MultiLink from "../../atoms/MultiLink/MultiLink";
import DecoratedBlock from "../../atoms/DecoratedBlock/DecoratedBlock";

interface Props {
  item: SquareMenuItemParams;
  background: string;
}

/**
 * アイテムを表示するためのパラメータ要素
 */
export interface SquareMenuItemParams {
  id: string;
  img?: string;
  url: string;
  text?: string;
}

/**
 * スクエアメニューのアイテムの一つ分の要素
 */
export default class SquareMenuItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    return (
      <MultiLink href={this.props.item.url}>
        <div className={style.squareMenuItem}>
          <img className={style.squareMenuItemBackground} src={this.props.background} alt="" />
          {this.props.item.img && <img className={style.squareMenuItemImage} src={this.props.item.img} alt="" />}
        </div>
        <div className={style.squareMenuTextArea}>
          <DecoratedBlock>
            <div className={style.squareMenuText}>{this.props.item.text}</div>
          </DecoratedBlock>
        </div>
      </MultiLink>
    );
  }
}
