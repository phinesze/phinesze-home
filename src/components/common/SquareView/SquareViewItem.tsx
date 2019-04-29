import React from "react"
import style from "./SquareView.css"

export interface SquareViewItemProps {
    id: string;
    img?: string;
    text?: string;
}

export default class SquareViewItem extends React.Component<SquareViewItemProps, {}> {

    constructor(props: SquareViewItemProps
    ) {
        super(props);

        this.state = {}
    }

    render(): JSX.Element {
        return <div className={style.squareViewFrame}>
            <div className={style.squareViewSquare}>
                {this.props.img}
            </div>
            <div className={style.squareViewText}>
                {this.props.text || '...............'}
            </div>
        </div>;
    }
}