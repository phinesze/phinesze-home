import React from "react";
import style from "./SectionAreaTitle.css";
import EffectiveBlock from "../../atoms/EffectiveBlock/EffectiveBlock";

interface Props {
  /**
   * セクション見出し部分のタイトル文字列
   */
  title: string;

  /**
   * セクション見出し部分のclass属性の値
   */
  sectionTitleClass: string;
}

/**
 * AboutMe, Worksなどの各セクション部分を表す。セクションの見出し部分の領域を含み、セクション本文を子要素に内包させて記述できる。
 */
export default class SectionTitle extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className={style.sectionTitleArea + " " + this.props.sectionTitleClass}>
        <EffectiveBlock>
          <span className={style.sectionTitleAreaText}>{this.props.title}</span>
        </EffectiveBlock>
      </div>
    );
  }
}
