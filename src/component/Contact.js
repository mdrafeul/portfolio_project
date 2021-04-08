import React from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
    const serviceID = "service_id"
    const templateID = "template_id"
    const userID = "user_XrwYcInP4o38Awo44QBAL"

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
    return (
        <div id="contact" className="contact">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please the form to contact with me for details</p>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* Name */}
                        <div className="text-center">
                            <input
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                type="text"
                            />
                            <div className="line"></div>
                        </div>

                        {/* Email */}
                        <div className="text-center">
                            <input
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                type="email"
                            />
                            <div className="line"></div>
                        </div>
                        {/*Phone */}
                        <div className="text-center">
                            <input
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                                type="text"
                            />
                            <div className="line"></div>
                        </div>
                        {/* Subject */}
                        <div className="text-center">
                            <input
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                type="text"
                            />
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <textarea
                                className="form-control"
                                placeholder="Write Something..."
                                name="description"
                                type="text"
                            ></textarea>
                            <div className="line"></div>
                        </div>
                        <button className="btn-main-offer contact-btn" type="submit">Send Message</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Contact