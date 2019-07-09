import React from "react";
import Header from "./components/HeaderArea/index";
import Footer from "./components/Footer/index";
import style from "./App.css";
import SectionArea from "./components/SectionArea/index";
import SquareMenu from "./components/common/SquareMenu/index";

import works from "./data/works";
import links from "./data/links";


export default class App extends React.Component<{}, {}> {

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
                    {App.renderAboutMe()}
                </SectionArea>

                <SectionArea title={"Works"} sectionHeadClass={style.works_session_area}>
                    <SquareMenu items={works}/>
                    <p className={style.now_constructing}>Now constructing...</p>
                </SectionArea>

                <SectionArea title={"Links"} sectionHeadClass={style.links_section_area}>
                    <SquareMenu items={links}/>
                </SectionArea>

            </div>
            <Footer/>

        </div>;
    }

    static renderAboutMe() {
        return <React.Fragment>
            <p>PHP、java、JavaScriptなどを使用したフロントエンド／バックエンドのWebの開発を行っていきました。</p>
            <p> 主なスキル </p>
            <ul>
                <li> HTML5, CSS3, TypeScript, JavaScriptなどのフロントエンドのコーディング（Angular,
                    Reactなどのフレームワーク経験あり。レスポンシブデザインに対応）
                </li>
                <li>Wordpressを使用したWebページの制作</li>
                <li>php, java, VB.net、バックエンドのコーディング、クラス設計</li>
                <li>Laravel(PHP), ASP.net mvcなどのフレームワークの使用</li>
                <li>MySQL、SQLServerなどのテーブル設計、SQLコーディング、ストアドプロシージャのコーディング</li>
            </ul>
        </React.Fragment>;
    }
}