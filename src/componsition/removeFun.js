import { ref, reactive } from 'vue';

export function removeFun () {
    let state = reactive({
        stu: [
        {
          name: 'zhangsan',
          id: '11'
        },
        {
          name: 'lisi',
          id: '22'
        }
      ]
      });
      function reMov (index) {
        state.stu = state.stu.filter((item, i) => {
          return i !== index;
        });
      }
      return {
        state,
        reMov
      }
}





