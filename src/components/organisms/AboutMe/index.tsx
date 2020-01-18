import React from "react"
import style from "./AboutMe.css"
import EffectiveBlock from "../../atoms/EffectiveBlock/index";

export default class AboutMe extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <div className={style.aboutMe}>
            <EffectiveBlock>
                <span>PHP、java、JavaScriptなどを使用したフロントエンド／バックエンドのWebの開発を行っていきました。</span>
            </EffectiveBlock>

            <EffectiveBlock>
                <div className={style.mainSkill}>主なスキル</div>
            </EffectiveBlock>

            <EffectiveBlock>
                <ul>
                    <li><span>HTML5, CSS3, TypeScript,JavaScriptなどのフロントエンドのコーディング（Angular,Reactなどのフレームワーク経験あり。レスポンシブデザインに対応）</span></li>
                    <li><span>Wordpressを使用したWebページの制作</span></li>
                    <li><span>php, java, VB.net、バックエンドのコーディング、クラス設計</span></li>
                    <li><span>Laravel(PHP), ASP.net mvcなどのフレームワークの使用</span></li>
                    <li><span>MySQL、SQLServerなどのテーブル設計、SQLコーディング、ストアドプロシージャのコーディング</span></li>
                </ul>
            </EffectiveBlock>
        </div>;
    }

}