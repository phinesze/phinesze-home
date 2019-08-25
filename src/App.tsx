import React from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";

import Header from "./components/HeaderArea/index";
import Footer from "./components/Footer/index";
import style from "./App.css";
import SectionArea from "./components/SectionArea/index";
import SquareMenu from "./components/common/SquareMenu/index";

import works from "./data/works";
import links from "./data/links";
import AboutMe from "./components/AboutMe/index";
import Overlay from "./components/Overlay/index";
import WorksDetail from "./components/WorksDetail/index";

const titleImage = require("./images/phineszeHomeTitle.svg");
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
            <Header/>
            <div className={style.main}>
                <section className={style.title}>
                    <img className={style.titleImage} src={titleImage} alt="Phinesze ロゴ"/>
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