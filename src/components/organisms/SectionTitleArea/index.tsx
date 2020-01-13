import React, {RefObject} from "react"
import style from "./SectionTitleArea.css"
import EffectiveText from "../../molecules/EffectiveText/index";

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
            <EffectiveText text={this.props.title} isVisible={this.state.isVisible}></EffectiveText>
        </div>;
    }

    /**
     * スクロール時の動作を行う。
     */
    onScroll() {
        let scrollBottom = window.scrollY + window.innerHeight;
        let bottom = this.ref!.current!.offsetHeight + this.ref.current!.offsetTop;
        this.setState({
            isVisible: scrollBottom > bottom
        });
    }
}