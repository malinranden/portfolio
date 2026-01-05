import './Navbar.css'

function Navbar () {
    return (
        <>
            <div className='navbar-background'>
                <nav>
                    {/* <div className='ul-left'> */}
                    <ul>
                        <li><a href="#link-to-top">Malin Randén</a></li>
                    </ul>
                    {/* </div> */}
                    {/* <div className='ul-right'> */}
                        <ul className='ul-right'>
                            <li><a href="">About me</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    {/* </div> */}
                </nav>
            </div>
        </>
    )
}

export default Navbar;