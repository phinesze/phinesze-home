import React from "react";
import style from "./NavButton.css";

interface NavButtonProps {
  onClick: () => void;
}

export default class NavButton extends React.Component<NavButtonProps> {
  constructor(props: NavButtonProps) {
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
