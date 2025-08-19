import Footer from "@/component/footer";
import Navbar from "@/component/nav";
import Consultation from "@/component/section";
import styles from "@/styles.css";
import Link from "next/link";

export default function Contact() {
    const phoneNumber = '+256773515447';
    return(
        <div className="contact">
            <Navbar />
            <div className="contact_introduction">
                <h1>Contact Us</h1>
                <p>
                Your first step to well-being starts here.<br/> Reach out to us for information or to take a    book.<br/> We are here to guide you.
                </p>
            </div>
            <div className="contact__cons">
                <div className="contact__cons__infos">
                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706381156/nrczkyqf1cuvfopn1pcm.jpg" alt="contact-photo"/>
                <div className="contact__cons__infos_address">
                    <div className="contact__cons__infos_address_1">
                        <h1>Contact</h1>
                        <Link href={`tel:${phoneNumber}`} className="link" passHref>{phoneNumber}</Link>
                        <Link href="mailto:contact@genesis.com" className="link" passHref>contact@genesis.com</Link>
                        <p>21 street genesis, Arizona <br/>AA77877</p>
                    </div>
                </div>
                </div>
                <di className="main__Consultation__container consultation__cantact">
                        <div className="description">
                            <h2>Free Consultation</h2>
                            <div className="description__input">
                                <div className="infos">
                                    <input type="text" name="fullName" placeholder="Full Name" className="name" />
                                    <input type="email" name="email" placeholder="Email" className="email" />
                                    <input type="tel" name="phoneNumber" placeholder="Phone Number" className="number" />
                                </div>
                                <div className="message">
                                    <input type="text" placeholder="Messages"/>
                                    <button>Send Message</button>
                                </div>
                            </div>
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
            
            <div className="contact__map">
                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705872503/WhatsApp_Image_2024-01-15_at_09.14.46_klkslx.jpg" alt="" />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7728558614435!2d32.563297707267395!3d0.27352536409546846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd1132999d4d%3A0xe85cf9a2cfaca9b7!2sFreedom%20City%20Mall!5e0!3m2!1sen!2sug!4v1706443610317!5m2!1sen!2sug" width="755" height="580" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer/>
        </div>
    );
}