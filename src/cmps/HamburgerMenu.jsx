import { bool, func } from 'prop-types';
export function HamburgerMenu({ menuIsOpen, setMenuIsOpen }) {
    return (
        <div className={`hamburger-menu ${menuIsOpen ? 'hamburger-cancel' : ''}`} onClick={() => setMenuIsOpen(!menuIsOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

HamburgerMenu.propTypes = {
    menuIsOpen: bool.isRequired,
    setMenuIsOpen: func.isRequired
}
