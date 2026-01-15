import './_Form.scss';
function Form () {
    return (
        <>
            {/* action is for backend */}
    
            <div className='form'>
                <div className='form__left'>
                    <h2 className='form__h2'>Let's connect!</h2>
                    <div className='form__symbols'>
                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                        <a href=""><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <form className='form__inputfield' action="send.php" method='POST'> 
                    <input className='form__inputs' id="name" type="text" placeholder='Name'/>
                    <input className='form__inputs' type="text" placeholder='Email' id="Email" />
                    <textarea className='form__inputs' type="text" placeholder='Message' cols="40" rows="10"/>
                    <button className='form__button'>Send Message</button>
                </form>
            </div>

        </>
    )
}
export default Form;