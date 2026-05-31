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

### プレーヤー

***設定***

`fcs("Player _config PlayerName life totalCost point status hc");`

＊hc = Hand of card

***変更***

<life>

`fcs("Player _change
