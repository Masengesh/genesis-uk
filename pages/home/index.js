
import Footer from "@/component/footer";
import Consultation from "@/component/section";
import Link from "next/link";
import About from "../about";
import Contact from "@/pages/contact/index"
import Form from "@/component/explore";


export default function Home() {
    return (
        <div className="home">

            <section className="top">
                <nav>
                    <div className="logo">
                        <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705872503/WhatsApp_Image_2024-01-15_at_09.14.46_klkslx.jpg" alt="logo" />
                    </div>
                    <div className="menu">
                        <ul>
                            <Link href="/home" passHref>Home</Link>
                            <Link href="/program" passHref>Programs</Link>
                            <Link href="/news" passHref>News</Link>
                            <Link href="/team" passHref>Our Team</Link>
                            <Link href="/about" passHref>About</Link>
                            <Link href="/contact" passHref>Contact</Link>
                        </ul>
                    </div>        
                </nav>

                
                <div className="intro">
                <div className="bigmage"></div>
                </div>
                <div className="title-image">
                    <h1>A haven of peace for <br/>your inner healing</h1>
                    <p>Welcome to our clinic, a haven of well-being<br/>dedicated to your inner healing.</p>
                    <button>Prendre Rdv</button>
                    </div>

                <div className="cards">
                    <div className="card">
                        <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705882467/6144_ctin48.jpg" alt="empathetic" />
                        <h2>Empathetic Listening</h2>
                        <p>Every word matters, every<br/>emotion heard.</p>
                    </div>

                    <div className="card">
                        <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705882457/5904_wxmoec.jpg" alt="Individual" />
                        <h2>Individual Healing Plan</h2>
                        <p>Your path to healing, carefully <br/>mapped.</p>
                    </div>

                    <div className="card">
                        <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705882441/SL-091823-63290-36_chawan.jpg" alt="Group" />
                        <h2>Group Therapy Support</h2>
                        <p>United for healing, stronger<br/>together.</p>
                    </div>

                    <div className="card">
                        <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705882477/20499_l80zlh.jpg" alt="Personalize" />
                        <h2>Personalized Therapy</h2>
                        <p>Your journey, your healing, one<br/> step at time.</p>
                    </div>

                </div>

                <div class="activities">
                    <h2>WE WANT TO WALK WITH YOU</h2>
                    <p>Caring services to soothe your journey towards well-being</p>
                    <div className="cards2">
                        <div className="card2">
                            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952557/pexels-alex-green-5699423_x1xu0n.jpg" alt="calm" />
                            <h3>Assured Calm</h3>
                            <p>Navigate through anxiety with<br/>serenity; your peace of mind<br/>begins here</p>
                            <button>SEE MORE</button>
                        </div>

                        <div className="card2">
                            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952559/pexels-cottonbro-studio-4101187_effnko.jpg" alt="fredoom" />
                            <h3>Toward Enlightened<br/>Freedom</h3>
                            <p>Navigate through anxiety with<br/>serenity; your peace of mind<br/>begins here</p>
                            <button>SEE MORE</button>
                        </div>

                        <div className="card2">
                            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952556/pexels-alex-green-5700164_z9akvb.jpg" alt="united" />
                            <h3>United in Resilience</h3>
                            <p>You're never alone: together,<br/>stronger against the challenges.</p>
                            <button>SEE MORE</button>
                        </div>

                        <div className="card2">
                            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952556/group-diverse-people-holding-hands-up-air_dcywuk.jpg" alt="voice" />
                            <h3>Inspiring Voices</h3>
                            <p>Sharing our stories, guiding<br/> towards hope: Testimonies that<br/> transform lives.</p>
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>
                <div className="program">
                <div className="program__reconciliation">
                    <div className="program__reconciliation__text">
                        <h1>Towards Healing<br/>and Reconciliation</h1>
                        <h3>Let us be your guide to individual healing <br/>and restoring harmony with your loved <br/>ones. Your future begins with our <br/>compassionate support.</h3>
                        <button>Programs</button>
                    </div>
                    <div className="program__reconciliation__image">
                        <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952557/pexels-antoni-shkraba-7579306_bmyxjm.jpg" alt="Healing" />
                    </div>
                </div>
                <Form />
                
            </div>
            <div className="testimonial">
                <div className="main">
                <div className="main__header">
                    <h1>Client Testimonials</h1>

                    <div className="liatestimons">

                        <div className="liatestimons__image">
                            <p>"Life-Changing therapy! Overcome<br/>
                                struggles, found balance, and now<br/>
                                thriving. Grateful for transformative<br/>
                                support!"
                            </p>
                            <div className="liatestimons__image__single">
                                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705872503/WhatsApp_Image_2024-01-15_at_09.14.46_klkslx.jpg" alt="jp "/>
                               <h4>Eden Bothman<br/>
                                  Photographer<br/>
                                  CEO ShineStyle
                               </h4>
                            </div>
                        </div>

                        <div className="liatestimons__image">
                            <p>"Therapy here was my lifeline. Tailored<br/>
                                approach, safe space, and now I'm<br/>
                                thriving. Thank you for the unwavering<br/>
                                sopport!"
                            </p>
                            <div className="liatestimons__image__single">
                                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705872503/WhatsApp_Image_2024-01-15_at_09.14.46_klkslx.jpg" alt=""/>
                                <h4>Terry Backer<br/>
                                    Musicien / Youtuber
                                 </h4>
                           </div>
                       </div>

                        <div className="liatestimons__image">
                            <p>"Transformative therapy! Professional'<br/>
                                caring, and guided me to a brighter<br/>
                                future. My life has truly changed."
                                </p>
                                    <div className="liatestimons__image__single">
                                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705872503/WhatsApp_Image_2024-01-15_at_09.14.46_klkslx.jpg" alt=""/>
                                    <h4>Karine TucKer<br/>
                                        Florist<br/>
                                        CEO Whiteflowers
                                    </h4>
                            </div>
                        </div>

                    </div>
                </div>
                <Consultation />
                <div className="main__team">
                    <div className="main__team__description">
                        <h2>New Dawn, Fresh Start</h2>
                        <h3>Embrace the opportunity for a fresh<br/>start. Your journey to a fulfilling life<br/>
                        begins here.</h3>
                        <button>Our Team</button>
                        <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705872503/WhatsApp_Image_2024-01-15_at_09.14.46_klkslx.jpg" alt="logo"/>
                    </div>
                    <div className="main__team__image">
                        <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952553/pexels-vlad-chet%CC%A6an-2923156_oc02ur.jpg" alt=""/>
                    </div>
                </div>
                </div>
            </div>

    <div class="mission">
        <div class="mission-frist">
            <h1>Our mission</h1>
            <p>Help you rediscover the joy of<br/>living and awaken the happines with in you<br/></p>
                <Link href="/about "><button>About Us</button></Link>
        </div>
        <div class="mission-second">
            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952553/pexels-andre-furtado-1429395_qbqxid.jpg" alt="" />
        </div>
        <Footer />
        </div>
        </section>
            

        </div>
    );
}
