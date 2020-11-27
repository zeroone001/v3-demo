<template>

    <div>{{refTtt}}</div>
    <div>
        {{reaProxy.name}}
    </div>
   <button @click="changeObjFun">
       按钮
   </button>


   
   
   
    <div>test</div>
    <div>{{name}}</div>
    {{age}}
    <div class="slot">
        <slot name="header"></slot>
    </div>
   
   <div>
       {{refTest.name}}
   </div>
   <div>
       objReactive: {{objReactive.count}}
   </div>
   <!-- <div>
       objReactive2: {{objReactive2.count}}
   </div> -->
</template>
<script>
import { toRefs, ref, reactive, watch, computed, isRef } from 'vue';
// https://github.com/vuejs/vuex/blob/4.0/package.json
import { useStore } from 'vuex'; // 注意这里的版本是 4.0.0-rc.2 
export default {
    data () {
        return {
            // 功能1的数据

            // 功能2的数据
        };
    },
    props: {
        name: {
            default: '',
            type: String
        },
        age: {
            default: '',
            type: String
        }
    },
    setup (props, context) {
        console.log('setup', props);
        const { name } = toRefs(props, 'name');
        const {attrs, slots, emit} = context;
        console.log('test-attr', attrs['test-attr']); 
        console.log(name.value);
        console.log(this);
        console.log('context.attrs', attrs);
        // Slots (Non-reactive object)
        console.log('context.slots', slots.header());
        // Emit Events (Method)
        console.log('context.emit', emit);

        const refTest = ref({name: 'qwe', age: 123});
        console.log('refTest', refTest);

        function refAdd () {
            refTest.value.name = 'liuyonsgehng';
        }

        let obj = { count: 0 }
        const objReactive = reactive(obj);
        const objReactive2 = reactive(obj);

        const objReactive3 = reactive({
            aa: 2
        })

        function clickFun () {
            // emit('testFun');
            objReactive.count++;
            console.log('obj', obj, objReactive, objReactive2);
        }

        // watch(objReactive, (val, preVal)=> {
        //     console.log('watch监听：', val);
        // });

        watch([objReactive, objReactive3], ([val,val3], [preVal, preVal3])=> {
            console.log('watch监听：', val);
        });

        const store = useStore();
        const storeData = computed(() => store.state.storeData);

        let refTtt = ref('ref类型');

        console.log('isRef', isRef(refTtt));

        // function addref () {
        //     refTtt.value.count++;
        // }

        let reactiveObject = reactive({
            count: 0
        });

        let objTest = {
            name: 'liuyongsheng',
            age: 18
        };
        let reaProxy = reactive(objTest);

        console.log('------------------------------------------>', refTtt, reactiveObject);
        function changeObjFun () {
            reaProxy.name = 'manpeng';
            // objTest.name = "manpeng";
            console.log('changeObj', objTest, reaProxy);
        }

        
        return {
            reaProxy,
            changeObjFun,
            refTtt,
            refTest,
            name,
            clickFun,
            refAdd,
            objReactive,
            objReactive2,
            storeData
        }
    },
    beforeCreate () {
        console.log('beforeCreate');
    },
    created () {
        console.log('created');
    },
    beforeMount () {
        console.log('beforeMount');
    },
    mounted () {
        console.log('mounted');
    },
    computed: {
        // 功能1的业务逻辑

        // 功能2的业务逻辑
    },
    watch: {
        // 功能1的业务逻辑

        // 功能2的业务逻辑
    },
    methods: {
        // 功能1的业务逻辑

        // 功能2的业务逻辑
    }
}
</script>