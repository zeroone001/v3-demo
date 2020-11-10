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
// toRaw 把reactive或者ref类型的数据获取原始数据
/*
  ref/reactive 数据类型的特点：响应式数据
  每次修改都会被追踪，都会更新UI界面，但是这样非常消耗性能，
  如果一些操作不需要追踪，不需要修改界面，我们就可以通过toRaw 获取原始数据，
  对数据进行修改，这样性能就好啦

*/
import HelloWorld from './components/HelloWorld.vue'
import { removeFun } from './componsition/removeFun.js';
import { toRaw, ref, reactive, isRef, isReactive, shallowReactive, shallowRef, triggerRef } from 'vue';
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
    let state2 = reactive({
      name: 'lys',
      sex: 'qwe'
    });
    console.log('toRaw', toRaw(state2));
    console.log('msg-ref', msg);
    let { state, reMov } = removeFun();
    console.log('reactive:::', state.stu);
    return {
      msg,
      state,
      reMov,
      state2
    }
  }
};

</script>
