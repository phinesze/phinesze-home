import React from "react";
import Header from "./components/HeaderArea/index";
import Footer from "./components/Footer/index";
import style from "./App.css";
import SectionArea from "./components/SectionArea/index";
import MainButton from "./components/common/MainButton/index";
import SquareView from "./components/common/SquareView/index";

export default class App extends React.Component<{}, {}> {

    timeInterval: number | null = null;

    constructor(props: any) {
        super(props);
    }

    render() {

        let svItems = [
            {id: "0", img: "0"},
            {id: "1", img: "1"},
            {id: "2", img: "2"},
            {id: "3", img: "3"},
            {id: "4", img: "4"},
            {id: "5", img: "5"},
            {id: "6", img: "6"},
            {id: "7", img: "7"},
            {id: "8", img: "8"},
            {id: "9", img: "9"},
            {id: "10", img: "10"},
            {id: "11", img: "11"},
            {id: "12", img: "12"},
            {id: "13", img: "13"}
        ];

        return <div className={style.react_top}>

            <Header/>
            <div className={style.main}>
                <section className={style.title}>
                    タイトル
                </section>

                <SectionArea title={"About Me."} sectionHeadClass={"cls"}>
                    Now constructing...
                </SectionArea>

                <SectionArea title={"Works"} sectionHeadClass={"cls"}>

                    Now constructing...
                    <SquareView items={svItems}/>
                    <MainButton type="button" text="button" onClick={() => {
                    }}/>
                </SectionArea>

                <SectionArea title={"My Labo"} sectionHeadClass={"cls"}>
                    Now constructing...
                </SectionArea>
            </div>
            <Footer/>

        </div>;
    }
}