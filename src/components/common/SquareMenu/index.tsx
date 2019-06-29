import React, {RefObject} from "react"
import style from "./SquareMenu.css"
import SquareMenuItem, {SquareMenuItemParams} from "./SquareMenuItem";

interface SquareMenuProps {

    /**
     * SquareViewの1ページの行数
     */
    rows?: number;
    items: SquareMenuItemParams[];
}

interface SquareViewState {
    columns?: number;
}

export default class SquareView extends React.Component<SquareMenuProps, SquareViewState> {

    /**
     * ページ表示領域の幅を求めるための参照
     */
    pageAreaRef: RefObject<any>;

    /**
     * 現在表示中のページインデックス
     */
    nowPageIndex: number = 0;

    constructor(props: SquareMenuProps) {
        super(props);

        if (props.rows != null) {
            props.rows = 12;
        }

        //ページ表示領域の参照を設定する。
        this.pageAreaRef = React.createRef();

        //stateに空の値を設定する。
        this.state = {};
    }

    /**
     * レンダリングを行う。
     */
    render(): JSX.Element {

        return <div className={style.squareMenuTop} ref={this.pageAreaRef}>
            {this.getSquareViewItems()}
        </div>;
    }

    /**
     * SquareViewの各ページを出力する。
     */
    private getSquareViewItems() {

        let ret: any[] = [];

        //各ページを出力する。
        for (const item of this.props.items) {

            ret.push(<SquareMenuItem item={item}/>);
        }
        return ret;
    }
}