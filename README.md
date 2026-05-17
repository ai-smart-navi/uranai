# love tips 恋愛相談LP

Instagramアカウント `@love_tips000` からの流入を想定した、恋愛相談・恋愛改善サポート用のスマホファーストLPです。

## セットアップ

```bash
npm install
npm run dev
```

PowerShellの実行ポリシーで `npm` が止まる場合は、Windowsでは以下で実行できます。

```bash
cmd /c npm.cmd install
cmd /c npm.cmd run dev
```

開発サーバーは通常 `127.0.0.1:5173` で起動します。すでに使用中の場合はViteが次の空きポートを表示します。

この環境では日本語パス上で一部のNode/esbuild実行が不安定になるため、`scripts/run-vite.cjs` がCodex同梱Nodeを優先してViteを起動します。通常の環境では現在のNodeを使って動きます。

## 編集するファイル

- 商品名・価格・説明・相談内容・申し込みリンク・人気バッジ
  `src/data/products.ts`
- FAQの質問と回答  
  `src/data/faqs.ts`
- LINE、申し込み、Instagram、フッターの基本リンク  
  `src/data/site.ts`
- 生成画像・装飾素材  
  `public/images/`

商品を追加する場合は、`src/data/products.ts` の `products` 配列に同じ形のオブジェクトを追加してください。

## 画像素材

このLP用に生成した素材は `public/images/` に保存しています。

- `lp-mockup.png`: 実装参考用のスマホLPモックアップ
- `hero-visual.png`: ヒーロー用の恋愛相談系キャラクタービジュアル
- `hero-bg.png`: ヒーロー背景用の淡い恋愛系背景
- `decorations.png`: 月・星・水晶・ハート・リボン系の装飾素材
- `decorations-source.png`: 透明化前の装飾素材

本文、商品名、CTAなどの重要なテキストは画像ではなくHTMLで実装しています。

## ビルド

```bash
npm run build
```

`dist/` が生成されます。Vercel、Netlify、Cloudflare Pagesなどでは、ビルドコマンドに `npm run build`、公開ディレクトリに `dist` を指定してください。

## 表現方針

成果を断定する表現は使わず、恋を整理するためのヒントとして安心して読める文言にしています。
