import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "73ff1fee-27a4-4cca-8848-26f5eb516ea0");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res)=> res.json());

    if (res.success) {
        setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(res.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li> <img src={mail_icon} alt="" /> Contact@GreatStack.dev</li>
            <li> <img src={phone_icon} alt="" /> +1 123-456-7890</li>
            <li> <img src={location_icon} alt="" /> 77 Massachusetts Ave, Cambridge<br/> MA 01239, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
        <label>Your name</label>
            <input type="text" name="name" aria-placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name="phone" aria-placeholder='Enter your mobile number' required/>
            <label>Write your message</label>
            <textarea name="message" rows="6" required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
