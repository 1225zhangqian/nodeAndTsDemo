const isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
  input !== null && input.tagName === 'IFRAME';
class Drag {
  params:
    | {
        dragEle?: HTMLElement | null;
        dropEle?: HTMLElement | null;
      }
    | undefined;

  init = (params: {
    dragEle?: HTMLElement | null;
    dropEle?: HTMLElement | null;
  }): void => {
    this.params = params;
    this.initDrag(params.dragEle);
    this.initDrop(params.dropEle);
  };

  //初始化设置拖动元素
  initDrag = dragEle => {
    if (dragEle.childNodes.length) {
      const { length } = dragEle.childNodes;
      let i = 0;
      while (i < length) {
        this.setDrag(dragEle.childNodes[i]);
        i += 1;
      }
    } else {
      this.setDrag(dragEle);
    }
  };

  //初始化释放区
  initDrop = dropEle => {
    if (dropEle && dropEle.childNodes && dropEle.childNodes.length) {
      const { length } = dropEle.childNodes;
      let i = 0;
      while (i < length) {
        this.setDrop(dropEle.childNodes[i]);
        i += 1;
      }
    } else {
      this.setDrop(dropEle);
    }
  };

  //拖动元素注册事件
  setDrag = el => {
    el.setAttribute('draggable', 'true');
    // el.ondragstart = this.dragStartEvent;
    // el.ondrag = this.dragEvent;
    el.ondragend = this.dragEndEvent;
  };

  //释放区注册事件
  setDrop = el => {
    el.ondrop = this.dropEvent;
    el.ondragenter = this.dragEnterEvent;
    // el.ondragover = this.dragOverEvent;
    el.ondragleave = this.dragLeaveEvent;
  };

  //创建占位元素
  createElePlaceholder = (() => {
    let ele: HTMLDivElement;
    return () => {
      if (!ele) {
        ele = document.createElement('div');
        ele.setAttribute('id', 'drag-ele-placeholder');
        ele.innerHTML = `<div >
                <div style="width: 150px; height: 40px; text-align: center; background: #878; line-height: 40px">放置组件</div>
              </div>`;
      }
      return ele;
    };
  })();
  getIframe = () => {
    const iframe = document.getElementById('my-iframe');
    if (isIFrame(iframe)) {
      return iframe;
    }
    return null;
  };
  //移除占位元素
  removePlaceholderEle = () => {
    const iframe = this.getIframe();
    if (!iframe) {
      return;
    }
    // const removeEle = iframe.contentWindow?.document.getElementById(
    //   'drag-ele-placeholder'
    // );
    const removeEle = this.params?.dropEle?.querySelector(
      '#drag-ele-placeholder'
    );
    const dropEle = this.params?.dropEle;
    if (dropEle && removeEle) {
      dropEle.removeChild(removeEle);
    }
  };

  /****** 事件处理 ******/
  dragEndEvent = ev => {
    const insertEle = this.params?.dropEle?.querySelector(
      '#drag-ele-placeholder'
    );
    insertEle?.before(ev.target);
    this.removePlaceholderEle();
    console.log('拖拽结束');
    console.log('删除占位元素');
  };
  //插入占位元素
  dragEnterEvent = ev => {
    ev.preventDefault();
    const insertEle = this.createElePlaceholder();
    ev.target.before(insertEle);
    console.log('进入到可放置区');
    console.log('插入占位元素');
  };
  //删除占位元素
  dragLeaveEvent = ev => {
    ev.preventDefault();
    console.log('离开放置区');
    console.log('删除占位元素');
  };

  dropEvent = ev => {
    ev.preventDefault();
    console.log('在放置区放开鼠标');
  };
}
export default new Drag();
