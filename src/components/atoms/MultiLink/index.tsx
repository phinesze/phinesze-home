import React from "react"
import {Link} from "react-router-dom";

interface MultiLinkProps {
    href: string;
    children: any;
}

export default class MultiLink extends React.Component<MultiLinkProps> {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        if ((this.props.href.charAt(0) === '/')) {
            return <Link to={this.props.href}>{this.props.children}</Link>;
        } else {
            return <a href={this.props.href}>{this.props.children}</a>
        }
    }
}