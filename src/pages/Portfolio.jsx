import './_portfolio.scss'
import Navbar from "../components/Navbar.jsx";
import Welcome from '../components/Welcome.jsx';
import Projects from '../components/Projects.jsx';
import Form from '../components/Form.jsx'

function Portfolio () {
    return (
        <> 
            <div className='container'>
                <Navbar></Navbar>

                <div className='portfolio' >

                    <div className='welcome' id='welcome'>
                        <Welcome/>
                    </div>

                    <div className='about' id='about'>
                        <div className='about__container'>
                            <h3>About me</h3>
                            <div className='about__text'>
                                <p>I'm from Sweden. I have education in Frontend development, 
                                    industrial techniqe and environments, textile design. 
                                    And some other courses in film editing, freelance journalism, 
                                    and meditation.</p>
                                <p>I got into frontend because I wanted a job where i get to create,
                                    where I can have flexibility and variation in work tasks and because i enjoy 
                                    editing on the computer </p>
                                <p>I also have an interest in psychology and cognition which is why 
                                    I plan to go in to UX and UI design. I am also open and interested 
                                    to learn more about backend.</p>
                            </div>
                        </div>
                    </div>

                    <div className='projects' id='projects'>
                        {/* <h3>My projects</h3> */}
                        {/* <pre style={{letterSpacing: "0px", fontSize: "10px", fontWeight: "3000px"}}>
    .88b  d88. db    db      d8888b. d8888b.  .d88b.     d88b d88888b  .o88b. d888888b .d8888. <br/>
    88'YbdP`88 `8b  d8'      88  `8D 88  `8D .8P  Y8.    `8P' 88'     d8P  Y8 `~~88~~' 88'  YP <br/>
    88  88  88  `8bd8'       88oodD' 88oobY' 88    88     88  88ooooo 8P         88    `8bo.   <br/>
    88  88  88    88         88~~~   88`8b   88    88     88  88~~~~~ 8b         88      `Y8b. <br/>
    88  88  88    88         88      88 `88. `8b  d8' db. 88  88.     Y8b  d8    88    db   8D <br/>
    YP  YP  YP    YP         88      88   YD  `Y88P'  Y8888P  Y88888P  `Y88P'    YP    `8888Y' <br/>
                                                                                            <br/>
                        </pre> */}
                        <pre style={{letterSpacing: "0px", fontSize: "10px", fontWeight: "3000"}}>
                                                                        <br/>
    ▄▄▄      ▄▄▄         ▄▄▄▄▄▄▄                                           <br/>
    ████▄  ▄████         ███▀▀███▄              ▀▀              ██         <br/>
    ███▀████▀███ ██ ██   ███▄▄███▀ ████▄ ▄███▄  ██ ▄█▀█▄ ▄████ ▀██▀▀ ▄█▀▀▀ <br/>
    ███  ▀▀  ███ ██▄██   ███▀▀▀▀   ██ ▀▀ ██ ██ ▀██ ██▄█▀ ██     ██   ▀███▄ <br/>
    ███      ███  ▀██▀   ███       ██    ▀███▀  ██ ▀█▄▄▄ ▀████  ██   ▄▄▄█▀ <br/>
                ██                           ██                         <br/>
                ▀▀▀                          ▀▀▀                          <br/>
                        </pre> 

                        <pre style={{letterSpacing: "0px", fontSize: "3px", fontWeight: "bolder"}}>
                                                                                                                                                                                                                <br/>
                                                                                                                                                                                                                <br/>
    MMMMMMMM               MMMMMMMM                              PPPPPPPPPPPPPPPPP                                         jjjj                                                  tttt                           <br/>
    M:::::::M             M:::::::M                              P::::::::::::::::P                                       j::::j                                              ttt:::t                           <br/>
    M::::::::M           M::::::::M                              P::::::PPPPPP:::::P                                       jjjj                                               t:::::t                           <br/>
    M:::::::::M         M:::::::::M                              PP:::::P     P:::::P                                                                                         t:::::t                           <br/>
    M::::::::::M       M::::::::::Myyyyyyy           yyyyyyy       P::::P     P:::::Prrrrr   rrrrrrrrr      ooooooooooo  jjjjjjj    eeeeeeeeeeee        ccccccccccccccccttttttt:::::ttttttt        ssssssssss   <br/>
    M:::::::::::M     M:::::::::::M y:::::y         y:::::y        P::::P     P:::::Pr::::rrr:::::::::r   oo:::::::::::ooj:::::j  ee::::::::::::ee    cc:::::::::::::::ct:::::::::::::::::t      ss::::::::::s  <br/>
    M:::::::M::::M   M::::M:::::::M  y:::::y       y:::::y         P::::PPPPPP:::::P r:::::::::::::::::r o:::::::::::::::oj::::j e::::::eeeee:::::ee c:::::::::::::::::ct:::::::::::::::::t    ss:::::::::::::s <br/>
    M::::::M M::::M M::::M M::::::M   y:::::y     y:::::y          P:::::::::::::PP  rr::::::rrrrr::::::ro:::::ooooo:::::oj::::je::::::e     e:::::ec:::::::cccccc:::::ctttttt:::::::tttttt    s::::::ssss:::::s<br/>
    M::::::M  M::::M::::M  M::::::M    y:::::y   y:::::y           P::::PPPPPPPPP     r:::::r     r:::::ro::::o     o::::oj::::je:::::::eeeee::::::ec::::::c     ccccccc      t:::::t           s:::::s  ssssss <br/>
    M::::::M   M:::::::M   M::::::M     y:::::y y:::::y            P::::P             r:::::r     rrrrrrro::::o     o::::oj::::je:::::::::::::::::e c:::::c                   t:::::t             s::::::s      <br/>
    M::::::M    M:::::M    M::::::M      y:::::y:::::y             P::::P             r:::::r            o::::o     o::::oj::::je::::::eeeeeeeeeee  c:::::c                   t:::::t                s::::::s   <br/>
    M::::::M     MMMMM     M::::::M       y:::::::::y              P::::P             r:::::r            o::::o     o::::oj::::je:::::::e           c::::::c     ccccccc      t:::::t    ttttttssssss   s:::::s <br/>
    M::::::M               M::::::M        y:::::::y             PP::::::PP           r:::::r            o:::::ooooo:::::oj::::je::::::::e          c:::::::cccccc:::::c      t::::::tttt:::::ts:::::ssss::::::s<br/>
    M::::::M               M::::::M         y:::::y              P::::::::P           r:::::r            o:::::::::::::::oj::::j e::::::::eeeeeeee   c:::::::::::::::::c      tt::::::::::::::ts::::::::::::::s <br/>
    M::::::M               M::::::M        y:::::y               P::::::::P           r:::::r             oo:::::::::::oo j::::j  ee:::::::::::::e    cc:::::::::::::::c        tt:::::::::::tt s:::::::::::ss  <br/>
    MMMMMMMM               MMMMMMMM       y:::::y                PPPPPPPPPP           rrrrrrr               ooooooooooo   j::::j    eeeeeeeeeeeeee      cccccccccccccccc          ttttttttttt    sssssssssss    <br/>
                                        y:::::y                                                                          j::::j                                                                                <br/>
                                        y:::::y                                                                 jjjj      j::::j                                                                                <br/>
                                    y:::::y                                                                 j::::jj   j:::::j                                                                                <br/>
                                    y:::::y                                                                  j::::::jjj::::::j                                                                                <br/>
                                    yyyyyyy                                                                    jj::::::::::::j                                                                                 <br/>
                                                                                                                jjj::::::jjj                                                                                  <br/>
                                                                                                                    jjjjjj                                                                                     <br/>
                        </pre> 
                        <pre>
    _,-'"`-._,-'"`-._,-'"`-._,-'"`-._,-'"`-._,-'"`-._,-'"`-.__,-'"`-._,-'"`-._,-'"`-._,-'"`-._,-'"`-._,-'"`-._,-'"`-._
                        </pre>

                        <div>
                            <Projects/>
                        </div>
                    </div>

                    <div className='contact' id='contact'>
                        <Form/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Portfolio;