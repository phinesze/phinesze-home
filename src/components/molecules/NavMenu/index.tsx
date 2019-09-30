import React, {RefObject} from "react"
import style from "./NavMenu.css"
import MultiLink from "../../atoms/MultiLink/index";

interface NavMenuProps {
    menuItems: {
        label: string;
        href: string;
    }[];

    /**
     * レスポンシブ表示時にナビゲーターメニューを表示するかどうか。（非レスポンシブ表示時にはこの値によらず常に表示する。）
     */
    isOpen: boolean;
}

interface NavMenuState {
}


export default class NavMenu extends React.Component<NavMenuProps, NavMenuState> {

    /**
     * このスクロールY位置を超えた場合にヘッダを非表示にする。
     */
    readonly headerRef: RefObject<any>;

    constructor(props: NavMenuProps) {
        super(props);
    }

    render(): JSX.Element {
        return <nav className={style.navigator + " " + (this.props.isOpen ? style.open : "")}>
            {this.props.menuItems.map((item) =>
                <MultiLink key={item.label} href={item.href}>
                    <li>{item.label}</li>
                </MultiLink>
            )}
        </nav>
    }
}