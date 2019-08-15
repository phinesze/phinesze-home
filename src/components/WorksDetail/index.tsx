import React from "react"
import {RouteComponentProps, withRouter} from "react-router-dom";
import style from "./WorksDetail.css";
import MainButton from "../common/MainButton/index";
import {SquareMenuItemParams} from "../common/SquareMenu/SquareMenuItem";

interface WorksDetailProps extends RouteComponentProps {
    data: SquareMenuItemParams[];
    url: string;
    onBack: (event?: any) => void;
}

interface WorksDetailState {
    closing: boolean;
}

/**
 * Worksの各アイテムクリック時に表示されるオーバーレイウィンドウ
 */
class WorksDetail extends React.Component<WorksDetailProps, WorksDetailState> {


    get selectedItem(): SquareMenuItemParams | undefined {
        const path: string = this.props.history.location.pathname;
        const selectedItem: SquareMenuItemParams | undefined = this.props.data.find((e) => e.url == path);
        return selectedItem;
    }

    /**
     * テキストを取得する。
     */
    get text (): string | undefined {
        const selectedItem = this.selectedItem;
        return (selectedItem !== undefined)? selectedItem.text : "";
    }

    get innerComponent(): React.Component<{}, {}, any> | null {
        const selectedItem = this.selectedItem;
        return (selectedItem !== undefined && selectedItem.innerComponent !== undefined)? selectedItem.innerComponent : null;
    }

    /**
     * 初期化する。
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {closing: false}
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
                <p className={style.worksDetailInnerText}>{this.text}</p>
                <div>
                    {this.innerComponent!.render()}
                </div>
            </section>
            {!this.state.closing && <MainButton type="button" text="閉じる" onClick={() => this.back()}/>}
        </>;
    }
}

export default withRouter(WorksDetail);