import React from 'react'

const Container = ({children, px, py, bgColor, id, additional, padding}) => {
    return (
        <div className={`bg-${bgColor} ${additional}`} id = {id} style ={{padding: padding ? padding : '6% 7%'}}>
            {children}
        </div>
    )
}

Container.defaultProps = {
    px : 20,
    py: 20,
    bgColor: 'white',
    padding : '6% 7%',
    additional: ''
}

export default Container;