import styles from "@/styles.css";
import Link from "next/link";
export default function Navbar(){
    return(
        <div>
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
        </div>
    );
}