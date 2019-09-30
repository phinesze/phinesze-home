import React, {RefObject} from "react"
import style from "./NavButton.css"

interface  NavButtonProps {
    onClick: () => void
}

export default class NavButton extends React.Component<NavButtonProps> {

    /**
     * このスクロールY位置を超えた場合にヘッダを非表示にする。
     */
    readonly headerRef: RefObject<any>;

    constructor(props: NavButtonProps) {
        super(props);
        this.headerRef = React.createRef();
    }

    render(): JSX.Element {
        return <div className={style.navButton} onClick={() => this.props.onClick()}>
            <div className={style.navButtonBar}/>
            <div className={style.navButtonBar}/>
            <div className={style.navButtonBar}/>
        </div>;
    }

}