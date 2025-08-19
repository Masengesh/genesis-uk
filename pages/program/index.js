import Form from "@/component/explore";
import Footer from "@/component/footer";
import Navbar from "@/component/nav";
import Consultation from "@/component/section";
import styles from "@/styles.css";

export default function Progrm (){
    return(
        <div className="program">
            <Navbar />
            <div className="pro-top">
                <h1>Programs</h1>
                <p>Personalized Care, Tailored Well-being:<br/>Your Journey to Healing Begins Here.</p>
            </div> 
             <div class="common">
                <div className="program__social yellow">
                    <div className="program__social__icon">
                        <a href=""><img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706080390/instagram-genesis_n62mkf.png" alt="instagram" className="media"/></a>
                        <a href=""><img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706080390/facebook-genesis_ejsuuu.png" alt="facebook" className="media"/></a>
                        <a href=""><img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706080390/whatsapp-genesis_qrftkh.png" alt="whatsap" className="media"/></a>
                    </div>

                    <div className="program__social__explore">
                        <a href="depression">
                            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952555/pexels-cottonbro-studio-4100643_lurw2g.jpg" alt="Depression"/>
                            <div className="info">
                            </div>
                            <h4>Depression</h4>
                            <button>Explore</button>
                        </a>
                        <a href="">
                            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952555/pexels-julia-larson-6456293_quun0q.jpg" alt="Anxiete"/>
                            <div className="info">
                            </div>
                            <h4>Anxiete</h4>
                            <button>Explore</button>
                        </a>
                        <a href="">
                            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952554/medium-shot-people-helping-sad-woman_zleaw6.jpg" alt="Negative"/>
                            <div className="info">
                            </div>
                            <h4>Negative</h4>
                            <button>Explore</button>
                        </a>
                        <a href="">
                            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952554/pexels-ketut-subiyanto-4719936_jcva8t.jpg" alt="Mental Health"/>
                            <div className="info">
                            </div>
                            <h4>Mental Health</h4>
                            <button>Explore</button>
                        </a>
                        <a href="">
                            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952556/pexels-pavel-danilyuk-6753167_oexe7d.jpg" alt="Fear"/>
                            <div className="info">
                            </div>
                            <h4>Fear</h4>
                            <button>Explore</button>
                        </a>
                        <a href="">
                            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952553/pexels-rdne-stock-project-7468241_xxng5i.jpg" alt="Frustation"/>
                            <div className="info">
                            </div>
                            <h4>Frustation</h4>
                            <button>Explore</button>
                        </a>
                    </div>
                    <Consultation />
                </div>
                
        <div class="common__depression">
            <h1 id="depression">Depression</h1>
            <p>Rising from the Shadows: Our Depression Program,<br/>Guiding Light on Your Path to Recovery.<br/></p>
            <div class="common__depression__help">
                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706645108/pexels-gerd-altmann-23180_m3chtx.jpg" alt="" />
                <div class="common__depression__help__writtern">
                    <p>Our depression program offers<br/>comprehensive support to help individuals<br/>overcome the challenges of depression<br/>and reclaimafulfilling life.<br/></p>
                    <p>Our specialized professionals work in<br/>tandem with you to customize treatment,<br/>integrating innovative therapeutic<br/>approaches and compassionate guidance.<br/></p>
                    <p>Individual sessions provide a safe space<br/>to explore thoughts and emotions, while<br/>group therapies foster shared experiences<br/>and the builiding of support bonds.</p>
                    <p>We believe in the importance of adopting<br/>a holistic approach. The program includes<br/> elements such as stress management,<br/>promoting a healthy lifestyle, and<br/>techniques to strengthen emotional<br/> resilience.<br/></p>
                </div>
            </div>
            <div class="common__depression__pragraph">
                <p>Together, we weave a network of hope and understanding, guiding each<br/>individual toward light and rebirth after dark times. you are not alone on this<br/>journey - let us accompany you towards a brighter life.<br/></p>
            </div>
            <Consultation />
        </div>
        <div class="common__anxiete">
            <h1 id="anxiety">Anxiete</h1>
            <h2>Illuminate your path: Our Anxiety program,<br/>a Wellspring of Serenity for Every Stride.</h2>
            <h4>Our anxiety program is designed to provide holistic support for those seeking<br/> to overcome the challenges of anxiety and regain a balanced life.<br/></h4>
            <h4>The experienced professionals on our team collaborate with you to develop a<br/>personalized treatment plan, combining innovative therapeutic approaches<br/>with proven techniques.<br/></h4>
            <div class="common__anxiete__companents">
                <div class="commmon__anxiete__companents__type">
                    <h3>Key Companets:</h3>
                    <p><strong>1.Comprehensive Assessment:</strong><br/>We start with a through<br/>evaluation to understand the<br/>specific factors contributing to<br/>anxiety, allowing for a targeted<br/>approach.<br/>
                    <strong>2.Individual Therapies:</strong>Individual<br/>sessions offer a confidential<br/>space to explore anxiety<br/>triggers, develop management<br/>strategies, and enchance<br/>emotional resilience.<br/>
                    <strong>3.Group Therapies:</strong>Group<br/>sessions provide a supportive<br/>environment,encouraging the<br/>sharing of experiences and<br/>builiding connections with others<br/>facing similar situatins.<br/>
                    <strong>4.Stress Management<br/>Techniques:</strong>Practical tools and<br/> relaxation techniquies are<br/>integrated to help manage<br/>anxiety symptoms on a daily<br/>basis.<br/>
                    <strong>5.Wellness Promotion:</strong>We<br/>emphasize promoting a healthy<br/>lifestyle, includin nutrition,<br/>exercise, and quality sleep, to<br/>enchance overall well-being.<br/>
                    <strong>6.Long-Term Prevention<br/>Strategies:</strong>Our program aims to<br/>provide sustainable skills for<br/>anxiety management, fostering<br/>an enriching life in the long run.<br/></p>
                </div>
                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952555/pexels-mart-production-8458945_qschmu.jpg" alt="" />
            </div>
            <div class="common__anxiete__phobia">
                <p>Together,we weave a network of hope and understanding, guiding each<br/>individual toward light and rebirth after dark times. You are not alone on this<br/>journey - let us accompany you towards a brighter life.<br/></p>
            </div>
            <Consultation />
        </div>
        <div class="common__negative">
            <h1 id="shadow">negative</h1>
            <h2>Beyond Shadows: Our Negativity Program,<br/>Guiding you towards the Light of Positivity.<br/></h2>
            <h4>Our negativity program is specially designed to assist those seeking to shift<br/>their perspective and cultivate a positive mindset.<br/></h4>
            <h4>Guided by experienced professionals, we offer innovative approaches and<br/>well- established practices to overcome negative thought patterns and foster<br/>an optimistic state of mind.<br/></h4>
            <div class="common__negative__positive">
                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706645108/pexels-alex-green-5699756_z4ztwn.jpg" alt="" />
                <div class="common__negative__positive__thinking">
                    <h3>Key Companents:</h3>
                    <p><strong>1.Personalized Assessment:</strong>we<br/> begin by understanding the specific<br/>sources of negativity, allowing for<br/>an individualized approach.<br/>
                    <strong>2.Positive Thinking Coaching:</strong>Coaching sessions aim to identify<br/>and transform negative thoughts<br/>into positive and constructive ones.<br/>
                    <strong>3.Congnitive-Behavioral Therapy<br/>(CBT):</strong>cbt is utilized to target<br/>negative thought patterns and<br/>promote positive changes in behavior.<br/>
                    <strong>4.Mindfulness practices:</strong><br/>Mindfulness exercises help develop<br/>self- awareness and manage<br/>negative thoughts in a constructive<br/>way.<br/>
                    <strong>5.Encouragement of Emotional<br/>Well-being:</strong>We explore techniques<br/>to strengthen emotional resilience<br/>and foster a positive mental<br/>balance.<br/>
                    <strong>6.Group Workshops:</strong>Workshops<br/>encourages the sharing of<br/>experiences and the creation of <br/>mutual support to overcome<br/>negativity.<br/></p>
                </div>
            </div>
            <div class="common__negative__join">
                <h1 id="join">join us to illuminate your path towards positivity.</h1>
                <p>Transform negativity into a driving force for an enriching life.</p>
                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706645108/pexels-jill-wellington-40815_iatj93.jpg" alt="" />
            </div>
            <Consultation />
        </div>
        <div class="health">
        <h1 id="seeking">Mental Health</h1>
        <h2>Healing Minds, Enriching Lives:<br/>Our Mental Health Program for Lsting well-being.<br/></h2>
        <h4>Our Mental Health Program is designed to provide comprehensive support for<br/> individuals seeking lasting well-being.<br/></h4>
        <h4>Guided by dedicated professionals, we  offer a range of evidence-based<br/>interventions to address mental health challenges and promote a thriving life.<br/></h4>
        <div class="health__holistic">
            <div class="health__holistic__plan">
               <h1>Key Components</h1>
               <p><strong>1.Holistic Mental Health Assessment:</strong>We<br/>begin with a thorough assessment to
                 <br/>understand individual mental health<br/>needs comprehensively.<br/>
                  <strong>2.individualized Therapy Plans:</strong>Tailored<br/>therapeutic interventions
                   are crafted to<br/>address specific mental health concerns,<br/>ensuring a personalized 
                   approach.<br/>
                  <strong>3.Counseling and Psychotherapy:</strong>Our<br/>program includes counseling and
                  <br/>psychotherapy sessions to explore<br/>thoughts, emotions, and behavioral<br/>
                  patterns in a supportive environment.<br/>
                  <strong>4.Wellness Promotion:</strong>We emphasize<br/>lifestyle factors such as nutrition,
                  <br/>exericises, and sleep, fostering holistic<br/>well- being.<br/>
                  <strong>5.Mindfulness and stress Reduction:</strong><br/>Techniques for mindfulness and stress
                  <br/>reduction are integrated to enhance<br/>mental resilience and coping skills.<br/>
                  <strong>6.Peer Support Groups:</strong>Creating a<br/>community for mutual support,<br/>
                  individuals can share experiences and<br/>insights, fostering a sense of connection.<br/>
                </p>
            </div>
            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705952554/pexels-cottonbro-studio-4327133_ykqq4a.jpg" alt="" />
        </div>
        <div class="health__transform">
            <h1 id="path"><strong>join us to illuminate your path towards positivity.</strong><br/>Transform negativity into adriving force for an encriching<br/></h1>
            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706645106/pexels-andrea-piacquadio-864939_2_kuk1hy.jpg" alt="" />
        </div>
        <Consultation />
           </div>
            </div>
            <div className="fear">
        <div class="header">
            <h1 id="fear">Fear</h1>
            <p>Conquering Fears, Embracing Freedo:<br/>
               Our Fear Program, Guiding You to Courage and Liberatio.
           </p>
            <p>Our Fear Program is crafted to empower individuals in overcoming fears<br/>
                allowing for the experience of freedom and courage. Led by skilled<br/>
                professionals, We provide evidence-based intervetions to address various<br/>
                fears and facilitate a journey towards resilience and liberation
           </p>
        </div>
        <div class="Components">
            <div class="images">
                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706645106/pexels-cottonbro-studio-4101187_yjdht7.jpg" alt=""/>
            </div>
            <br/>
            <div class="Assessment">
                <h1>1. Key Components:</h1>
                <p><strong>1.Comprehensive Fear Assesment:</strong><br/>We begin with a thotough assessment<br/>to understand the specific fears and<br/>
                    triggers, tailoring our approach to your<br/> unique needs.</p>
                
                <p><strong>2. Cognitive-Behavioral Interventions:</strong><br/>Evidence-based techniques from<br/>Cognitive-Behavioral Therapy (CBT)<br/>
                    are employed to reframe negative<br/>thought patterns and behaviors<br/>associated with fear.
                </p>
                <p><strong>3. Exposure Therapy:</strong>Gradual<br/> exposure to feared situations, done in a <br/>
                    supportive and controlled<br/>environment, helps individuals build<br/>
                    resilience and diminish fear responses.
                </p>
                <p><strong>4. Mindfulness and Relaxation<br/>Techniques:</strong>Incorporating<br/>Mindfulness and Relaxation practices<br/>to manage anxiety and promote a calm state of mind</p>
                 
                <p><strong>5. supportive Counseling:</strong>individual<br/> Counseling sessions provide a safe<br/>space to explore the roots of fear,<br/>
                    discuss comping strategies, and work<br/>towards overcoming specific fears.
                </p>
                <p><strong>6. Empowerment Workshop:</strong>Group<br/> workshops foster a supportive<br/>community, allowing individuals to<br/>
                    share experiences and strategies for overcoming fears.
                </p>
            </div>
        </div>

        <div class="courage">
            <div class="community">
                <h1>Embark on the journey to fearlessness with us.</h1>
                <p>Let us guide you toward a life where fear on longer holds you back, and<br/>
                    courage becomes your companior.
                </p>
            </div>
            
            <div class="toward">
                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706645106/pexels-cottonbro-studio-4101187_yjdht7.jpg" alt=""/>
            </div>
        </div>
            <Consultation />
            </div>
   
            <div className="frustration">
                <div className="pragrapher">
                    <h1>Frustration</h1>
                    <h2>Turning Frustraion into Triumph: Ou Frustration Program,<br/>Guiding You to Empowerment and Success.</h2>
                    <p> Our Frustration Program is desidned to help individuals transform Frustraion<br/>
                        into personal triumphs, fostering empowerment and success.
                    </p>
                    <p>Led by experienced profssionals, we offer evidence-based interventions to <br/>
                       address frustration and pave the way towards resilience and achievement!.
                    </p>
                </div>

                <div className="cognitivee">
                    <div className="cognitive">
                    <div className="cognitive__text">
                    <h1>Key Components:</h1>
                    <p><strong>1. Comprehensive Frustraion<br/>Assessment:</strong> We start with a <br/>thorough evaluation to understand the <br/>
                        specific sources of frustration,<br/>tailoring our approach to your unique<br/>situation.
                    </p>
                    <p><strong>2. cognitive Restructuring Techniques:</strong><br/>  
                        Evidence-based strategies are<br/>employed to eframe negative thought<br/>patterns and cultivate a positive<br/>
                        mindset in the face of frustration.
                    </p>
                    <p><strong>3. Emotional Regulation Skills:</strong>Learning<br/>
                        effective Techniques to manage and <br/>regulate emotions associated with<br/>frustration, promoting a sense of calm<br/>
                        and control
                    </p>
                    <p><strong>4. Communication and Assertiveness<br/>Training:</strong>Building skills to express<br/>
                       needs and concerns assertively,<br/>fostering better interpersonal<br/>relationships and reducing frustration.
                    </p>
                    <p><strong>5. Mindfulness Practices:</strong> Incorporating<br/>mindfullness techniques to enhance<br/> self-awreness and manage<br/>
                    frustration in a mindful and<br/>and constructive manner.</p>

                    <p><strong>6. Supportive Counseling:</strong> individual<br/>counselling sessions provide a safe <br/>space to explore the roots of <br/>
                    frustration, discuss coping strategies,<br/> and work towards a more fulfilling life.</p>
                    </div>
                    <div className="cognitive__image">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706645106/pexels-andrea-piacquadio-3777572_osoyux.jpg" alt=""/>
                    </div>
                    </div>
                    <div className="cognitive__success">
                    <h1>Embark on the journey from frustration to triumph with us</h1>
                    <p>Let us guide you toward a life where frustration becomes a stepping stepping stone to <br/>
                       empowerment and success.
                    </p>
                    <div className="cognitivee__main">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706645107/pexels-thirdman-7659873_rf96f8.jpg" alt=""/>
                    </div>
                </div>
                <Consultation />
                </div>

            </div>
            <div className="maining">
                

                <div className="whether">
                    <p>Whether facing anxiety, depression, negaivity,<br/> fear, Or frustration, our dedicated team is here for <br/>you.</p>
                    <p>Together, we'll create a personalized path,<br/> celebrating, your successes, Overcoming<br/>
                    obstacles, and quiding you towards a life of<br/>resilience, positivity, and personal fulfillment.</p>
                    <p>The invitation is extended.<br/>Your journey to improved muntal health begins here.<br/>
                    join us to illuminate your path to well-being</p>

                </div>

                
                <div className="photos">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706645106/medium-shot-community-meeting_bfuugo.jpg" alt=""/>
                </div>
            </div>
            <Footer />
        </div>
    ); 
}