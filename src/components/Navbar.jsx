import './_Navbar.scss'

function Navbar () {
    return (
        <>
            {/* <div className='navbar'> */}
                <nav>
                    <ul>
                        <li><a href="#link-to-top">Malin Randén</a></li>
                    </ul>
                        <ul className='ul-right'>
                            <li><a href="">About me</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                </nav>
            {/* </div> */}
        </>
    )
}

export default Navbar;