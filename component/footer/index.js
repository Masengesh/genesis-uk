import Link from "next/link";

export default function Footer(){
    const phoneNumber = '+256773515447';
    return (
        <div className="mission">
        <div className="mission-thrid">
            <div className="mission-thrid-terms">
                <div className="mission-thrid-terms-logo">
                    <div className="mission-thrid-terms-logo-symbole">
                        <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705872503/WhatsApp_Image_2024-01-15_at_09.14.46_klkslx.jpg" alt="" />
                    </div>
                    <div className="mission-thrid-terms-logo-page">
                        <a href=""><img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706080390/instagram-genesis_n62mkf.png" alt="instagram" className="media"/></a>
                        <a href=""><img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706080390/facebook-genesis_ejsuuu.png" alt="facebook" className="media"/></a>
                        <a href=""><img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706080390/whatsapp-genesis_qrftkh.png" alt="whatsapp" className="media"/></a>
                    </div>
                </div>
                <div className="mission-thrid-terms-navigation">
                    <ul>
                        <Link href="home" className="link">Home</Link>
                        <Link href="program" className="link">Programs</Link>
                        <Link href="news" className="link">News</Link>
                        <Link href="team" className="link">Our Team</Link>
                        <Link href="/about" className="link">About Us</Link>
                        <Link href="contact" className="link">Contact Us</Link>
                    </ul>
                </div>
                <div className="mission-thrid-terms-contact">
                    <h1>Contact</h1>
                    <Link href={`tel:${phoneNumber}`} className="links">{phoneNumber}</Link>
                    <Link href="mailto:contact@genesis.com" className="link">contact@genesis.com</Link>
                    <p className="adres">21 stress genesis,Arizona AA77877</p>
                    <div className="mission-thrid-terms-contact-name">
                        <input type="full name" name="full name"placeholder="Full name" />
                    </div>
                    <div className="mission-thrid-terms-contact-email">
                        <input type="email" name="email"placeholder="Email" />
                    </div>
                    <div className="mission-thrid-terms-contact-number">
                        <input type="phone number" name="phone number"placeholder="Phone number" />
                    </div>
                    <div className="mission-thrid-terms-contact-message">
                        <input type="message" name="message" placeholder="message" />
                    </div>
                    <button>Send Message</button>
                </div>
            </div>
            <div className="mission-thrid-policy">
                <a href="#" className="link">Privacy Policy</a>
                <a href="#" className="link">Cookies Policy</a>
                <a href="#" className="link">@ 2024 Genesis LLC All right reserved</a>
            </div>
        </div>
        </div>
    );
}