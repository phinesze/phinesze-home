import React from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";

import HeaderArea from "./components/organisms/HeaderArea/index";
import Footer from "./components/organisms/Footer/index";
import style from "./App.css";
import SectionArea from "./components/organisms/SectionArea/index";
import SquareMenu from "./components/molecules/SquareMenu/index";

import works from "./data/works";
import links from "./data/links";
import AboutMe from "./components/organisms/AboutMe/index";
import Overlay from "./components/atoms/Overlay/index";
import WorksDetail from "./components/organisms/WorksDetail/index";

const titleImage = require("./images/titleImage.svg");
const titleText = require("./images/titleText.svg");
const worksMenuBackground = require("./images/worksMenuItem.svg");
const linksMenuBackground = require("./images/menuItem.svg");

/**
 * アプリケーションの最上位のコンポーネント
 */
class App extends React.Component<RouteComponentProps, {}> {

    /**
     * Works詳細オーバーレイを表示するかどうかの値を取得する。
     */
    get displayingOverlay(): boolean{
        return this.props.location.pathname.startsWith("/works/");
    }

    /**
     * 初期化する。
     * @param props
     */
    constructor(props: any) {
        super(props);
    }

    /**
     * トップ画面に戻る。
     */
    back() {
        this.props.history.push("/");
    }

    /**
     * 出力する。
     */
    render() {

        return <div className={style.reactTop}>
            <HeaderArea/>
            <div className={style.main}>
                <section className={style.title}>
                    <img className={style.titleImage} src={titleImage} alt="Phinesze ロゴ"/>
                    <img className={style.titleText} src={titleText} alt="Phinesze"/>
                </section>

                <SectionArea id={"aboutMe"} title={"About Me."} sectionTitleClass={style.aboutMeSectionTitle} sectionBodyClass={style.aboutMeSectionBody}>
                    <AboutMe/>
                </SectionArea>

                <SectionArea id={"works"} title={"Works"} sectionTitleClass={style.worksSectionTitle} sectionBodyClass={style.worksSectionBody}>
                    <SquareMenu items={works} background={worksMenuBackground}/>
                </SectionArea>

                <SectionArea id={"links"} title={"Links"} sectionTitleClass={style.linksSectionTitle} sectionBodyClass={style.linksSectionBody}>
                    <SquareMenu items={links} background={linksMenuBackground}/>
                </SectionArea>
            </div>
            <Footer/>
            {this.displayingOverlay && <Overlay>
                <WorksDetail data={works} url={this.props.history.location.pathname} onBack={() => this.back()}/>
            </Overlay>}

        </div>;
    }
}

//react routerの機能付きで出力する。
export default withRouter(App);