import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HamburgerMenu } from './HamburgerMenu'
import { MenuLinks } from './MenuLinks'
export function AppHeader() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <header className="app-header flex">
            <h1 className="logo">Omri Madar</h1>
            <nav>
                <ul className="nav-links clean-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="">Projects</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Contact</Link></li>
                </ul>

                <HamburgerMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

                <MenuLinks menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

            </nav>
        </header>
    )
}


// var div_menu = document.getElementById('div_menu');
// window.onscroll = function (e) {
//     if (div_menu)
//         div_menu.style.top = window.pageYOffset + 'px';
// }