import React from 'react'

interface HomeInterface {
    message: string
}
export const Home: React.FunctionComponent<HomeInterface> = props => {
    const { message } = props
    return <div>{message}</div>
}