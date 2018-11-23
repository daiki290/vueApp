<template>
  <div>
    <p>{{ msg }}</p>
    <form method="post" action="example.cgi">
      <div class="input-form">
        <p>id：<input type="text" name="name" placeholder="ID"></p>
        <p>メールアドレス：<input type="email" name="email" placeholder="email"></p>
      </div>
      <button type="アカウント作成" @click="exec">submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateAccount',
  data () {
    return {
      msg: '新規アカウントを作る。'
    }
  },
  methods: {
    exec: function () {
      // 本来はajax通信をする
      console.log('exec')
    }
  }
}
</script>
<style scoped>
.input-form{
  width:400px;
  margin:auto;
  text-align : left;
}
</style>
