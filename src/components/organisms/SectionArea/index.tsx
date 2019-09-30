import React from "react"
import style from "./SectionArea.css"


interface SectionAreaProps {
    id?: string;
    title: string;
    sectionTitleClass: string;
    sectionBodyClass: string;
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
        return <div id={this.props.id} className={style.sectionArea}>
            <div className={style.sectionTitle + ' ' + this.props.sectionTitleClass}>
                <span className={style.sectionTitleText}>{this.props.title}</span>
            </div>
            <div className={style.sectionBody + ' ' + this.props.sectionBodyClass}>
                {this.props.children}
            </div>
        </div>;
    }

}