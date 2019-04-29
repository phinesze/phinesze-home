import React from "react"
import style from "./Footer.css"

export default class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <footer className={style.footer}>
            <div/>
        </footer>;
    }

}