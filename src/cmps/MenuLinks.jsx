import { Link } from 'react-router-dom'
import { bool } from 'prop-types';

export function MenuLinks({ menuIsOpen }) {
    return (
        <ul className={`menu-links clean-list ${menuIsOpen ? 'transform-x-0' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="">Projects</Link></li>
            <li><Link to="">About</Link></li>
            <li><Link to="">Contact</Link></li>
        </ul>
    )
}

MenuLinks.propTypes = {
    menuIsOpen: bool.isRequired
}
