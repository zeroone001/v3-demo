/**
 * Description: 请输入文件描述
 * Author: liuyongsheng
 * Date: 2020-11-13 13:55:44
*/
// V3 的响应式数据的本质

// Object 
let obj = {
    name: 'lys',
    value: 1
};

let state = new Proxy(obj, {
    get (obj, key) {
        console.log('get', obj, key);
        return obj[key];
    },
    set (obj, key, value) {
        console.log('set', obj, key, value);
        obj[key] = value;
        console.log('更新UI界面');
        return true;
    }
});

state.name = '111';
console.log(state);

// Array
let arr = [1,2,4,54];
let state = new Proxy(arr, {
    get (obj, key) {
        console.log('get', obj, key);
        return obj[key];
    },
    set (obj, key, value) {
        console.log('set', obj, key, value);
        obj[key] = value;
        console.log('更新UI界面');
        return true;
    }
});
// get 和 set 都会执行两遍，关键是需要设置length
state.push('312321');

console.log(state);


// 然后手写reactive
function reactive (obj) {
    if (typeof obj === 'object') {
        // 需要写一个递归
        if (obj instanceof Array) {
            obj.forEach((item, index) => {
                if (typeof item === 'object') {
                    obj[index] = reactive(item);
                }
            });
        } else {
            // Object
            for (let key in obj) {
                let item = obj[key];
                if (typeof item === 'object') {
                    obj[key] = reactive(item);
                }
            }
        }
        return new Proxy(obj, {
            get (obj, key) {
                console.log('get', obj, key);
                return obj[key];
            },
            set (obj, key, value) {
                console.log('set', obj, key, value);
                obj[key] = value;
                console.log('更新UI界面');
                return true;
            }
        });
    } else {
        console.log('obj需要是对象')
        return;
    }
}

function ref (val) {
    return reactive({
        value: val
    });
}
// let obj = {
//     a: 'lys',
//     b: {
//         name: 'ydz',
//         c: {
//             name: 'ldw'
//         }
//     }
// }
// let state = reactive(obj);

// state.a = '123';
// state.b.name = 'asd';

let obj = [{
    a: 'lys',
    b: {
        name: 'yye'
    }
}, {
    c: 'qawe'
}]
let state = reactive(obj);

state[0].a = '123';
state[1].c = 'asd';
console.log(state);

// 手写 shallowReactive
// 非递归监听
function shallowReactive (obj) {
    return new Proxy(obj, {
        get (obj, key) {
            console.log('get', obj, key);
            return obj[key];
        },
        set (obj, key, value) {
            console.log('set', obj, key, value);
            obj[key] = value;
            console.log('更新UI界面');
            return true;
        }
    });
}


// readonly , shallowReadonly

function shallowReadonly () {
    return new Proxy(obj, {
        get (obj, key) {
            console.log('get', obj, key);
            return obj[key];
        },
        set (obj, key, value) {
            console.warn(`属性是${key}是只读的`);
            // console.log('set', obj, key, value);
            // obj[key] = value;
            // console.log('更新UI界面');
            // return true;
        }
    });
}