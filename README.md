# 🐺 NestJS Practical Learning Contents
* NestJS初学者向けの **実践を意識したサンプルアプリケーション構築** の教材です。
* 他APIに通信して結果を返却するBFF（Backend for Frontend）を想定して課題を設定しています。

<br />

# 🔥 Challenge

## Overview
* Qiita記事情報を返却するREST APIを「NestJS」で構築してください。
* 指定した件数の最新Qiita記事のタイトルと作成日時を返却します。
* リクエストエラーとシステムエラーも返却してください。

## Detail

### Request

`GET /qiita/items?count=3`

* GETリクエストで、パスは`/qiita/items`で、クエリストリングとして`count`（任意項目）
* `count`の指定が無い場合は、`count`を1として処理して最新の1件のみ返却する

### Response

#### 正常

* 最新Qiita記事のタイトルと作成日時を配列で作成日時の降順で返却
* JSONルートはオブジェクト`{}`で、`results`項目として配列で返却
* タイトルは`title`、作成日時は`created_at`
* 返却する件数はリクエストでパラメータ（クエリストリング）指定した数

```
{
  "results": [
    {
      "title": "タイトル1"
      "created_at": "2000-03-01T00:00:00+00:00"
    },
    {
      "title": "タイトル2"
      "created_at": "2000-02-01T00:00:00+00:00"
    },
    {
      "title": "タイトル3"
      "created_at": "2000-01-01T00:00:00+00:00"
    }
  ]
}
```

#### 異常

##### リクエストエラー

* リクエストが不正な場合は「リクエストエラー」のメッセージを返却
* 以下のケースをリクエストエラーと判定
  * パスが間違っているとき
  * `count`が10より大きいとき

```
{
  "errors": [
    {
      "message": "リクエストエラー"
    }
  ]
}
```

##### システムエラー

* 予期しない例外が発生したときは「システムエラー」のメッセージを返却

```
{
  "errors": [
    {
      "message": "システムエラー"
    }
  ]
}
```

<br />

# 💡 Hint

## Qiitaの記事情報にアクセスするには？

* 構築するREST APIの中で外部の別のREST API（Qiita API）を呼びます
  * `GET https://qiita.com/api/v2/items`
* Qiita APIは認証しない状態でもIPアドレスごとに1時間に60回までリクエスト可能です

<br />
