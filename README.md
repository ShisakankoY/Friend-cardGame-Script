# Friend-cardGame-Script(FCS)

// Japanese

## 概要

Friend-cardGame-Script(以下:FCS)は、JavaScriptベースの、カードゲームデータ管理DSLです。
本来のJavaScriptに併用してお使いいただくことをおすすめします。
MITライセンスを使用しています。ご注意ください。

## 文法

＊複数行記述に対応しています。

＊(一部)必要のない項目はnoneなど、好きな値を入れてください。

＊値の意味は、開発に応じて意味を変えていただいても構いません。(コストの捉え方など！)

### カード

***クリエイト***

`fcs("Card _create CardName cost hp kinds attack elem tag");`

***変更***

`fcs("Card _change cost CardName value");`

`fcs("Card _change hp CardName value");`

cost = カードのコスト, hp = カードの体力, kinds = カードの種類, attack = カードの攻撃力, elem = カードの属性, tag =　カードのタグ

### プレイヤー

***設定***

`fcs("Player _config PlayerName life totalCost point status hc");`

＊hc = Hand of card

***変更***

`fcs("Player _change life PlayerName value");`

`fcs("Player _change totalCost PlayerName value");`

`fcs("Player _change point PlayerName value");`

`fcs("Player _change status PlayerName value");`

`fcs("Player _change hc PlayerName value");`

life = プレイヤーのライフ, totalCost = プレイヤーの持っているコスト, point = プレイヤーの得点, status = プレイヤーの状態, hc = プレーヤーの手札

### ゲーム全体

***設定***

`fcs("Game _config initialLife initialHc deck");`;

initialLife = 初期ライフ, initialHc = 初期手札, deck = 山札

### 削除

`fcs("Delete _card");`

`fcs("Delete _player");`

`fcs("Delete _game");`

### オブジェクト

`window.fcs_obj`

＊このスクリプトはオブジェクトを返します。

## 使い方

htmlファイルに以下を記述してください。

`<script src="https://shisakankoy.github.io/Friend-cardGame-Script/fcs.js">`

// English

## Overview

Friend-cardGame-Script (hereinafter: FCS) is a JavaScript-based DSL for managing card game data.

We recommend using it in conjunction with standard JavaScript.

It uses the MIT license. Please note this.

## Syntax

* Supports multi-line entries.

* (Some) unnecessary items can be entered with values ​​such as `none`.

* You are free to change the meaning of the values ​​as needed during development (for example, how you interpret costs!).


### Card

***Create***

`fcs("Card _create CardName cost hp kinds attack elem tag");`

***Change***

`fcs("Card _change cost CardName value");`

`fcs("Card _change hp CardName value");`

cost = Card cost, hp = Card's health, kinds = Card type, attack = Card's attack power, elem = Card attribute, tag = Card's tag

### Player

***Settings***

`fcs("Player _config PlayerName life totalCost point status hc");`

*hc = Hand of card

***Change***

`fcs("Player _change life PlayerName value");`

`fcs("Player _change totalCost PlayerName value");`

`fcs("Player _change point PlayerName value");`

`fcs("Player _change status PlayerName value");`

`fcs("Player _change hc PlayerName value");`

life = Player's life, totalCost = Player's cost, point = Player's score, status = Player's status, hc = Player's hand

### Game Overview

***Settings***

`fcs("Game _config initialLife initialHc deck");`;

initialLife = Initial life, initialHc = Initial hand, deck = Deck

### Deletion

`fcs("Delete _card");`

`fcs("Delete _player");`

`fcs("Delete _game");`

### Object

`window.fcs_obj`

*This script returns an object.

## How to Use

Add the following to your HTML file:

`<script src="https://shisakankoy.github.io/Friend-cardGame-Script/fcs.js">`
