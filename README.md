<!--
 * @Description: 请输入文件描述
 * @Author: liuyongsheng
 * @Date: 2020-11-09 18:09:24
-->
# v3-demo
vue3.0学习demo

## 记录知识点


### readonly

const 和 readonly 的区别

const 不能给变量重新赋值
readonly 不能给属性重新赋值

### V3 中响应式数据的本质

```js
let obj = {
    
};
let state = new Proxy(obj, {
    
});
```