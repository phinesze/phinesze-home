import React from "react"
import style from "./SquareMenu.css"

export interface SquareMenuItemProps {
    item: SquareMenuItemParams;
}

export interface SquareMenuItemParams {
    id: string;
    img?: string;
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
            <div className={style.squareViewItem}>
                <img src={this.props.item.img}/>
            </div>
            <div className={style.squareViewText}>
                {this.props.item.text || '...............'}
            </div>
        </div>;
    }
}