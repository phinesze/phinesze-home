import React from "react";
import { Link } from "react-router-dom";

interface Props {
  href: string;
  children?: React.ReactNode;
}

/**
 * 通常の外部リンクまたは、ReactRouterのリンクを使い分けるリンク要素
 */
export default class MultiLink extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    if (this.props.href.charAt(0) === "/") {
      return <Link to={this.props.href}>{this.props.children}</Link>;
    } else {
      return <a href={this.props.href}>{this.props.children}</a>;
    }
  }
}
