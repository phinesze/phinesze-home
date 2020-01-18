import React from "react";
import style from "./SquareMenuItem.css";
import MultiLink from "../../atoms/MultiLink/index";
import DecoratedBlock from "../../atoms/DecoratedBlock/index";

export interface SquareMenuItemProps {
  item: SquareMenuItemParams;
  background: string;
}

export interface SquareMenuItemParams {
  id: string;
  img?: string;
  url: string;
  text?: string;
}

export default class SquareMenuItem extends React.Component<SquareMenuItemProps, {}> {
  constructor(props: SquareMenuItemProps) {
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
