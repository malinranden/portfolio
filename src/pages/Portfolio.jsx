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
                        <p>Not a Matrix geek, just a fresh frontend developer having some fun with one of my many ideas</p>
                        <p>I'm a fresh frontend developer planning to go into UX/UI design.</p>
                    </div>
                    <img src={"#"} alt="image-of-me" />
                </div>
                <div className='about'>
                    <h3>About me</h3>
                    <div className='about__text'>
                        <p>I'm from Sweden. I have education in Frontend development, 
                            industrial techniqe and environments, textile design. 
                            And some other courses in film editing, freelance journalism, 
                            and meditation.</p>
                        <p>I got into frontend because I wanted a job where i get to create,
                            where I can have flexibility and variation and because i enjoy 
                            editing on the computer </p>
                        <p>I also have an interest in psychology and cognition which is why 
                            I plan to go in to UX and UI design. </p>
                    </div>
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