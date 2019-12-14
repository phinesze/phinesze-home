import React, {RefObject} from "react"
import style from "./HeaderArea.css"
import NavMenu from "../../molecules/NavMenu/index";
import NavButton from "../../molecules/NavButton/index";

/**
 * HeaderStateのステート変数一覧
 */
interface HeaderState {

    /**
     * ヘッダー部分を非表示にするclassを付加するかどうか。
     */
    isClosed: boolean;

    /**
     * レスポンシブ表示時にナビゲーターメニューを表示するかどうか。（非レスポンシブ表示時にはこの値によらず常に表示する。）
     */
    isNavigatorOpen: boolean;
}

/**
 * 画面上部に固定表示されるヘッダー部分を表す。ナビゲーションメニューを含む。一定以上スクロールした場合に非表示にする。
 */
export default class HeaderArea extends React.Component<{}, HeaderState> {

    readonly navMenuItems = [
        {label: "About Me.", href: "#aboutMe"},
        {label: "Works", href: "#works"},
        {label: "Links", href: "#links"},
    ];

    /**
     * このスクロールY位置を超えた場合にヘッダを非表示にする。
     */
    readonly headerRef: RefObject<any>;

    /**
     * 初期化する。
     * @param props
     */
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

    /**
     * 出力する。
     */
    render(): JSX.Element {
        return <>
            <header ref={this.headerRef} className={style.header + (this.state.isClosed ? ` ${style.closed}` : ``)}>

                <div className={style.titleText}>Phinesze</div>

                <NavButton onClick={() => this.openNavigator()} />

                <NavMenu isOpen={this.state.isNavigatorOpen} menuItems={this.navMenuItems}/>
            </header>
        </>;
    }

    /**
     * スクロール時にヘッダを非表示にするか否かの判定を行う。
     */
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