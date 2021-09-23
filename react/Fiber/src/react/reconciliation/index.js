import { createTaskQueue, arrified, createStateNode, getTag } from "../misc";

const taskQueue = createTaskQueue();

let subTask = null;
let pendingCommit = null;

const commitAllWork = fiber => {
  fiber.effects.forEach(item => {
    if (item.effectTag === 'placement') {
      item.parent.stateNode.appendChild(item.stateNode);
    }
  });
}

const getFirstTask = () => {
  // 从任务队列中获取任务
  const task = taskQueue.pop();
  // 返回最外层节点的 fiber 对象
  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null
  }
}

// 构建子级节点关系
const reconcileChildren = (fiber, children) => {
  const arrifiedChildren = arrified(children);

  let index = 0;
  let numberOfElements = arrifiedChildren.length;
  let element = null;
  let newFiber = null;
  let prevFiber = null;

  while (index < numberOfElements) {
    element = arrifiedChildren[index];

    newFiber = {
      type: element.type,
      props: element.props,
      tag: getTag(element),
      effects: [],
      effectTag: 'placement',
      parent: fiber
    }
    
    newFiber.stateNode = createStateNode(newFiber);

    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevFiber.siblint = newFiber;
    }
    
    prevFiber = newFiber;

    index++;
  }
}

const executeTask = fiber => {
  reconcileChildren(fiber, fiber.props.children);

  if (fiber.child) {
    return fiber.child;
  }

  let currentExecutelyFiber = fiber;

  while (currentExecutelyFiber.parent) {
    currentExecutelyFiber.parent.effects = currentExecutelyFiber.parent.effects.concat(
      currentExecutelyFiber.effects.concat([currentExecutelyFiber])
    );

    if (currentExecutelyFiber.siblint) {
      return currentExecutelyFiber.siblint;
    }
    
    currentExecutelyFiber = currentExecutelyFiber.parent;
  }

  pendingCommit = currentExecutelyFiber;
}

const workLoop = deadline => {
  if (!subTask) {
    subTask = getFirstTask();
  }

  // 如果任务存在并且浏览器有空闲时间就调用
  while (subTask && deadline.timeRemaining() > 1) {
    subTask = executeTask(subTask);
  }

  if (pendingCommit) {
    // 执行初始渲染
    commitAllWork(pendingCommit);
  }
}

const performTask = deadline => {
  // 执行任务
  workLoop(deadline);
  // 如果任务是否存在
  if (subTask || !taskQueue.isEmpty()) {
    requestIdleCallback(performTask);
  }
}

export const render = (element, dom) => {
  // 1. 向任务队列中添加任务
  taskQueue.push({
    dom,
    props: { children: element }
  });
  
  // 2. 指定在浏览器空闲时执行任务
  requestIdleCallback(performTask);
}