import './_welcome.scss';
// import me from '../assets/me.jpg'
import arrow from '../assets/arrow.png'
import { useState } from 'react';
function Welcome () {
    
    return (
        <>
            <div className='welcome__container'>
                    <div className='welcome__text'>
                        <h1>Hi, my name is Malin</h1>
{/* <pre style={{letterSpacing: "1px"}}>                        
┃ ┃┛   ┛┛┏┏   ┏┏ ┏━┃┃  ┛┏━ <br/>
┏━┃┃   ┃ ┃┃┃  ┃┃┃┏━┃┃  ┃┃ ┃<br/>
┛ ┛┛,  ┛ ┛┛┛  ┛┛┛┛ ┛━━┛┛┛ ┛<br/>
</pre>
<pre style={{transform: "scale(0.5)"}}>
 █████   █████  ███         █████  ██                    ██████   ██████           ████   ███            <br/>
▒▒███   ▒▒███  ▒▒▒         ▒▒███  ███                   ▒▒██████ ██████           ▒▒███  ▒▒▒             <br/>
 ▒███    ▒███  ████         ▒███ ▒▒▒  █████████████      ▒███▒█████▒███   ██████   ▒███  ████  ████████  <br/>
 ▒███████████ ▒▒███         ▒███     ▒▒███▒▒███▒▒███     ▒███▒▒███ ▒███  ▒▒▒▒▒███  ▒███ ▒▒███ ▒▒███▒▒███ <br/>
 ▒███▒▒▒▒▒███  ▒███         ▒███      ▒███ ▒███ ▒███     ▒███ ▒▒▒  ▒███   ███████  ▒███  ▒███  ▒███ ▒███ <br/>
 ▒███    ▒███  ▒███         ▒███      ▒███ ▒███ ▒███     ▒███      ▒███  ███▒▒███  ▒███  ▒███  ▒███ ▒███ <br/>
 █████   █████ █████  ██    █████     █████▒███ █████    █████     █████▒▒████████ █████ █████ ████ █████<br/>
▒▒▒▒▒   ▒▒▒▒▒ ▒▒▒▒▒  ██    ▒▒▒▒▒     ▒▒▒▒▒ ▒▒▒ ▒▒▒▒▒    ▒▒▒▒▒     ▒▒▒▒▒  ▒▒▒▒▒▒▒▒ ▒▒▒▒▒ ▒▒▒▒▒ ▒▒▒▒ ▒▒▒▒▒ <br/>
                                                                                                         <br/>
                                                                                                         <br/>
</pre> */}
                        <p>Not a Matrix geek, just a fresh frontend developer having some fun with one of my many ideas</p>
                        <p>I'm a fresh frontend developer planning to go into UX/UI design.</p>
                    </div>
                    
                    <div className='welcome__img'>
                        <img src={arrow} alt="" className='welcome__arrow'/>
                        <p className='welcome__arrowtext'>Hover for a "very" professional AI image</p>
                    </div>

            </div>
        </>
    )
}
export default Welcome;