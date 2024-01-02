import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
// import { redirect } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()


    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
        clearTimeout(timeoutId)
        }
    }, [])


    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('default_service', 'template_y3pyncy', form.current, '_u5y87WZxnZh0yo86')
          .then(
            () => {
              toast("Message sent successfully!", {
              onClose: () => {
                setTimeout(() => {
                    window.location.reload();
                }, 4500);
                }
              });

            },
            () => {
              toast('Failed to send the message, please try again');
            }
          )
      }


      return (
        <>
          <div className="container contact-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
                I am interested in Entry Level (New-Grad)
                Software Engineer, QA Engineer and Back-end Developer
                positions. However, don't hesitate to reach out
                using the contact form if you have questions or requests!
              </p>
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <ul>
                    <li className="half">
                      <input placeholder="Name" type="text" name="name" required />
                    </li>
                    <li className="half">
                      <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        required
                      />
                    </li>
                    <li>
                      <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                      />
                    </li>
                    <li>
                      <textarea
                        placeholder="Message"
                        name="message"
                        required
                      ></textarea>
                    </li>
                    <li>
                      <input type="submit" className="flat-button" value="SEND" />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={3500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnFocusLoss
              draggable
              theme="dark"
            />
          </div>
          <Loader type="ball-scale-ripple" />
        </>
      )
}

export default Contact