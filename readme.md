# このプログラムについて

自身のポータルページをdocker,webpack,reactで作成いたしました。

# プロジェクト構成
  プロジェクトphinesze-hello はwebpack,reactでWebフロントエンド部分を動作させる1つのdockerコンテナで構成されています。

トップフォルダ内の直下に**Dockerfile**と**docker-compose.yml**が用意されています。
# コンテナ実行方法
- コンテナのビルド・デプロイ方法
  - トップフォルダで **"npm run deploy"** を実行してください。
  (npxが使用可能なnpmのバージョン5.2.0以上がインストールされている事が条件です)
  (package.json にてコマンド 
    "npm install", "npx webpack --config webpack.prod.js", "docker-compose up -d --build" を実行するよう記されています。)
- 開発サーバーでの実行方法
  - **"npm run start"** を実行の後、webブラウザで **localhost:8080**を開いてください。
  (package.jsonにてwebpack-dev-serverを起動するように記されています。 webpack-dev-serverは変更を自動的に検出して再表示します。
)
