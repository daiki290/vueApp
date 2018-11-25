<template>
  <div class="container">
    <p>INPUT AUTHCODE</p>
    <form @submit.prevent="confirm">
      <div class="group">
        <input type="text" v-model="username" required>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Email</label>
      </div>
      <div class="group">
        <input type="password" v-model="confirmationCode" required>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>AuthCode</label>
      </div>
      <div class="buttonArea">
        <button class="btn-border">SEND AUTHCODE</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
* { box-sizing:border-box; }

/* basic stylings ------------------------------------------ */

.container      {
font-family:'Roboto';
max-height:80%;
width:100%;
margin:10px auto 0;
display:block;
padding:5px 25px 25px;
}
p       {
text-align:center;
margin-bottom:20px;
font-family: Bodoni serif;
text-transform: uppercase;
border-bottom:1px solid #313131; /*文字の周りに線を描く*/
font-size:120%; /*フォントサイズの調整*/
color:#313131; /*文字色の変更*/
letter-spacing: 3px; /*文字と文字の間隔をあける*/
font-weight:400; /*文字の太さの変更*/
}
p small {
font-weight:normal;
color:#888;
display:block;
}

/* form starting stylings ------------------------------- */
.group            {
margin-left:auto;
position:relative;
margin-bottom:25px;
}
input               {
font-size:18px;
padding:5px 5px 5px 2px;
display:block;
width:80%;
border:none;
border-bottom:1px solid #757575;
}
input:focus         { outline:none; }

/* LABEL ======================================= */
label                {
color:#999;
font-size:18px;
font-weight:normal;
position:absolute;
pointer-events:none;
left:5px;
top:10px;
transition:0.2s ease all;
-moz-transition:0.2s ease all;
-webkit-transition:0.2s ease all;
}

/* active state */
input:focus ~ label, input:valid ~ label        {
top:-20px;
font-size:14px;
color:#5264AE;
}

/* BOTTOM BARS ================================= */
.bar    { position:relative; display:block; width:80%; }
.bar:before, .bar:after     {
content:'';
height:2px;
width:0;
bottom:1px;
position:absolute;
background:#5264AE;
transition:0.2s ease all;
-moz-transition:0.2s ease all;
-webkit-transition:0.2s ease all;
}
.bar:before {
left:50%;
}
.bar:after {
right:50%;
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
position:absolute;
height:60%;
width:100px;
top:25%;
left:0;
pointer-events:none;
opacity:0.5;
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
  padding: 8px 16px;
  border-radius: 4px;
  transition: .4s;
}

.login-btn{
  margin-bottom:10px;
}

.btn-border:hover {
  background-color: #000;
  border-color: #000;
  color: #FFF;
}

/* active state */
input:focus ~ .highlight {
-webkit-animation:inputHighlighter 0.3s ease;
-moz-animation:inputHighlighter 0.3s ease;
animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from { background:#5264AE; }
to    { width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
  from { background:#5264AE; }
to    { width:0; background:transparent; }
}
@keyframes inputHighlighter {
  from { background:#5264AE; }
to    { width:0; background:transparent; }
}
</style>
<script>
export default {
  name: 'Confirm',
  data () {
    return {
      username: '',
      confirmationCode: ''
    }
  },
  methods: {
    confirm () {
      this.$cognito.confirmation(this.username, this.confirmationCode)
        .then(result => {
          this.$router.replace('/content')
        })
        .catch(err => {
          this.$emit('parentMessage', 'Confirm failed. Try again.')
          console.log(err.message)
        })
    }
  }
}
</script>
