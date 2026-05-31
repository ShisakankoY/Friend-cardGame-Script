# Friend-cardGame-Script(FCS)

## 概要

Friend-cardGame-Script(以下:FCS)は、JavaScriptベースの、カードゲームデータ管理DSLです。
本来のJavaScriptに併用してお使いいただくことをおすすめします。
MITライセンスを使用しています。ご注意ください。

## 文法

＊複数行記述に対応しています。
＊(一部)必要のない項目はnoneなど、好きな値を入れてください。

### カード

***クリエイト***

`fcs("Card _create CardName cost hp kinds attack elem tag");`

***hp変更***

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

life = プレイヤーのライフ, totalCost =　プレイヤーの持っているコスト, point = プレイヤーの得点, status = プレイヤーの状態, hc = プレーヤーの手札

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
