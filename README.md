## 概要
ブラウザで音声の自動再生をできるようにします。

## 使い方

### 基本
<script src="jsplay.js"></script>を一番上で読み込ませる。    
`play()` = アンロック用トリガー  
`stop()` = 再生したい音を鳴らす前に停止  
*JavaScriptは、実際に実行するファイルの位置で階層を解釈するので必要に応じて`jsplay.js`内の`mute.mp3`を実行させるファイルから見た位置を指定してください。例:`JSAudioUnlocker/mute.mp3`

## 更新履歴
v0.0.1
- 簡易的な仕組みで実装

## 実装予定
同じ音声の多重再生、アンロック処理の改善など。  
音声が途切れて再生される問題を解決したい。(これは治るときもあるのでブラウザの問題化も)

