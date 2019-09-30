import React, {RefObject} from "react"
import style from "./HeaderArea.css"
import MultiLink from "../../atoms/MultiLink/index";


interface HeaderState {

    /**
     * ヘッダー部分を非表示にするようなclassを付加するかどうか。
     */
    isClosed: boolean;

    /**
     * レスポンシブ表示時にナビゲーターメニューを表示するかどうか。（非レスポンシブ表示時にはこの値によらず常に表示する。）
     */
    isNavigatorOpen: boolean;
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
            isClosed: false,
            isNavigatorOpen: false
        };

        //スクロールY位置がヘッダの高さを超えた場合に非表示にする。
        window.onscroll = () => this.onScroll();
    }

    render(): JSX.Element {
        return <>
            <header ref={this.headerRef} className={style.header + (this.state.isClosed ? ` ${style.closed}` : ``)}>
                <div className={style.titleText}>Phinesze</div>
                <div className={style.navigatorButton} onClick={() => this.openNavigator()}>
                    <div className={style.navigatorButtonBar}/>
                    <div className={style.navigatorButtonBar}/>
                    <div className={style.navigatorButtonBar}/>
                </div>
                <nav className={style.navigator + " " + (this.state.isNavigatorOpen ? style.open : "")}>
                    <MultiLink href="#aboutMe">
                        <li>About Me.</li>
                    </MultiLink>
                    <MultiLink href="#works">
                        <li>Works</li>
                    </MultiLink>
                    <MultiLink href="#links">
                        <li>Links</li>
                    </MultiLink>
                </nav>
            </header>
        </>;
    }

    onScroll() {
        const isClosed = window.scrollY > this.headerRef.current!.offsetHeight;
        this.setState({
            isClosed: isClosed,
            isNavigatorOpen: this.state.isNavigatorOpen && !isClosed
        });
    }

    /**
     * レスポンシブ表示時に押下した時にナビゲーターメニューの表示をトグルする。
     */
    openNavigator() {
        this.setState({isNavigatorOpen: !this.state.isNavigatorOpen});
    }

}