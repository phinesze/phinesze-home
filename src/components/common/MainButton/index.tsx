import React from "react"
import style from "./MainButton.css"

interface MainButtonProps {
    type: string;
    text: String;
    onClick: (event?: any) => void;
}

export default class MainButton extends React.Component<MainButtonProps , {}> {

    constructor(props: MainButtonProps ) {
        super(props);

        this.state = {}
    }

    render(): JSX.Element {
        return <button type={this.props.type} className={style.button} onClick={this.props.onClick}>
            {this.props.text}
        </button>;
    }

}