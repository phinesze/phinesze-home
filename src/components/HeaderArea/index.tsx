import React, {RefObject} from "react"
import style from "./HeaderArea.css"
import MultiLink from "../MultiLink/index";


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
            <div className={style.titleText}>Phinesze</div>
            <ul className={style.navigator}>
                <MultiLink href="#aboutMe"><li>About Me.</li></MultiLink>
                <MultiLink href="#works"><li>Works</li></MultiLink>
                <MultiLink href="#links"><li>Links</li></MultiLink>
            </ul>
        </header>;
    }

}