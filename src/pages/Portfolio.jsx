import './Portfolio.css'
import Navbar from "../Navbar.jsx";
function Portfolio () {

    return (
        <> 
            <Navbar></Navbar>
            <div className='container-portolio-page'>
                <div className='container-welcome'>
                    <div>
                        <h1>Hi, my name is Malin</h1>
                        <p>I'm not a Matrix geek, just having some fun</p>
                    </div>
                    <img src="" alt="image-of-me" />
                </div>
                <div className='container-about-me'>
                    <h3>About me</h3>
                </div>
                <div className='container-my-projects'>
                    <h3>My projects</h3>
                </div>
                <div className='container-contact-me'>
                    <h3>Contact me form</h3>
                </div>
            </div>
        </>
    )
}

export default Portfolio;