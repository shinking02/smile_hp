# SMILE_HP

手話ダンスサークル(スマイル)のホームページです。

## 環境

-   本番: `https://www.smile-sign.com`
-   ステージング: `https://www.smile-sign-staging.com`

## 開発

React + TypeScript + Viteで構成されており、Vercelにデプロイされています。

## ブログの運用について

### 記述ルール

ブログの記事を追加する場合は、`/blogs`ディレクトリ内に`YYYY-MM-DD`形式のディレクトリを作成し、その中に`blog.md`を配置しそこに記述してください。`/blogs`ディレクトリはデプロイ後、Vercel Functions内でアクセスできます。
`blog.md`には必ず一つ以上のH1タグ(`# 見出し`)を含めるようにしてください。

### 画像

画像が一つ以上存在する場合は先頭の画像がサムネイルとして使用されます。
画像はVercel Blob内に`YYYY-MM-DD`のディレクトリを作成し、その中に保存するようにしてください。
