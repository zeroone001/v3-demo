<template>
    <div>父元素</div>
    <test :name="name"
          test-attr="false"
          @testFun="testFun"
          :age="age">
          <template v-slot:header>
            <div>
              我是一个slot
            </div>
          </template>
    </test>
    <!-- {{ msg }} - {{ msg2 }}
    <ul>
      <li v-for="(st, index) in state.stu"
          :key="st.id"
          @click="reMov(index)">{{st.name}}</li>
    </ul>
    <p>{{state3}}</p>
    <div id="tele">
      这就是：：
    </div>
    <button @click="change">按钮</button>
    <hello-world :msg="msg"></hello-world>
    <div ref="box">我是box</div>
    <my-button></my-button>
    <teleport to="#tele">
      <div>我想测测teleport</div>
    </teleport> -->
</template>

<script>
// toRaw 把reactive或者ref类型的数据获取原始数据
/*
  ref/reactive 数据类型的特点：响应式数据
  每次修改都会被追踪，都会更新UI界面，但是这样非常消耗性能，
  如果一些操作不需要追踪，不需要修改界面，我们就可以通过toRaw 获取原始数据，
  对数据进行修改，这样性能就好啦

*/
// 
import Test from './components/Test.vue';
import MyButton from './components/MyButton.vue';
import HelloWorld from './components/HelloWorld.vue'
import { removeFun } from './componsition/removeFun.js';
import { onMounted } from 'vue';
import { toRaw, ref, reactive, isRef, isReactive, shallowReactive, shallowRef, triggerRef } from 'vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    MyButton,
    Test
  },
  data () {
    return {
      msg2: 'assdasda'
    }
  },
  setup () {
      console.log('setup');
      function testFun () {
        alert('1');
      }
      return {
        name: 'liuyongsheng',
        age: '18',
        testFun
      }
  },
  // beforeCreate () {
  //     console.log('beforeCreate');
  // },
  // created () {
  //     console.log('created');
  // },
  // beforeMount () {
  //     console.log('beforeMount');
  // },
  // mounted () {
  //     console.log('mounted');
  // },
  // setup 函数的执行时机，beforeCreate 和 created 之间
  // setup () {
  //   let msg = ref('我是谁!!!!');
  //   let state2 = reactive({
  //     name: 'lys',
  //     sex: 'qwe'
  //   });
  //   let obj = {
  //     tt: {
  //       aa: '11'
  //     }
  //   }
  //   let state3 = ref(obj.tt);
  //   function change () {
  //     state3.value.aa = '222';
  //     console.log(state3, obj);
  //   }
  //   let box = ref(null);

  //   onMounted(() => {
  //     console.log('mounted::', box.value);
  //   });


  //   console.log('toRaw', state2, toRaw(state2), state3);
  //   console.log('msg-ref', msg);
  //   let { state, reMov } = removeFun();
  //   console.log('reactive:::', state.stu);
  //   return {
  //     box,
  //     msg,
  //     state,
  //     reMov,
  //     state2,
  //     change
  //   }
  // }
};

</script>
