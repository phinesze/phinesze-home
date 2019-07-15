import React from "react";
import Header from "./components/HeaderArea/index";
import Footer from "./components/Footer/index";
import style from "./App.css";
import SectionArea from "./components/SectionArea/index";
import SquareMenu from "./components/common/SquareMenu/index";

import works from "./data/works";
import links from "./data/links";
import AboutMe from "./components/AboutMe/index";


export default class App extends React.Component<{}, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {

        // let works = data.works;

        return <div className={style.reactTop}>

            <Header/>
            <div className={style.main}>
                <section className={style.title}>
                    タイトル
                </section>

                <SectionArea title={"About Me."} sectionTitleClass={style.aboutMeSectionTitle} sectionBodyClass={style.aboutMeSectionBody}>
                    <AboutMe/>
                </SectionArea>

                <SectionArea title={"Works"} sectionTitleClass={style.worksSectionTitle} sectionBodyClass={style.worksSectionBody}>
                    <SquareMenu items={works}/>
                    <p>Now constructing...</p>
                </SectionArea>

                <SectionArea title={"Links"} sectionTitleClass={style.linksSectionTitle} sectionBodyClass={style.linksSectionBody}>
                    <SquareMenu items={links}/>
                </SectionArea>

            </div>
            <Footer/>

        </div>;
    }
}