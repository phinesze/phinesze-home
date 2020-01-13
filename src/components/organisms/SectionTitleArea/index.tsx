import React, {RefObject} from "react"
import style from "./SectionTitleArea.css"

/**
 * SectionAreaのプロパティ一覧
 */
interface SectionTitleProps {

    /**
     * セクション見出し部分のタイトル文字列
     */
    title: string;

    /**
     * セクション見出し部分のclass属性の値
     */
    sectionTitleClass: string;
}

/**
 * SectionTitleのステート変数一覧
 */
interface SectionTitleState {
    /**
     * TODO:stub
     */
    isVisible: boolean;
}

/**
 * AboutMe, Worksなどの各セクション部分を表す。セクションの見出し部分の領域を含み、セクション本文を子要素に内包させて記述できる。
 */
export default class SectionTitle extends React.Component<SectionTitleProps, SectionTitleState> {

    ref: RefObject<any>;
    textRef: RefObject<any>;
    spanRef: RefObject<any>;
    textWidth: 0;

    /**
     * 初期化する。
     * @param props
     */
    constructor(props: SectionTitleProps) {
        super(props);
        this.ref = React.createRef();
        this.textRef = React.createRef();
        this.spanRef = React.createRef();

        this.state = {
            isVisible: false
        }

        window.addEventListener('scroll', () => {this.onScroll()});
    }

    /**
     * セクションの見出し部分と子要素として記述したセクション本文を出力する。
     */
    render(): JSX.Element {
        return <div ref={this.ref} className={style.sectionTitleArea + ' ' + this.props.sectionTitleClass}>
            <div ref={this.textRef} className={style.sectionTitleText + (this.state.isVisible ? ` ${style.visible}` : ``)} style={{width: this.textWidth}}>
                <span ref={this.spanRef}>{this.props.title}</span>
            </div>
        </div>;
    }

    /**
     * スクロール時の動作を行う。
     */
    onScroll() {
        this.textWidth = this.spanRef!.current!.offsetWidth;
        let scrollBottom = window.scrollY + window.innerHeight;
        let bottom = this.ref!.current!.offsetHeight + this.ref.current!.offsetTop;
        const isVisible = scrollBottom > bottom;
        this.setState({
            isVisible: isVisible
        });
    }
}