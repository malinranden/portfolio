import { useState } from 'react'
import './_Home2.scss'
import backgroundVideo from '../assets/home2/numbersVideo.mp4'
import blueMatrix from '../assets/home2/blueMatrix.mp4'
import redpill from '../assets/home2/redpill.png'
import bluepill from '../assets/home2/bluepill.png'
import { useNavigate } from 'react-router-dom'

function Home2 () {

    const navigate = useNavigate();
    const [pillchoice, setPillchoice] = useState(true);
    const [bluePill, setBluePill] = useState(false);

    return (
        <>
            <div className='Background-Home'>

                <video 
                    className='backgroundVideo'
                    autoPlay
                    loop
                    muted
                    playsInline
                    onCanPlay={(e) => e.target.playbackRate = 0.3}>
                    <source src={backgroundVideo} type='video/mp4'/>
                </video>

                <div className="Background-Part">
                </div>

                <video  className='blueVideo'
                    autoPlay
                    loop
                    muted
                    playsInline
                    onCanPlay={(e) => e.target.playbackRate = 1}>
                    <source src={blueMatrix} type='video/mp4' />
                </video>

                <div className='right-side'>
                </div>

                <div className='cat-div'>
                </div>

                <div className='duck-div'>
                </div>

                {pillchoice && (
                    <div className='pill-parent'>
                        <div className='pill-div'>

                            <div className='two-options'>
                                <div className='pill-background' 
                                    onClick={() => navigate("/portfolio")}
                                    style={{cursor: "pointer"}} >
                                    <p className='p-red'>The Red Pill</p>
                                    <img src={redpill} alt="" />  
                                </div>
                                <p className='p-red-2'>the red pill will take you directly to my portfolio</p>  
                            </div>

                            <div className='two-options'>
                                <div className='pill-background'
                                    onClick={() => {setPillchoice(false); setBluePill(true);}}
                                    style={{
                                        cursor: "pointer",
                                        }} >
                                    <p className='p-blue'>The Blue Pill</p>
                                    <img src={bluepill} alt="" />
                                </div>
                                <p className='p-blue-2'>the blue pill lets you stay in the matrix</p>                           
                            </div>
                            
                        </div>
                    </div>
                )}

                {bluePill && (
                    <div className="blue-pill-choice">
                        {/* <p>Free choice used </p>
                        <p>Refresh site to try again</p> */}
                        {/* <h2>Me and Morphues are very disappointed</h2>
                        <p>But we approve of having a free choice</p> */}
                        <p>come on! <br/>be game</p>
                        {/* <p>what...</p>
                        <p>Are you sure?</p>
                        <p>Are you really sure?</p><br/> */}
                        <button onClick={() => {setBluePill(false); setPillchoice(true)}}>try again</button>
                    </div>
                )}

            </div>
        </>
    )
}

export default Home2;