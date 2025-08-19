import Footer from '@/component/footer';
import Navbar from '@/component/nav';
import Consultation from '@/component/section';
import styles from '@/styles.css';

export default function Team () {
    return (
        <div className="team">
        {/*<div class="team__home">
            <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705872503/WhatsApp_Image_2024-01-15_at_09.14.46_klkslx.jpg" alt="" />
            <ul>
                <a href="#">Home</a>
                <a href="#">Programs</a>
                <a href="#">News</a>
                <a href="#">Our Teams</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </ul>
        </div>*/}
        <Navbar />
        <div className="team__group">
            <h1>Our Team</h1>
            <p>United by Devotion, Guided by Expertise. Explore the<br/>strength of our team dedicated to your well-being.<br/></p>
        </div>
        <div className="team__workers">
            <div className="team__workers__departement">
                <div className="team__workers__departement__yepmo">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706460242/xsy7wrnrgw2jqmkg9fjo.jpg" alt="" />
                    <h1>Philippe<br/>YEPMO<br/></h1>
                    <p>CEO<br/>Neurologist Professor<br/></p>
                </div>
                <div className="team__workers__departement__chan">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706460246/jqvhspw4mg7wcaiczgu0.jpg" alt="" />
                    <h1>Xiu CHAN</h1>
                    <p>Neurologist</p>
                </div>
                <div className="team__workers__departement__william">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706460242/ufeypjshoecwbxks8zkt.jpg" alt="" />
                    <h1>William Carter</h1>
                    <p>Neurologist</p>
                </div>
                <div className="team__workers__departement__spencer">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706460234/mxiindwzn78ucduv6ueb.jpg" alt="" />
                    <h1>Ivy Spencer</h1>
                    <p>Psychologist</p>
                </div>
                <div className="team__workers__departement__alade">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706460235/qwp34qppcb1pnhuvwwg8.jpg" alt="" />
                    <h1>Tamia ALADE</h1>
                    <p>Psychologist</p>
                </div>
                <div className="team__workers__departement__jones">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706460235/vqpxnjtzoziaiwg62uvl.jpg" alt="" />
                    <h1>Alicia JONES</h1>
                    <p>Family and Couples<br/>Therapist<br/></p>
                </div>
                <div className="team__workers__departement__zineb">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706460235/qbuzyy5tel74aqz2nxra.jpg" alt="" />
                    <h1>Zineb AOUAR</h1>
                    <p>Mental Health Nurse</p>
                </div>
                <div className="team__workers__departement__aissa">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706460234/ptrshjajkodhh52b6gpz.jpg" alt="" />
                    <h1>Aissa DIABY</h1>
                    <p>Mental Health Nurse</p>
                </div>
                <div className="team__workers__departement__victoria">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706460235/sthksnzdp6cxsmioos7s.jpg" alt="" />
                    <h1>Victoria Garcia</h1>
                    <p>Mental Health<br/>Occuppatinal Therapist<br/></p>
                </div>
                <div className="team__workers__departement__simon">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706460241/dzbmgkxmuux857qfv8mx.jpg" alt="" />
                    <h1>Simon<br/>NGANNOU<br/></h1>
                    <p>mental fitnness coach</p>
                </div>
                <div className="team__workers__departement__santos">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706460241/gms4jvlfh9zertzqaik3.jpg" alt="" />
                    <h1>Rivaldo DE<br/>SANTOS<br/></h1>
                    <p>Mental Health<br/>Counselor<br/></p>
                </div>
                <div className="team__workers__departement__sonia">
                    <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706460241/gth9t0xftqinrocpkee9.jpg" alt="" />
                    <h1>Sonia<br/>CAMPBELL<br/></h1>
                    <p>Mental Health Advisor</p>
                </div>
                <Consultation />
            </div>
        </div>
        
        <div className="team__pictures">
            <div className="team__pictures__sign">
                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1705872503/WhatsApp_Image_2024-01-15_at_09.14.46_klkslx.jpg" alt="" />
            </div>
            <div className="team__pictures__wall">
                <img src="https://res.cloudinary.com/dhxqidnfl/image/upload/v1706460234/zrowjtrxjkhnvwq6yztl.jpg" alt="" />
            </div>
        </div>
        <Footer/>
    </div>
    );
}