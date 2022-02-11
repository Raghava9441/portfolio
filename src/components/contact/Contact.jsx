import React, { useContext, useRef,useState } from 'react';
import './contact.scss';
import phone from '../../img/phone.png'
import mail from '../../img/mail.png'
import adress from '../../img/address.png'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

export const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode =theme.state.darkMode

    const [done, setDone] = useState(false);
    const formRef = useRef()

        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_9i9c6ei', 'template_ry0uwsp', formRef.current, 'user_TQVAJ9rPPytC1X0ujtWCK')
              .then((result) => {
                  console.log(result.text);
                  setDone(true)
              }, (error) => {
                  console.log(error.text);
              });
          };

    
  return <div className='c'>
      <div className="c__bg"></div>
      <div className="c__wrapper">
          <div className="c__left">
            <div className="c__title">
                Let's Discuss your Project
            </div>
            <div className="c__info">
                <div className="c__info-item">
                    <img src={phone} alt="" className='c__icon'/>
                    +91 9133472107
                </div>
                <div className="c__info-item">
                    <img src={mail} alt="" className='c__icon'/>
                    raghavareddy944161@gmail.com
                </div>
                <div className="c__info-item">
                    <img src={adress} alt="" className='c__icon'/>
                    5/4-B,kadapa,AP,516434
                </div>
            </div>
          </div>
          <div className="c__right">
            <p className="c__desc">
                <b>What's your story</b> Get in touch. Always available for freelancing if the right project comes along me.
            </p>
            <form ref={formRef} onSubmit = {sendEmail} className='c__form'>
                <input style={{backgroundColor:darkMode && "#333",color:darkMode && "white"}} type="text" placeholder='Name' name='user_name' className='c__input' />
                <input style={{backgroundColor:darkMode && "#333",color:darkMode && "white"}} type="text" placeholder='subject' name='user_subject' className='c__input' />
                <input style={{backgroundColor:darkMode && "#333",color:darkMode && "white"}} type="text" placeholder='Email' name='user_email' className='c__input' />
                <textarea style={{backgroundColor:darkMode && "#333",color:darkMode && "white"}} name="message" id="" cols="30" rows="5" className='c__textarea'></textarea>
                <button className='c__button'>Submit</button>
                {done && "Thank you..."}

            </form>
          </div>
      </div>
  </div>;
};
