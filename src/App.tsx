import React from "react";
import Header from "./components/HeaderArea/index";
import Footer from "./components/Footer/index";
import style from "./App.css";
import SectionArea from "./components/SectionArea/index";
import MainButton from "./components/common/MainButton/index";
import SquareMenu from "./components/common/SquareMenu/index";

import works from "./data/works";
import links from "./data/links";

const aboutMe = require("raw-loader!./data/aboutMe.txt");

export default class App extends React.Component<{}, {}> {

    aboutMe: string = aboutMe.default;

    constructor(props: any) {
        super(props);
    }

    render() {

        // let works = data.works;

        return <div className={style.react_top}>

            <Header/>
            <div className={style.main}>
                <section className={style.title}>
                    タイトル
                </section>

                <SectionArea title={"About Me."} sectionHeadClass={"cls"}>
                    サンプルテキストですサンプルテキストですサンプルテキストですサンプルテキストですサンプルテキストですサンプルテキストです
                    サンプルテキストですサンプルテキストですサンプルテキストですサンプルテキストですサンプルテキストですサンプルテキストです
                    サンプルテキストですサンプルテキストですサンプルテキストですサンプルテキストですサンプルテキストですサンプルテキストです
                    サンプルテキストですサンプルテキストですサンプルテキストですサンプルテキストですサンプルテキストですサンプルテキストです
                </SectionArea>

                <SectionArea title={"Works"} sectionHeadClass={style.works_session_area}>
                    <SquareMenu items={works}/>
                    <p className={style.now_constructing}>Now constructing...</p>
                </SectionArea>

                <SectionArea title={"Links"} sectionHeadClass={style.links_section_area}>
                    <SquareMenu items={links}/>
                    <MainButton type="button" text="button" onClick={() => {
                    }}/>
                </SectionArea>

            </div>
            <Footer/>

        </div>;
    }
}