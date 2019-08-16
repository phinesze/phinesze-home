import React from "react"
import {RouteComponentProps, withRouter} from "react-router-dom";
import style from "./WorksDetail.css";
import MainButton from "../common/MainButton/index";
import {Work} from "../../data/works";

interface WorksDetailProps extends RouteComponentProps {
    data: Work[];
    url: string;
    onBack: (event?: any) => void;
}

interface WorksDetailState {
    opening: boolean;
    closing: boolean;
}

/**
 * Worksの各アイテムクリック時に表示されるオーバーレイウィンドウ
 */
class WorksDetail extends React.Component<WorksDetailProps, WorksDetailState> {


    get selectedItem(): Work {
        const path: string = this.props.history.location.pathname;
        return this.props.data.find((e) => e.url == path)!;
    }

    /**
     * テキストを取得する。
     */
    get text (): string | undefined {
        const selectedItem = this.selectedItem;
        return (selectedItem !== undefined)? selectedItem.text : "";
    }

    /**
     * 初期化する。
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            opening: true,
            closing: false
        };
    }

    /**
     * トップ画面に戻る。
     */
    back() {
        this.setState({closing: true});
        window.setTimeout(() => {
            this.props.history.push("/");
        }, 500);
    }

    /**
     * 出力する。
     */
    render() {
        return <>
            <section className={style.worksDetail + ((this.state.closing) ? ` ${style.closing}` : "")}>
                <h1 className={style.worksDetailInnerText}>{this.text}</h1>
                <div>
                    <dl>
                        {this.selectedItem.detail.descriptions.map(detail => {return <>
                            <dt>{detail.title}</dt>
                            <dd>{detail.text}</dd>
                        </>})}
                    </dl>
                </div>
            </section>
            {!this.state.closing && <MainButton type="button" text="閉じる" onClick={() => this.back()}/>}
        </>;
    }
}

export default withRouter(WorksDetail);