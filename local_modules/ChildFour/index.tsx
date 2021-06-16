import React, { useState } from 'react'
export const ChildFour = props => {
    const [value, setValue] = useState<string>()
    return <div>
        <label>
            text:
            <input name="account" value={value} onChange={(e) => { setValue(e.target.value) }} />
            <button onClick={() => { if (props.update) { props.update() } }}>update</button>
        </label>
    </div >
}
export default ChildFour