import React, {RefObject} from "react"
import style from "./SquareMenu.css"
import SquareMenuItem, {SquareMenuItemParams} from "../SquareMenuItem/SquareMenuItem";

interface SquareMenuProps {

    /**
     * SquareMenuの1ページの行数
     */
    rows?: number;
    items: SquareMenuItemParams[];
    background: string;
}

interface SquareMenuState {
    columns?: number;
}

export default class SquareMenu extends React.Component<SquareMenuProps, SquareMenuState> {

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
            {this.props.items.map((item) =>
                <div className={style.squareMenuFrame}>
                    <SquareMenuItem key={item.id} item={item} background={this.props.background}/>
                </div>
            )}
        </div>;
    }
}