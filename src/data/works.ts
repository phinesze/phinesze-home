import {SquareMenuItemParams} from "../components/common/SquareMenu/SquareMenuItem";

export interface Work extends SquareMenuItemParams {
    detail: {
        descriptions: {
            title: string,
            text: string
        }[],
        images:  string[]
    }
}

const works: Work[] = [
    {
        id: "0",
        img: "",
        url: '/works/coltvox',
        text: "企業ウェブサイトの新規開発",
        detail: {
            descriptions: [
                {
                    title: "時期",
                    text: "2015年4月頃",
                },
                {
                    title: "システム概要",
                    text: "企業ウェブサイトのリニューアルに伴いレスポンシブ対応、かつパララックスの視覚効果に対応したのウェブページの開発を行う。",
                },
                {
                    title: "担当フェーズ",
                    text: "フレームワークの選定、詳細設計、製造"
                },
                {
                    title: "担当業務",
                    text: "要件定義と画面イメージを基として、要求された視覚効果のリクエストに応じて、jQueryフレームワークの選定とHTML5、 CSS3、 JavaScriptのコーディングを行いました。"
                }
            ],
            images: [
                require("../images/works/coltvox/01.png"),
                require("../images/works/coltvox/02.png"),
                require("../images/works/coltvox/03.png"),
                require("../images/works/coltvox/04.png"),
                require("../images/works/coltvox/05.png"),
                require("../images/works/coltvox/06.png"),
                require("../images/works/coltvox/07.png"),
            ],
        }
    },
    {
        id: "1",
        img: "",
        url: "/works/sumashin",
        text: "ネット診断サービス/Webアプリケーション改修",
        detail: {
            descriptions: [
                {
                    title: "時期",
                    text: "2018年3月頃"
                },
                {
                    title: "システム概要",
                    text: "診断内容やクリニックを選択して、医師とのチャットを行い診断を行うアプリサービス。\n" +
                        "本人確認画像を送信して登録を行い、その後症状とクリニックを選択してチャットを開始して処方箋を受け取る。\n"
                },
                {
                    title: "担当フェーズ",
                    text: "製造",
                },
                {
                    title: "担当業務",
                    text: "画面イメージに従い、HTML、 CSS3、 JavaScriptを用いて本人確認画像送信画面、クリニック選択画面、チャット画面などのフロントエンド部分を改修する形でコーディングを行いました。また、画面設計の都合上、DBカラムをっ追加が望ましい場合など、必要に応じてメンバーに提案を行いました。\n"
                },
                {
                    title: "言語",
                    text: "JavaScript、 HTML5、 CSS3、 Ruby(Ruby on Rails)"
                },
                {
                    title: "DB",
                    text: "MySQL、 Firebase"
                },
                {
                    title: "リンク",
                    text: "https://sumaluna.com/"
                }
            ],
            images: [
                // image1,
                // image2
            ]
        }

    },

];

export default works;

