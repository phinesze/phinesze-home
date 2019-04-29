import React, {RefObject} from "react"
import style from "./HeaderArea.css"


interface HeaderState {

    /**
     * ヘッダー部分を非表示にするようなclassを付加するかどうか。
     */
    isClosed: boolean;
}

export default class HeaderArea extends React.Component<{}, HeaderState> {

    /**
     * このスクロールY位置を超えた場合にヘッダを非表示にする。
     */
    readonly headerRef: RefObject<any>;

    constructor(props: {}) {
        super(props);
        this.headerRef = React.createRef();

        this.state = {
            isClosed: false
        };

        //スクロールY位置がヘッダの高さを超えた場合に非表示にする。
        window.onscroll = () => {
            this.setState({isClosed: (window.scrollY > this.headerRef.current!.offsetHeight)});
        }
    }

    render(): JSX.Element {
        return <header ref={this.headerRef} className={style.header + (this.state.isClosed ? ` ${style.closed}` : ``)}>
            <span className={style.titleText}>Phinesze</span>
        </header>;
    }

}