<template>
    <div class="split">
        <div class="headText">
            <h1 class="title">HEAD TITLE</h1>
        </div>
        <div id="splitDesign">
            <div class="split-box split-left">
                <SignUp/>
            </div>
            <div class="split-box split-right">
            </div>
        </div>
        <div class="center-logo">
            <p>IKEMIZU DAIKI</p>
            <Login v-if="type === 'A'"></Login>
            <SignUp v-else-if="type === 'B'"></SignUp>
        </div>
    </div><!--split-->
</template>

<style scoped>
.headText{
position:absolute;
width:100%;
height:100%;
z-index:2;
}

.title{
    font-size:120%; /*フォントサイズの調整*/
    color:#313131; /*文字色の変更*/
    padding-top: 10px; /*文字上部に余白*/
    padding-bottom: 10px; /*文字下部に余白*/
    padding-left: 20px; /*文字左側に余白*/
    padding-right: 20px; /*文字右側に余白*/
    border-bottom:1px solid #313131; /*文字の周りに線を描く*/
    border-radius: 5px; /*線の角に丸みを付ける*/
    letter-spacing: 3px; /*文字と文字の間隔をあける*/
    font-weight:400; /*文字の太さの変更*/
}

.split-box{
    position:absolute;
    width:50%;
    height:100%;
    z-index:1;
}

.split-left {
    left:0;
    background:#e2ebed;
}

.split-right {
    right:0;
    overflow-y:scroll;
    background:#f2e9e6;
}

.center-logo{
position: absolute;
top: 50%;
left: 50%;
width: 40vh;
height: 40vh;
margin-top: -20vh;
margin-left: -20vh;
text-align: center;
background: #fff;
z-index:3;
}

.center-logo p {
   font-family: Bodoni serif;
   text-transform: uppercase;
   text-shadow: #2c2c2c 3px 3px 5px;
}

@media screen and (max-width:600px) {
    .split-box {
        position:relative;
        width:100%;
        height:auto;
    }
}
</style>
<script>
import Login from './Login.vue'
import SignUp from './SignUp.vue'
export default {
  components: {
    'Login': Login,
    'SignUp': SignUp
  }
}
</script>
