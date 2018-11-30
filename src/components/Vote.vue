<template>
    <div class="Vote">
        <h1>投票ページ</h1>
        <p>一番いいね!と思ったアプリの作成者に投票をしましょう。<br>投票したい人の番号を下のフォームに入力してください。</p>
        <form @submit.prevent="vote()">
            <div class="group">
                <span>投票No</span>
                <input type="password" v-model="votedNo" maxlength="1" required>
                <button class="btn">Vote</button>
            </div>
        </form>
        <p>全員の投票が終わったら結果発表ボタンを押してください。</p>
        <table class="board">
          <tr>
              <th>No</th>
              <th>名前</th>
              <th>票数</th>
          </tr>
              <tr v-for="paticipant in paticipants" :key="paticipant.entryNo">
                <td>{{paticipant.entryNo}}</td>
                <td>{{paticipant.name}}</td>
                <td v-if="result">{{paticipant.number}}</td>
              </tr>
        </table>
        <button class="btn" v-on:click="openResult">結果発表</button>
        <footer>
            <address>Copyright(C)2018 D.IKEMIZU,Allright Reserved.</address>
        </footer>
    </div>
</template>
<script>
export default {
  name: 'Vote',
  data () {
    return {
      paticipants: [
        { entryNo: 1, name: '水落', number: 0 },
        { entryNo: 2, name: '山崎', number: 0 },
        { entryNo: 3, name: '池水', number: 0 },
        { entryNo: 4, name: '佐竹', number: 0 },
        { entryNo: 5, name: 'たかけん', number: 0 },
        { entryNo: 6, name: '弓削', number: 0 }
      ],
      votedNo: '',
      result: false
    }
  },
  methods: {
    vote () {
      this.paticipants[this.votedNo - 1].number = this.paticipants[this.votedNo - 1].number + 1
      this.votedNo = ''
    },
    openResult () {
      this.result = true
    }
  }
}
</script>
<style scoped>
.Vote{
    background:#e2ebed;
    width:80%;
    margin: auto;
    text-align:center;
}

.group            {
margin-left:auto;
margin-bottom:5px;
}

input               {
font-size:12px;
width:10%;
border:none;
border-bottom:1px solid #757575;
}
input:focus { outline:none; }

.board{
    margin: auto;
    width:70%;
    background:#f2e9e6;
}

 .board th td{
    border:solid 1px #aaaaaa;
}

table th{
  padding : 10px 10px;
}

table td{
  padding : 10px 10px;
}
</style>
