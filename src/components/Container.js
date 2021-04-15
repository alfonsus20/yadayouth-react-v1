import React from 'react'

const Container = ({children, center, bgColor, id, additional, padding, screen}) => {
    return (
        <div className={`bg-${bgColor} ${additional} ${center && 'flex flex-col justify-center items-center'} ${screen && 'min-h-screen'} relative`} id = {id} style ={{padding: padding}}>
            {children}
        </div>
    )
}

Container.defaultProps = {
    bgColor: 'white',
    padding : '6% 7%',
    additional: ''
}

export default Container;