import React from 'react'
import GridLayout from 'react-grid-layout';
import { ChildTwo, ChildOne } from '../component'
export class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: 'a', x: 0, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'b', x: 4, y: 0, w: 1, h: 2 }
    ];
    const viewList = [{
      key: 'a',
      style: { height: '100px', width: '100px', background: "green" },
      name: 'ChildOne',
      component: ChildOne,
      properties: [{
        name: 'text',
        value: '',
        description: '',
        type: 'string'
      }, {
        name: 'text',
        value: [{ label: 'qqq' }],
        description: '',
        type: 'array',
      }],
      triggerEvent: [{
        eventName: ''
      }]
    }, {
      key: 'b',
      style: { height: '100px', width: '100px', background: "red" },
      name: 'ChildTwo',
      component: ChildTwo
    }]
    const renderComponent = (i) => {
      return <i.component />
    }
    return (
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        {viewList.map(i => <div key={i.key} style={i.style}>
          <p>{i.name}</p>
          {renderComponent(i)}</div>)}
      </GridLayout>
    )
  }
}
