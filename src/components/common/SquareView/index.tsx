import React from "react"
import style from "./SquareView.css"
import {SquareViewItemProps} from "./SquareViewItem";
import SquareViewPage from "./SquareViewPage";

interface SquareViewProps {

    /**
     * SquareViewの1ページの行数
     */
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

        /**
         * ウィンドウリサイズ時に1ページのカラム数を再計算する。
         */
        window.onresize = () => {
            this.setState({
                columns: SquareView.getColumnNum()
            });

            document.querySelector('squareViewLeftArrow');
        }
    }

    render(): JSX.Element {

        return <div className={style.squareViewTop}>
            <div className={style.squareViewArrowArea}>
                <div className={style.squareViewLeftArrow}/>
                <div className={style.squareViewRightArrow}/>
            </div>
            <div className={style.squareViewPageArea}>
                {this.getSquareViewPages()}
            </div>
        </div>;
    }

    /**
     * SquareViewの各ページを出力する。
     */
    private getSquareViewPages() {

        let ret: any[] = [];
        //1ページのカラム数と行数とアイテム数を取得する。
        const columns = this.state.columns;
        const rows = this.props.rows || 2;
        let pageItems = columns * rows;

        for (let i = 0; i < this.props.items.length; i++) {
            ret.push(<SquareViewPage key={i.toString()} items={this.props.items} start={i * pageItems}
                                     end={(i + 1) * pageItems}/>);
        }
        return ret;
    }

    /**
     * SquareViewの1ページのカラム数をウィンドウサイズから計算する。
     */
    private static getColumnNum() {
        return Math.floor(document.body.clientWidth / 240);
    }
}