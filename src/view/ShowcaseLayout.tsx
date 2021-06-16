import React from 'react'
import GridLayout from 'react-grid-layout';
import { getAllComponentsList, getNotification } from '../util/getComponent'
import { getViewList } from '../util/getModules/getModuleUtil'

export class MyFirstGrid extends React.Component {
  open = async () => {
    const Notification = await getNotification()
    Notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      }
    });
  }

  renderComponent = () => {
    const dynamicComponentList = [{
      "name": "ChildFour",
      "component": "ChildFour",
    }, {
      "name": "notification-test",
      "component": "TipsTest"
    }]
    // const dynamicComponentListView = dynamicComponentList.map(({ name, component: Component }, index) => ({
    //   key: name,
    //   name: name,
    //   style: { height: '100px', width: '100px', background: "red" },
    //   layout: { i: name, x: index, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    //   component: Component
    // }))

    // const Notification = dynamicComponentListView[0].component
    // Notification.open({
    //   message: 'Notification Title',
    //   description:
    //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    //   onClick: () => {
    //     console.log('Notification Clicked!');
    //   }
    // });
  }
  render() {


    const componentList = getAllComponentsList()
    const viewList = Object.keys(componentList).map((name, index) => ({
      key: name,
      name: name,
      style: { height: '100px', width: '100px', background: "red" },
      layout: { i: name, x: index, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      component: componentList[name]
    }))
    // layout is an array of objects, see the demo for more complete usage
    const layout = viewList.map(i => i.layout)
    const renderComponent = (i) => {
      return <i.component />
    }

    return (
      <div><button onClick={this.open}>open notification</button>
        <button onClick={this.renderComponent}>render notification</button>
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>

          {viewList.map(i => <div key={i.key} style={i.style}>
            <p>{i.name}</p>
            {renderComponent(i)}</div>)}
        </GridLayout>
      </div>
    )
  }
}
