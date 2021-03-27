import React from 'react'
import {Link} from 'react-router-dom';

const Button = ({path, text, bgColor, width, color}) => {
    return (
        <Link to={`/${path}`}>
            <div className = {`bg-${bgColor} w-${width} text-${color} text-xl mt-4 px-3 py-2 rounded-lg`}>
                {text}
            </div>
        </Link>
    )
}

export default Button
