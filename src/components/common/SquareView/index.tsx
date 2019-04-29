import React from "react"
import style from "./SquareView.css"
import {SquareViewItemProps} from "./SquareViewItem";
import SquareViewPage from "./SquareViewPage";

interface SquareViewProps {
    rows?: number;
    items: SquareViewItemProps[];
}

interface SquareViewState {
    columns: number;
}

export default class SquareView extends React.Component<SquareViewProps, SquareViewState> {

    constructor(props: SquareViewProps
    ) {
        super(props);

        this.state = {
            columns: SquareView.getColumnNum()
        };

        window.onresize = () => {
            this.setState({
                columns: SquareView.getColumnNum()
            });
        }
    }

    render(): JSX.Element {

        return <div className={style.squareViewTop}>
            {this.getSquareViewMain()}
        </div>;
    }

    private getSquareViewMain() {

        let ret: any[] = [];
        const columns = this.state.columns;
        const rows = this.props.rows || 2;
        let pageItems = columns * rows;

        for (let i = 0; i < this.props.items.length; i++) {
            ret.push(<SquareViewPage key={i.toString()} items={this.props.items} start={i * pageItems} end={(i + 1) * pageItems}/>);
        }
        return ret;
    }

    private static getColumnNum() {
        return Math.floor(document.body.clientWidth / 240);
    }
}