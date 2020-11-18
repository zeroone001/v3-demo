<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent ({
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  data() {
    return {
      count: 0
    }
  },
  setup (props, context) {
    console.log('seesee', props.msg, context);
    let msg = props.msg;
    return {
      msg
    }
  }
});
// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   },
//   data() {
//     return {
//       count: 0
//     }
//   },
//   setup (props, context) {
//     console.log('seesee', props.msg, context);
//   }
// };
</script>
