import React from "react"
import style from "./SquareMenu.css"
import MultiLink from "../../MultiLink/index";
import DecoratedBlock from "../../DecoratedBlock/index";

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

    constructor(props: SquareMenuItemProps
    ) {
        super(props);

        this.state = {}
    }

    render(): JSX.Element {
        return <div className={style.squareViewFrame}>
            <MultiLink href={this.props.item.url}>
                <div className={style.squareViewItem}>
                    <img className={style.squareViewItemBackground} src={this.props.background} alt=""/>
                    {this.props.item.img &&
                    <img className={style.squareViewItemImage} src={this.props.item.img} alt=""/>}
                </div>
                <div className={style.squareViewTextArea}>
                    <DecoratedBlock>
                        <div className={style.squareViewText}>{this.props.item.text}</div>
                    </DecoratedBlock>
                </div>
            </MultiLink>
        </div>;
    }
}