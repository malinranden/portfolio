import './_portfolio.scss'
// import '../styles/_variables.scss'
import Navbar from "../components/Navbar.jsx";
// import Projects from '../components/Projects.jsx';
// import ProjectCard from '../components/ProjectCard.jsx';
// import Projectinfo from '../components/ProjectCard.jsx'
import Projects from '../components/Projects.jsx';
function Portfolio () {

    return (
        <> 
            <Navbar></Navbar>
            <div className='portfolio'>
                <div className='welcome'>
                    <div>
                        <h1>Hi, my name is Malin</h1>
                        <p>I'm not a Matrix geek, just having some fun</p>
                    </div>
                    <img src={"#"} alt="image-of-me" />
                </div>
                <div className='about'>
                    <h3>About me</h3>
                </div>

                <div className='projects'>
                    <h3>My projects</h3>
                    <div>
                        <Projects/>
                    </div>
                </div>

                <div className='contact'>
                    <h3>Contact me form</h3>
                </div>
            </div>
        </>
    )
}

export default Portfolio;