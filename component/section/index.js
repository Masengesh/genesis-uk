
export default function Consultation() { 
    
    return (
        <div className="main">
            <div className="main__Consultation">
                    <di className="main__Consultation__container">
                        <div className="description">
                            <h2>Free Consultation</h2>
                            <form action=""  id="contact-form" className="description__input">
                                <div className="infos">
                                    <input type="text" name="fullName" placeholder="Full Name" id="contact-name" />
                                    <input type="email" name="email" placeholder="Email" id="contact-email" />
                                    <input type="tel" name="phoneNumber" placeholder="Phone Number" id="contact-number" />
                                </div>
                                <div className="message">
                                    <input type="text" placeholder="Messages" id="contact-project"/>
                                    {/*<p id="contact-message"></p>*/}
                                    <button type="submit" >Send Message</button>
                                </div>
                            </form>
                            <div className="social">
                                <a href=""><img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706080390/instagram-genesis_n62mkf.png" alt="instagram" className="media"/></a>
                                <a href=""><img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706080390/facebook-genesis_ejsuuu.png" alt="facebook" className="media"/></a>
                                <a href=""><img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706080390/whatsapp-genesis_qrftkh.png" alt="whatsap" className="media"/></a>
                            </div>
                        </div>
                        <div className="doctor">
                            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952553/pexels-domineves-anthony-12495583_npuepz.jpg" alt="doctor" />
                        </div>
                    </di>
                </div>
        </div>
    );
}
