import React from 'react'

const Container = ({children, center, bgColor, id, additional, padding}) => {
    return (
        <div className={`bg-${bgColor} ${additional} ${center && 'flex flex-col justify-center items-center'} relative`} id = {id} style ={{padding: padding}}>
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