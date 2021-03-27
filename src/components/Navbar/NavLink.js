import React from 'react'
import {Link} from 'react-router-dom';

const NavLink = ({text}) => {
    return (
        <Link className = 'p-4 text-xl'>
            {text}
        </Link>
    )
}

export default NavLink
