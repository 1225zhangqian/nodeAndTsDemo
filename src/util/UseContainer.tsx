import React from 'react'
// selectComponent
// layout config
// lifetimes
interface UseContainerProps {

}
export const UserContainer = props => {
    return <div><p>Child2</p>
        <div>{props.message}</div>
    </div>
}