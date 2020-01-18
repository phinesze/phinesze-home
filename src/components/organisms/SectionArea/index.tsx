import React from "react";
import style from "./SectionArea.css";
import SectionTitleArea from "../SectionTitleArea/index";

/**
 * SectionAreaのプロパティ一覧
 */
interface SectionAreaProps {
  /**
   * セクション部分のid属性の値
   */
  id?: string;

  /**
   * セクション見出し部分のタイトル文字列
   */
  title: string;

  /**
   * セクション見出し部分のclass属性の値
   */
  sectionTitleClass: string;

  /**
   * セクション本文部分のclass属性の値
   */
  sectionBodyClass: string;
}

/**
 * AboutMe, Worksなどの各セクション部分を表す。セクションの見出し部分の領域を含み、セクション本文を子要素に内包させて記述できる。
 */
export default class SectionArea extends React.Component<SectionAreaProps> {
  /**
   * 初期化する。
   * @param props
   */
  constructor(props: SectionAreaProps) {
    super(props);

    this.state = {
      isClosed: false,
    };
  }

  /**
   * セクションの見出し部分と子要素として記述したセクション本文を出力する。
   */
  render(): JSX.Element {
    return (
      <div id={this.props.id} className={style.sectionArea}>
        <SectionTitleArea title={this.props.title} sectionTitleClass={this.props.sectionTitleClass}></SectionTitleArea>
        <div className={style.sectionBody + " " + this.props.sectionBodyClass}>{this.props.children}</div>
      </div>
    );
  }
}
