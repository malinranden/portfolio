import { Link } from 'react-router-dom';
import './Home.css';

function Home () {
    return (   
            <div className='parent'>
                <h1>Welcome to my portfolio</h1>
                <Link to='/portfolio'>
                    <button>see more</button>
                </Link>
            </div> 
    )
}

export default Home;