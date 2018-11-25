<template>
  <div id="index">
    <div class="header">
        <header>
            <h1>IKEMIZU DAIKI</h1>
            <div>
                <nav>
                    <ul>
                        <router-link tag="li" to="/login"><a>ホーム</a></router-link>
                        <router-link tag="li" to="/login"><a>ログイン</a></router-link>
                        <router-link tag="li" to="/about"><a>About Us</a></router-link>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
    <div class="main">
        <router-view></router-view>
    </div>
    <footer>
        <address>Copyright(C)2018 D.IKEMIZU,Allright Reserved.</address>
    </footer>
  </div>
</template>
<!-- style中身は省略 -->
<style scoped>

@media screen and (max-width: 320px) {
   /* 表示領域が320px以下の場合に適用するスタイル */
   #index { width: 100%; }
}
@media screen and (min-width: 800px) {
   /* 表示領域が800px以上の場合に適用するスタイル */
   #index { width: 100% }
}

header h1{
    font-size:120%; /*フォントサイズの調整*/
    color:#313131; /*文字色の変更*/
    padding-top: 10px; /*文字上部に余白*/
    padding-bottom: 10px; /*文字下部に余白*/
    padding-left: 20px; /*文字左側に余白*/
    padding-right: 20px; /*文字右側に余白*/
    border:1px solid #313131; /*文字の周りに線を描く*/
    border-radius: 5px; /*線の角に丸みを付ける*/
    letter-spacing: 3px; /*文字と文字の間隔をあける*/
    font-weight:400; /*文字の太さの変更*/
}
nav{
    width: 100%;    /*横幅の指定*/
    border-top: 1px solid orange;   /*上部の線の色を指定*/
    border-bottom: 1px solid orange;    /*下部の線の色を指定*/
    margin-bottom: 5px; /**/
    overflow: hidden;   /*おまじない*/
}
nav ul{
    width: 60%; /*横幅の指定*/
    margin-left: 20%;   /*左端から20%右側に動かす*/
}
nav li{
    width: calc(25% - 2px); /*横幅の指定（線の分をマイナスする）*/
    border-left: 1px solid orange;  /*線を描く*/
    text-align: center; /*文字を中央に*/
    float: left;    /*左から並べる*/
    list-style:none;
}
nav li:last-child{
    border-right: 1px solid orange; /*li要素の最後の物は右側に線を描く*/
}
nav a{
    display: block; /*1つのli全体にリンクを有効にする*/
    text-decoration: none;  /*ブラウザ標準のリンク装飾をオフに*/
    color:#313131;  /*文字色の変更*/
    font-size: 110%;    /*フォントサイズの指定*/
    letter-spacing: 5px;    /*文字と文字の間隔をあける*/
    font-weight: 400;   /*文字の太さを調整*/
    line-height: 45px;  /*行間の指定（ナビボタンの高さ指定）*/
}
nav a:hover{
    background-color: orange;   /*背景色の指定*/
    color: #fff;    /*文字色の変更*/
    transition: 0.5s;   /*ホバー時の動きをなめらかにする*/
}

footer{
    font-size: 80%; /*フォントサイズの指定*/
    width: 100%;    /*横幅の指定*/
    text-align: center; /*文字の中央寄せ*/
    padding-top: 10px;  /*文字上部の余白指定*/
    padding-bottom: 10px;   /*文字下部の余白指定*/
    background-color: #313131;  /*背景色の指定*/
}
footer address{
    color: #fff;    /*文字色の指定*/
    letter-spacing: 5px;    /*文字と文字の間隔をあける*/
    font-style: normal; /*文字の斜体を取り消す*/
}
</style>
