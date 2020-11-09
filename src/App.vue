<template>
  <div>
    {{ msg }} - {{ msg2 }}
    <ul>
      <li v-for="(st, index) in state.stu"
          :key="st.id"
          @click="reMov(index)">{{st.name}}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { removeFun } from './componsition/removeFun.js';
import { ref, reactive, isRef, isReactive } from 'vue';
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg2: 'assdasda'
    }
  },
  setup () {
    let msg = ref('我是谁!!!!');
    console.log('msg-ref', msg);
    let { state, reMov } = removeFun();
    console.log('reactive', state);
    return {
      msg,
      state,
      reMov
    }
  }
};

</script>
