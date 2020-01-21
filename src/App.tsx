import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import HeaderArea from "./components/organisms/HeaderArea/HeaderArea";
import Footer from "./components/organisms/Footer/Footer";
import style from "./App.css";
import SectionArea from "./components/organisms/SectionArea/SectionArea";
import SquareMenu from "./components/molecules/SquareMenu/SquareMenu";

import works from "./data/works";
import links from "./data/links";
import AboutMe from "./components/organisms/AboutMe/AboutMe";
import Overlay from "./components/atoms/Overlay/Overlay";
import WorksDetail from "./components/organisms/WorksDetail/WorksDetail";

import titleImage from "./images/titleImage.svg";
import titleText from "./images/titleText.svg";
import worksMenuBackground from "./images/worksMenuItem.svg";
import linksMenuBackground from "./images/menuItem.svg";

/**
 * アプリケーションの最上位のコンポーネント
 */
class App extends React.Component<RouteComponentProps> {
  /**
   * Works詳細オーバーレイを表示するかどうかの値を取得する。
   */
  get displayingOverlay(): boolean {
    return this.props.location.pathname.startsWith("/works/");
  }

  constructor(props: RouteComponentProps) {
    super(props);
  }

  /**
   * トップ画面に戻る。
   */
  back(): void {
    this.props.history.push("/");
  }

  render(): JSX.Element {
    return (
      <div className={style.reactTop}>
        <HeaderArea />
        <div className={style.main}>
          <section className={style.title}>
            <img className={style.titleImage} src={titleImage} alt="Phinesze ロゴ" />
            <img className={style.titleText} src={titleText} alt="Phinesze" />
          </section>

          <SectionArea
            id={"aboutMe"}
            title={"About Me."}
            sectionTitleClass={style.aboutMeSectionTitle}
            sectionBodyClass={style.aboutMeSectionBody}
          >
            <AboutMe />
          </SectionArea>

          <SectionArea
            id={"works"}
            title={"Works"}
            sectionTitleClass={style.worksSectionTitle}
            sectionBodyClass={style.worksSectionBody}
          >
            <SquareMenu items={works} background={worksMenuBackground} />
          </SectionArea>

          <SectionArea
            id={"links"}
            title={"Links"}
            sectionTitleClass={style.linksSectionTitle}
            sectionBodyClass={style.linksSectionBody}
          >
            <SquareMenu items={links} background={linksMenuBackground} />
          </SectionArea>
        </div>
        <Footer />
        {this.displayingOverlay && (
          <Overlay>
            <WorksDetail data={works} url={this.props.history.location.pathname} onBack={(): void => this.back()} />
          </Overlay>
        )}
      </div>
    );
  }
}

//react routerの機能付きで出力する。
export default withRouter(App);
