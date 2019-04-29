import React from "react"
import style from "./SectionArea.css"


interface SectionAreaProps {
    title: string;
    sectionHeadClass: string;
}

interface SectionAreaState {

}

export default class SectionArea extends React.Component<SectionAreaProps, SectionAreaState> {

    constructor(props: SectionAreaProps) {
        super(props);

        this.state = {
            isClosed: false
        }
    }

    render(): JSX.Element {
        return <div className={style.sectionArea + ' ' + this.props.sectionHeadClass}>
            <div className={style.sectionTitle}>
                <span className={style.sectionTitleText}>{this.props.title}</span>
            </div>
            <div className={style.sectionBody}>
                {this.props.children}
            </div>
        </div>;
    }

}