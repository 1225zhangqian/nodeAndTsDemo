import React from 'react'
import GridLayout from 'react-grid-layout';
import { getAllComponentsList } from '../util/getComponent'
export class MyFirstGrid extends React.Component {
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
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        {viewList.map(i => <div key={i.key} style={i.style}>
          <p>{i.name}</p>
          {renderComponent(i)}</div>)}
      </GridLayout>
    )
  }
}
