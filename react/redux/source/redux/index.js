/**
 * @file 自定义 Redux
 */

function createStore (reducer, preloadedState) {
  // 约束 reducer 参数类型
  if (typeof reducer !== 'function') {
    throw new Error('reducer has to be a function.');
  }

  // store 对象中存储的状态
  let currentState = preloadedState;
  // 存放订阅者函数
  const currentListeners = [];

  // 获取状态
  function getState () {
    return currentState;
  }

  // 触发 action
  function dispatch (action) {
    // 判断 action 是否是对象
    if (!isPlainObject(action)) {
      throw new Error('action has be a object.');
    }
    
    // 判断对象是否存在 type 属性
    if (typeof action.type === 'undefined') {
      throw new Error('the type attribute must exist.');
    }

    currentState = reducer(currentState, action);

    // 循环数据，调用订阅者
    for (let i = 0; i < currentListeners.length; i++) {
      const listener = currentListeners[i];

      listener();
    }
  }

  // 订阅状态 
  function subscribe (listener) {
    currentListeners.push(listener);
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}

// 判断参数是否是对象
function isPlainObject (obj) {
  // 排除基础数据类型和 null
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  // 区分数组和对象
  let proto = obj;

  while (Object.getPrototypeOf(proto) != null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) == proto;
}