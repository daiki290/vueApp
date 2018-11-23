<template>
    <div class="split">
        <div class="split-item split-left">
            <img src="../assets/logo.png">
            <div class="split-left__inner">
                Vue.js And Flask APP
            </div><!--split-left__inner-->
        </div><!--split-item split-left-->
        <div class="split-item split-right">
            <div class="split-right__inner">
            <ul class="tab-group">
                <li class="tab active"><a href="#signup">Sign Up</a></li>
                <li class="tab"><a href="#login">Log In</a></li>
            </ul>
            <form @submit.prevent="login">
                <div>
                    Email:
                    <input type="text" placeholder="Email" v-model="username" required>
                </div>
                <div>
                    パスワード:
                    <input type="password" placeholder="password" v-model="password" required>
                </div>
                <button>ログイン</button>
                <p>{{message_text}}</p>
            </form>
            <router-link to="/confirm">確認コード入力</router-link>
            <router-link to="/singup">ユーザー登録</router-link>
            </div><!--split-right__inner-->
        </div><!--split-item split-right-->
    </div><!--split-->
</template>

<style scoped>
@media screen and (max-width:1024px) {
.split{
    display: block;
}
.split-item{
    display: block;
    width: auto;
}
.split-left__inner{
    position: inherit;
    width: auto;
}
}
.split{
    display: table;
    width: 100%;
}
.split-item{
    display: table-cell;
    padding: 80px;
    width: 50%;
}
.split-left{
    background: #000;
    color: #fff;
    position: relative;
}
.split-left__inner{
    height: 100%;
    width: 50%;
    text-align:center;
}
.split-right__inner{
    height: 400px;
    text-align:center;
}
</style>
<script>
export default {
  name: 'Login',
  error: '',
  data () {
    return {
      username: '',
      password: '',
      message_text: ''
    }
  },
  methods: {
    login () {
      this.$cognito.login(this.username, this.password)
        .then(result => {
          this.$router.replace('/home')
        })
        .then(err => {
          this.error = err
          this.message_text = 'ログインできませんでした'
        })
    }
  }
}
</script>
