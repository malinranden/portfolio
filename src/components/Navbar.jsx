import './_Navbar.scss'

function Navbar () {
    return (
        <>
            <div className='navbar'>
                <nav>
                    <ul>
                        {/* <li><a href="">Malin Randén</a></li> */}
                        <li><a href="#welcome" className='navbar__sun'>𖤓</a></li>
                    </ul>
                        <ul className='ul-right'>
                            <li><a href="#about">About me</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;