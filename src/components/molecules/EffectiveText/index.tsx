import React, {RefObject} from "react"
import style from "./EffectiveText.css"

/**
 * EffectiveTextのプロパティ一覧
 */
interface EffectiveTextProps {

    /**
     * テキスト部分の文字列
     */
    text: string;

    /**
     * 表示される状態かどうか
     */
    isVisible: boolean;
}

/**
 * 一定位置にスクロールされた場合にエフェクトを出して表示させるテキストブロック
 */
export default class EffectiveText extends React.Component<EffectiveTextProps> {

    textRef: RefObject<any>;
    spanRef: RefObject<any>;
    textWidth: 0;

    /**
     * 初期化する。
     * @param props
     */
    constructor(props: EffectiveTextProps) {
        super(props);
        this.textRef = React.createRef();
        this.spanRef = React.createRef();

        this.state = {
            isVisible: false
        }
    }

    /**
     * セクションの見出し部分と子要素として記述したセクション本文を出力する。
     */
    render(): JSX.Element {
        return <div ref={this.textRef} className={style.effectiveText + (this.props.isVisible ? ` ${style.visible}` : ``)} style={{width: this.textWidth}}>
            <span ref={this.spanRef}>{this.props.text}</span>
        </div>;
    }
}