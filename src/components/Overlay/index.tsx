import React from "react"
import style from "./Overlay.css";

interface WorksProps {
    children: any;
}

interface WorksState {

}

export default class Overlay extends React.Component<WorksProps, WorksState> {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <div className={style.overlay}>
            {this.props.children}
        </div>;
    }
}