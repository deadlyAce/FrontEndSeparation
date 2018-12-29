 <template>
  <div class="hello">
     <button @click="getMess">点击</button>
     <button @click="sendWs">send websocket</button>
  </div>
</template>

<script>
import webSocket from '@/assets/js/service/websocket';
let vm = null;
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
      webSocket.onopen = () => {
        webSocket.send('success');
      };

      // 监听webSocket返回的数据,更新到vuex中
      webSocket.onmessage = res => {
        console.log(res);
      };
  },
  methods: {
    getMess: function () {
       this.portService.getMess().then(res => {
          console.log(res);
       })
    },
    sendWs() {
      if (webSocket.readyState === 3) {
        webSocket.onopen = () => {
          webSocket.send(JSON.stringify({ a: 1}));
        };
      }
      else{
        webSocket.send(JSON.stringify({ a: 1}));
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
