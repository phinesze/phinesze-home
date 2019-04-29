import React from "react"
import style from "./SquareView.css"
import SquareViewItem, {SquareViewItemProps} from "./SquareViewItem";

interface SquareViewPageProps {
    items: SquareViewItemProps[];
    start: number;
    end: number;
}


export default class SquareViewPage extends React.Component<SquareViewPageProps, {}> {

    constructor(props: SquareViewPageProps
    ) {
        super(props);

        this.state = {}
    }

    render(): JSX.Element {

        return <div className={style.squareViewPage}>
            {this.props.items.slice(this.props.start, this.props.end).map((item) => {
                return <SquareViewItem key={item.id} id={item.id} img={item.img} text={item.text}/>
            })}
        </div>
    }
}