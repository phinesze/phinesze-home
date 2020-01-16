import React from "react"
import style from "./AboutMe.css"

export default class AboutMe extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <div>
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
        </div>;
    }

}