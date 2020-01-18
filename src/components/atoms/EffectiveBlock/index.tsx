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

    /**
     * 内側のコンテンツ表示部分の幅に設定するため、外側の要素の幅を保持する。
     */
    baseWidth: number;
}

/**
 * 一定位置にスクロールされた場合にエフェクトを出して表示させるテキストブロック
 */
export default class EffectiveBlock extends React.Component<EffectiveBlockProps, EffectiveBlockState> {

    ref: RefObject<any>;
    contentRef: RefObject<any>;

    /**
     * 初期化する。
     * @param props
     */
    constructor(props: EffectiveBlockProps) {
        super(props);

        this.ref = React.createRef();
        this.contentRef = React.createRef();

        this.state = {
            isVisible: false,
            baseWidth: 0
        }
        window.addEventListener('scroll', () => {this.onScroll()});
        window.addEventListener( 'resize', () => {this.setBaseWidth()});
    }

    /**
     * セクションの見出し部分と子要素として記述したセクション本文を出力する。
     */
    render(): JSX.Element {
        return <div ref={this.ref} className={style.effectiveBlock}>
            <div className={style.effectiveBlockMaskingLayer + (this.state.isVisible ? ` ${style.visible}` : ``)}>
                <div ref={this.contentRef} style={{width: this.state.baseWidth}}>
                    {this.props.children}
                </div>
            </div>
        </div>;
    }

    /**
     * コンポーネント出力時に外側の要素の幅を取得する。
     */
    componentDidMount() {
        this.setBaseWidth();
    }

    /**
     * 出力時とリサイズ時に外側の要素の幅を取得する。
     */
    setBaseWidth() {
        this.setState({baseWidth: this.ref!.current.offsetWidth});
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