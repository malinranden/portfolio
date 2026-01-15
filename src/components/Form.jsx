import './_Form.scss';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Form() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5wnl0fz',
        'template_qarcuzj',
        formRef.current,
        'e6A4r7voU8HvTM7tE'
      )
      .then(
        () => {
          alert('Message sent!');
          formRef.current.reset();
        },
        (error) => {
          console.error('FAILED...', error);
        }
      );
  };

  return (
    <div className="form">
      <div className="form__left">
        <h2 className="form__h2">Let's connect!</h2>
        <div className="form__symbols">
          <a href=""><i className="fa-brands fa-linkedin"></i></a>
          <a href=""><i className="fa-brands fa-github"></i></a>
        </div>
      </div>

      <form
        ref={formRef}
        className="form__inputfield"
        onSubmit={sendEmail}
      >
        <input
          className="form__inputs"
          type="text"
          name="name"
          placeholder="Name"
          required
        />

        <input
          className="form__inputs"
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <textarea
          className="form__inputs"
          name="message"
          placeholder="Message"
          rows="10"
          cols="40"
          required
        />

        {/* Honeypot (anti-spam) */}
        <input
          type="text"
          name="company"
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
        />

        <input type="submit" value="Send Message" />
        
      </form>

    </div>
  );
}

export default Form;



//my version, not working yet

// import './_Form.scss';
// import emailjs from '@emailjs/browser';
// // import { useState } from 'react';
// function Form () {
//     const sendEmail = () => {
//             const templateParams = {
//                 name: "",
//                 notes: 'Check this out!',
//                 email: '#',
//                 message: '#message',
//             };

//             emailjs
//             .send('service_5wnl0fz', 'template_qarcuzj', templateParams, {
//                 publicKey: 'e6A4r7voU8HvTM7tE',
//             })
//             .then(
//                 (response) => {
//                 console.log('SUCCESS!', response.status, response.text);
//                 },
//                 (err) => {
//                 console.log('FAILED...', err);
//                 },
//             );
//     }



//     // const [sendEmail, setSendEmail] = useState();

//     return (
//         <>
//             {/* action is for backend */}
    
//             <div className='form'>
//                 <div className='form__left'>
//                     <h2 className='form__h2'>Let's connect!</h2>
//                     <div className='form__symbols'>
//                         <a href=""><i className="fa-brands fa-linkedin"></i></a>
//                         <a href=""><i className="fa-brands fa-github"></i></a>
//                     </div>
//                 </div>
//                 <form className='form__inputfield' > {/* not used?: action="" method=''*/}
//                     <input className='form__inputs' type="text" id="name" placeholder='Name' required/>
//                     <input className='form__inputs' type="text" id="email" placeholder='Email' required/>
//                     <textarea className='form__inputs' type="text" id="message" placeholder='Message' cols="40" rows="10" required/>
//                     <button type='submit' className='form__button' >Send Message</button>
//                 </form>
//             </div>

//         </>
//     )
// }
// export default Form;

