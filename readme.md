#このプログラムについて

自身のポータルページをdocker,webpack,reactで作成いたしました。

#プロジェクト構成
  プロジェクトphinesze-hello はwebpack,reactでWebフロントエンド部分を動作させる1つのdockerコンテナで構成されています。

トップフォルダ内の直下に**Dockerfile**と**docker-compose.yml**が用意されています。
#コンテナ実行/テスト方法
- コンテナのビルド方法
  - トップフォルダで **"npm run docker-compose"** を実行してください。
(package.json にてコマンド "docker-compose up --build" を実行するよう記されています。)
- 開発サーバーでの実行方法
  - **"npm run start"** を実行の後、webブラウザで **localhost:8080**を開いてください。
  webpack-dev-serverは変更を自動的に検出して再表示します。