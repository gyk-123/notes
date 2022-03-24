const {
  track, trigger,
  ITERATE_KEY, TRIGGER_TYPE
} = require('../shared/effect');

const { isPlainObject } = require('./util');

const arrayInstrumentations = {};

;['includes', 'indexOf', 'lastIndexOf'].forEach(method => {
  const originMethod = Array.prototype[method];
  arrayInstrumentations[method] =  function (...args) {
    // this 是代理对象，现在代理对象中查找，将结果存储到 res 中
    let res = originMethod.apply(this, args);

    if (res === false) {
      // res 为 false 说明没找到，通过 this.raw 拿到原始数组，再去其中查找并更新 res 值
      res = originMethod.apply(this.raw, args);
    }

    return res;
  }
});

function crateReactive (obj, isShallow = false, isReadonly = false) {
  return new Proxy(obj, {
    get (target, key, receiver) {
      if (key === 'raw') {
        return target;
      }

      // 如果操作的目标对象是数组，并且 key 存在于 arrayInstrumentations 上
      // 那么返回定义在 arrayInstrumentations 上的值
      if (Array.isArray(target) && arrayInstrumentations.hasOwnProperty(key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }

      if (!isReadonly && typeof key !== 'symbol') {
        track(target, key);
      }
      
      const res = Reflect.get(target, key, receiver);

      if (isShallow) {
        return res;
      }

      if (isPlainObject(res)) {
        return isReadonly ? readonly(res) : reactive(res);
      }

      return res;
    },
    set (target, key, newVal, receiver) {
      if (isReadonly) {
        console.warn(`属性 ${ key } 是只读的`);
        return true;
      }

      const oldVal = target[key];

      const type = Array.isArray(target) 
        // 如果代理目标是数组，则检测被设置的索引值是否小于数组长度，如果是，视为 SET 操作，否则是 ADD 操作
        ? Number(key) < target.length ? TRIGGER_TYPE.SET : TRIGGER_TYPE.ADD
        : Object.prototype.hasOwnProperty.call(target, key) ? TRIGGER_TYPE.SET : TRIGGER_TYPE.ADD;

      const res = Reflect.set(target, key, newVal, receiver);

      if (target === receiver.raw) {
        if (oldVal !== newVal && (oldVal === oldVal || newVal === newVal)) {
          // 增加第四个参数，即触发响应的新值
          trigger(target, key, type, newVal);
        }
      }
  
      return res;
    },
    ownKeys (target) {
      // 如果操作目标 target 是数组，使用 length 属性作为 key 建立响应联系
      track(target, Array.isArray(target) ? 'length' : ITERATE_KEY);
      return Reflect.ownKeys(target);
    },
    deleteProperty (target, key) {
      if (isReadonly) {
        console.warn(`属性 ${ key } 是只读的`);
        return true;
      }

      const hadKey = Object.prototype.hasOwnProperty.call(target, key);
      const res = Reflect.deleteProperty(target, key);
  
      if (res && hadKey) {
        trigger(target, key, TRIGGER_TYPE.DELETE);
      }
      return res;
    }
  });
}

// 定义一个 Map 实例，存储原始对象到代理对象的映射
const reactiveMap = new Map();

function reactive (obj) {
  // 优先通过原始对象 obj 寻找之前创建的代理对象，如果找到了，直接返回已有的代理对象
  const existionProxy = reactiveMap.get(obj);

  if (existionProxy) return existionProxy;

  const proxy = crateReactive(obj);

  reactiveMap.set(obj, proxy);

  return proxy;
}

function shallowReactive (obj) {
  return crateReactive(obj, true);
}

function readonly (obj) {
  return crateReactive(obj, false, true);
}

function shallowReadonly (obj) {
  return crateReactive(obj, true, true);
}

module.exports = {
  reactive,
  shallowReactive,
  readonly
}