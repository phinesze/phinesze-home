import React from "react";
import style from "./NavButton.css";

interface Props {
  onClick: () => void;
}

/**
 * ヘッダー部分に使用するナビゲーションメニューを表示させるためのボタン。縮小表示時にのみ表示される。
 */
export default class NavButton extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className={style.navButton} onClick={(): void => this.props.onClick()}>
        <div className={style.navButtonBar} />
        <div className={style.navButtonBar} />
        <div className={style.navButtonBar} />
      </div>
    );
  }
}
