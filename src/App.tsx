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
import {WorksDetail} from "./components/WorksDetail/index";

const titleImage = require("./images/phineszeHomeTitle.svg");
const worksMenuBackground = require("./images/worksMenuItem.svg");
const linksMenuBackground = require("./images/menuItem.svg");

class App extends React.Component<RouteComponentProps, {}> {

    constructor(props: any) {
        super(props);
    }

    get displayingOverlay(): boolean{
        return this.props.location.pathname.startsWith("/works/");
    }

    render() {

        return <div className={style.reactTop}>

            <Header/>
            <div className={style.main}>
                <section className={style.title}>
                    <img className={style.titleImage} src={titleImage} alt="Phinesze ロゴ"/>
                </section>

                <SectionArea title={"About Me."} sectionTitleClass={style.aboutMeSectionTitle} sectionBodyClass={style.aboutMeSectionBody}>
                    <AboutMe/>
                </SectionArea>

                <SectionArea title={"Works"} sectionTitleClass={style.worksSectionTitle} sectionBodyClass={style.worksSectionBody}>
                    <SquareMenu items={works} background={worksMenuBackground}/>
                </SectionArea>

                <SectionArea title={"Links"} sectionTitleClass={style.linksSectionTitle} sectionBodyClass={style.linksSectionBody}>
                    <SquareMenu items={links} background={linksMenuBackground}/>
                </SectionArea>
            </div>
            <Footer/>
            {this.displayingOverlay && <Overlay>
                <WorksDetail></WorksDetail>
            </Overlay>}

        </div>;
    }
}

export default withRouter(App);