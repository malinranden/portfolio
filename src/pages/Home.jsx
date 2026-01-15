import { Link } from 'react-router-dom';
import './_Home.scss';

function Home () {
    return (   
            <div className='container-landing-page'>
                <h1>Welcome to my portfolio</h1>
                <pre style={{letterSpacing: "0px"}}>
║║║╔═╝║  ╔═╝╔═║╔╔ ╔═╝  ═╔╝╔═║  ╔╔ ║ ║  ╔═║╔═║╔═║═╔╝╔═╝╔═║║  ╝╔═║<br/>
║║║╔═╝║  ║  ║ ║║║║╔═╝   ║ ║ ║  ║║║═╔╝  ╔═╝║ ║╔╔╝ ║ ╔═╝║ ║║  ║║ ║<br/>
══╝══╝══╝══╝══╝╝╝╝══╝   ╝ ══╝  ╝╝╝ ╝   ╝  ══╝╝ ╝ ╝ ╝  ══╝══╝╝══╝<br/>
                </pre>
                <Link to='/portfolio'>
                    <button>see more</button>
                </Link>
            </div> 
    )
}

export default Home;