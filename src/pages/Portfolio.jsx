import './_portfolio.scss'
import Navbar from "../components/Navbar.jsx";
import Welcome from '../components/Welcome.jsx';
import Projects from '../components/Projects.jsx';
import Form from '../components/Form.jsx'

function Portfolio () {
    return (
        <> 
            <Navbar></Navbar>

            <div className='portfolio'>

                <div className='welcome'>
                    <Welcome/>
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
                    <Form/>
                </div>

            </div>
        </>
    )
}

export default Portfolio;