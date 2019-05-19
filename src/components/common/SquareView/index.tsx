import React, {RefObject} from "react"
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

    /**
     * ページ表示領域の幅を求めるための参照
     */
    pageAreaRef: RefObject<any>;

    /**
     * 計算されたページ数
     */
    pageNum: number = 0;

    /**
     * 現在表示中のページインデックス
     */
    nowPageIndex: number = 0;

    constructor(props: SquareViewProps
    ) {
        super(props);

        this.state = {
            columns: this.getColumnNum()
        };

        //ページ表示領域の参照を設定する。
        this.pageAreaRef = React.createRef();

        /**
         * ウィンドウリサイズ時に1ページのカラム数を再計算する。
         */
        window.onresize = () => {
            this.setState({
                columns: this.getColumnNum()
            });

            //現在のページ番号を0以上ページ数未満に抑える。
            this.nowPageIndex = Math.max(Math.min(this.nowPageIndex, 0), this.pageNum - 1);
            //ページ表示領域の幅を求める。
            const width = this.pageAreaRef.current.clientWidth;
            //ページ表示領域のスクロール位置を修正する。
            this.pageAreaRef.current.scrollLeft = (this.nowPageIndex * width);
        }
    }

    /**
     * 矢印クリック時にスクロールする。
     */
    arrayClick(pageNumAdd: number) {
        //スクロール後のページインデックスを求める。
        const afterPageIndex = this.nowPageIndex + pageNumAdd;

        //スクロール後のページが左端または右端を超えた場合はキャンセル。
        if (afterPageIndex < 0 || afterPageIndex >= this.pageNum) {
            return;
        }

        //ページインデックスをスクロール後のものにする。
        this.nowPageIndex = afterPageIndex;
        //ページ表示領域の幅を求める。
        const width = this.pageAreaRef.current.clientWidth;

        //一定時間でリニアなスクロールの視覚処理を行う。
        let count = 0;
        const maxCount = 25;
        const id = setInterval(() => {
            count++;

            //スクロール開始から完了までの時間を0～1の状態で求める。
            const progress = ((maxCount - count) / maxCount);
            const ease = progress*progress;
            //スクロール位置を変更する。
            this.pageAreaRef.current.scrollLeft = ((this.nowPageIndex - pageNumAdd * ease) * width);
            //スクロール視覚処理終了の判定を行う。
            if (count >= maxCount) {
                clearInterval(id);
            }

        }, 20);
    }


    render(): JSX.Element {

        return <div className={style.squareViewTop}>
            <div className={style.squareViewArrowArea}>
                <div className={style.squareViewLeftArrow} onClick={() => this.arrayClick(-1)}/>
                <div className={style.squareViewRightArrow} onClick={() => this.arrayClick(1)}/>
            </div>
            <div className={style.squareViewPageArea} ref={this.pageAreaRef}>
                {this.getSquareViewPages()}
            </div>
        </div>;
    }

    /**
     * SquareViewの各ページを出力する。
     */
    private getSquareViewPages() {

        let ret: any[] = [];
        //ページ毎のカラム数と行数をを取得する。
        const columns = this.state.columns;
        const rows = this.props.rows || 2;

        //ページ毎のアイテム数を計算する。
        const pageItems = columns * rows;

        //ページ数を計算する。
        this.pageNum = Math.ceil(this.props.items.length / pageItems);

        //各ページを出力する。
        for (let i = 0; i < this.pageNum; i++) {
            ret.push(<SquareViewPage key={i.toString()} items={this.props.items} start={i * pageItems} end={(i + 1) * pageItems}/>);
        }
        return ret;
    }

    /**
     * SquareViewの1ページのカラム数をウィンドウサイズから計算する。
     */
    private getColumnNum() {
        return Math.floor(this.pageAreaRef.current.clientWidth / 240);
    }
}