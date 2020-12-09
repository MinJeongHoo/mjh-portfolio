import React from 'react';
import styles from './profile.module.css';
import { Link } from "react-router-dom";
const Profile = (props) => {
    return (

        <section className={styles.profile}>
            <h2 className={styles.profile__name}>JeongHoo Min</h2>
            <div className={styles.profileimg}></div>
            <div className={styles.profileDesc}>
                <p>안녕하세요.열정 넘치는 개발자 풀스택 개발자를 꿈꾸는 민정후 입니다.</p>
            </div>
            <div className={styles.link}>
                <Link to={{ pathname: "https://github.com/MinJeongHoo" }} target="_blank" className={styles.linkText}><i className="fab fa-github"></i></Link>
                <Link to={{ pathname: "https://www.linkedin.com/in/jhmin1302" }} target="_blank" className={styles.linkText}><i className="fab fa-linkedin"></i></Link>
            </div>
            <ul className={styles.profile__menu}>
                <li className={styles.menuname}><Link to="/" className={styles.linktext}>About Me</Link></li>
                <li className={styles.menuname}><Link to="/portfolio" className={styles.linktext}>Project</Link></li>
            </ul>
        </section>
    )
};

export default Profile;