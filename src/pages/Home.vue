<template>
    <div class="split">
        <div class="headText">
            <h1 class="title">WELCOME</h1>
        </div>
        <div id="splitDesign">
            <div class="split-box split-left">
            </div>
            <div class="split-box split-right">
            </div>
        </div>
        <div class="center-logo">
            <Login v-on:parentMessage="setErrorMsg" v-if="type === 'A'"></Login>
            <SignUp v-on:parentMessage="setErrorMsg" v-on:nextStep="changeTypeC" v-else-if="type === 'B'"></SignUp>
            <Confirm v-on:parentMessage="setErrorMsg" v-on:nextStep="changeTypeA" v-else-if="type === 'C'"></Confirm>
            <div class="buttonArea">
              <button class="btn-border" v-if="type === 'A'" v-on:click="changeTypeC" >INPUT AUTH CODE</button>
              <button class="btn-border" v-if="type === 'A'" v-on:click="changeTypeB">CREATE ACCOUNT</button>
              <button class="btn-border" v-if="type !== 'A'" v-on:click="changeTypeA">LOGIN</button>
            </div>
            <p>{{errorMsg}}</p>
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
    font-size:150%; /*フォントサイズの調整*/
    color:#313131; /*文字色の変更*/
    padding-top: 10px; /*文字上部に余白*/
    padding-bottom: 10px; /*文字下部に余白*/
    padding-left: 20px; /*文字左側に余白*/
    padding-right: 20px; /*文字右側に余白*/
    border-bottom:1px solid #313131; /*文字の周りに線を描く*/
    border-radius: 5px; /*線の角に丸みを付ける*/
    letter-spacing: 3px; /*文字と文字の間隔をあける*/
    font-weight:500; /*文字の太さの変更*/
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
}

/* ボタン*/
.btn-border {
  opacity:0.7;
  display: inline-block;
  max-width: 150px;
  text-align: left;
  border: 2px solid rgba(0,0,0,0.3);
  font-size: 10px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 8px;
  margin: 5px 20px;
  border-radius: 4px;
  transition: .4s;
}

.btn-border:hover {
  background-color: #000;
  border-color: #000;
  color: #FFF;
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
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Confirm from '../components/Confirm.vue'
export default {
  components: {
    'Login': Login,
    'SignUp': SignUp,
    'Confirm': Confirm
  },
  data () {
    return {
      type: 'A',
      errorMsg: ''
    }
  },
  methods: {
    changeTypeA () {
      this.type = 'A'
      this.errorMsg = ''
    },
    changeTypeB () {
      this.type = 'B'
      this.errorMsg = ''
    },
    changeTypeC () {
      this.type = 'C'
      this.errorMsg = ''
    },
    setErrorMsg (message) {
      this.errorMsg = message
    }
  }
}

</script>
