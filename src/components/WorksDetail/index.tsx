import React from "react"
import {withRouter, RouteComponentProps} from "react-router-dom";
import style from "./WorksDetail.css";
import MainButton from "../common/MainButton/index";
import SectionArea from "../SectionArea/index";
import {SquareMenuItemParams} from "../common/SquareMenu/SquareMenuItem";

interface WorksDetailProps extends RouteComponentProps {
    data: SquareMenuItemParams[];
    url: string;
    onBack: (event?: any) => void;
}

/**
 * Worksの各アイテムクリック時に表示されるオーバーレイウィンドウ
 */
class WorksDetail extends React.Component<WorksDetailProps> {


    /**
     * 内部テキストを取得する。
     */
    get innerText () {
        const path: string = this.props.history.location.pathname;
        const selectedItem: SquareMenuItemParams | undefined = this.props.data.find( (e) => e.url == path);
        return (selectedItem !== undefined)? selectedItem.text : "";
    }

    /**
     * 初期化する。
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {}
    }

    /**
     * トップ画面に戻る。
     */
    back() {
        this.props.history.push("/");
    }

    /**
     * 出力する。
     */
    render() {
        return <>
            <section className={style.worksDetail}>
                <div>{this.innerText}</div>
            </section>
            <MainButton type="button" text="閉じる" onClick={() => this.back()}/>
        </>;
    }
}

export default withRouter(WorksDetail);