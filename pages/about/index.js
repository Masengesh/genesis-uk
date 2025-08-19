import styles from "@/styles.css";
import Form from "@/component/explore";
import Footer from "@/component/footer";
import Consultation from "@/component/section";
import Navbar from "@/component/nav";

export default function About() {
    return(
     
        <div className="beginning">
        <Navbar/>
    <div className="beginning__mission">
        <h1>Our mission</h1>
        <p>Help you rediscover the joy of <br/>living and awaken the happiness within you<br/></p>
        <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706204916/ynsphk3trrzwvwehzjl2.jpg" alt="" />
    </div>
    <div className="beginning__charpter">
        <div className="beginning__charpter__begins">
            <div className="beginning__charpter__begins__text">
                <h1>A New Charpter Begins</h1>
                <p>We understand the concerns you may be<br/> feeling ,but remember ,it's not the end of<br/> the word. It's the beginning of a new<br/>Phase towords healing.We are here for<br/>you,for your family,every step of the<br/> way.Together,we are Writing a new<br/>Charpter filled with hope and renewal.<br/></p>
            </div>
            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706204908/rdkyzwy0dellqjsf1jap.jpg" alt="" />
        </div>
        <div className="beginning__charpter__listening">
            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706204918/fd4bhqyqvlpqgeuhktcf.jpg" alt="" />
            <div className="beginning__charpter__listening__beings">
                <h1>Listening to<br/>your Mental Well-being</h1>
                <p>in our mental health clinic,we are<br/>committed to caring for you well being<br/>with a bold and forword -thinking<br/>approach.<br/></p>
                <p>our seasoned experts,with a strong<br/>track record,provide you with serious<br/>and reassuring support. we antcipate<br/> your needs,guiding your journey with<br/> confidence and proativity.<br/></p>
                <p>Together, lets shape a balanced and<br/> flourishing mental future. Take the frist<br/> step toward a rewarding life becouse,<br/>with us, you mental health is  our top<br/>priority.<br/></p>
            </div>
        </div>
        <Consultation />
    </div>
        
            <div className="beginning__healing">
                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705872503/WhatsApp_Image_2024-01-15_at_09.14.46_klkslx.jpg" alt="" className="img"/>
             <div className="beginning__healing__reconciliation">
                    <div class="beginning__healing__reconciliation__phrases">
                        <h1>To wards Healing<br/>and Reconciliation<br/></h1>
                        <p>In our clinic, "To wards Enlightened<br/>Freedom is not just a phrase; it's a<br/>comforting pledge through out your<br/>journey to healing.<br/></p>
                        <p>We understand that this path may seem<br/> intricate, but with our dedicated team,<br/>each step is marked by compassion and a<br/>commitment to your well-being.<br/></p>
                        <p>To our client, families,and friends, rest<br/>assured you are not alone. Together, we<br/>walk hand towords a light guided<br/>by inner healing and rediscovered<br/> freedom.<br/></p>
                    </div>
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706204908/qi2fais2ngozl7iketxp.jpg" alt="" />
                </div>
                <div className="beginning__healing__resilience">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706204908/sc1kgtuvabgwoskr6lhz.jpg" alt="" />
                    <div className="beginning__healing__resilience__united">
                        <h1>United in<br/>Resilience<br/></h1>
                        <p>Embark with us on a healing<br/>journey where each step is <br/>marked by the strength of<br/>unity.<br/></p>
                        <p>Resilience is our common<br/>thread here. As a community,<br/>we overcame challenges<br/>together, sharing smiles and<br/>victories.<br/></p>
                        <p>Our dedicated professionnals<br/>guide this union towards a<br/>flourishing future.</p>
                        <p>Becouse together, we are<br/>stronger, and within this<br/> unity, resilience became a<br/>collective path towards well-<br/>being and healing.<br/></p>
                    </div>
                </div>
            </div>
            <Consultation />
            <div className="about">
        <div className="Voices">
            <div className="Inspiring">
                <h1>Inspiring Voices</h1>
                <p>Our clinic goes beyond individual<br/>treatment</p>

                <p>We believe in the power of community and<br/>
                   host therapeutic gatherings, where our<br/>
                   patients can exchange, testify, and share<br/>
                   their experiences in a supportive<br/>environment.
                </p>

                <p>These meetings, guided by our seasoned<br/>
                    professionals, provide a safe space where<br/>
                    everyone finds understanding and support.<br/>
                    Together, with our dedicated physicians,<br/>
                    we shape a collective path to healing
                </p>

                <p>In solidarity, exchang, and medicol<br/>
                   expertise, we build a future where<br/>
                   everyone can thrive. Be part of this unique<br/>
                   therapeutic experience, where unity<br/>
                   becomes the catalyst for healing
                </p>
            </div>
            <div className="images">
                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706204917/v11fuhyvhxuvbuz0qqmp.jpg" alt="jph" />
            </div>
        </div>

            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706204919/dxeo0v7xkafoegtfrecr.jpg" alt="jph" />
        
            </div>
            <Form />
            <Footer />
        </div>
    );
}