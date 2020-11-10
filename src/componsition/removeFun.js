/**
 * Description: 请输入文件描述
 * Author: liuyongsheng
 * Date: 2020-11-09 15:08:48
*/
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





