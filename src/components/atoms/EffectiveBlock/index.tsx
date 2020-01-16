import React, {RefObject} from "react"
import style from "./EffectiveBlock.css"

/**
 * EffectiveBlockのプロパティ一覧
 */
interface EffectiveBlockProps {

    /**
     * テキスト部分の文字列
     */
    children?: React.ReactNode;
}

/**
 * EffectiveBlockのステート変数一覧
 */
interface EffectiveBlockState {
    /**
     * 表示される状態かどうか
     */
    isVisible: boolean;
}

/**
 * 一定位置にスクロールされた場合にエフェクトを出して表示させるテキストブロック
 */
export default class EffectiveBlock extends React.Component<EffectiveBlockProps, EffectiveBlockState> {

    ref: RefObject<any>;
    textWidth: 0;

    /**
     * 初期化する。
     * @param props
     */
    constructor(props: EffectiveBlockProps) {
        super(props);

        this.ref = React.createRef();
        this.state = {
            isVisible: false
        }
        window.addEventListener('scroll', () => {this.onScroll()});
    }

    /**
     * セクションの見出し部分と子要素として記述したセクション本文を出力する。
     */
    render(): JSX.Element {
        return <div ref={this.ref} className={style.effectiveBlock + (this.state.isVisible ? ` ${style.visible}` : ``)} style={{width: this.textWidth}}>
            {this.props.children}
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