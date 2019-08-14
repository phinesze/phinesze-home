import React from "react"
import style from "./WorksDetail.css";
import MainButton from "../common/MainButton/index";

interface WorksProps {
    onBack: (event?: any) => void;
}

interface WorksState {

}

export class WorksDetail extends React.Component<WorksProps, WorksState> {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <>
            <section className={style.worksDetail}>
                <div>WORKS詳細</div>
            </section>
            <MainButton type="button" text="閉じる" onClick={this.props.onBack}/>
        </>;
    }
}