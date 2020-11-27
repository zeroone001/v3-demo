<!--
 * @Description: 请输入文件描述
 * @Author: liuyongsheng
 * @Date: 2020-11-16 10:49:56
-->
<template>
    <div>
        <div>姓名：{{name}}</div>
        <div>年龄：{{user.age}}</div>
        <div>computed: {{ doubleAge }}</div>
        <!-- <div>reactive: {{user}}</div> -->
        <button @click="addAge">加1</button>
    </div>
</template>
<script>
import { computed, reactive, ref, watch} from 'vue';
// import { computed } from 'vue';
export default {
    setup () {
        console.log('--------------------->')
        let obj = {
            age: 11
        }
        let name = ref('lys');
        let user = reactive(obj);
        // let user = reactive('1'); 需要用引用类型的数据
        function addAge () {
            user.age++;
        }
        // 计算属性
        let doubleAge = computed(() => {
            return user.age * 2;
        });
        // watch 监听 第一个参数不能直接写user.age
        // watch(() => user.age, (value, prevalue) => {
        //     console.log('watch 监听', value, prevalue);
        // });
        // watch(user, (value, prevalue) => {
        //     console.log('watch 监听', value, prevalue);
        // });
        // watch 监听多个
        watch([() => user.age, name], ([user, name], [preUser, preName]) => {
            console.log('watch multiple', user);
        });


        console.log('name:::', name);
        return {
            name,
            addAge,
            user,
            doubleAge
        }
    }
};
</script>