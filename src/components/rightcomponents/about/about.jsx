import React from 'react';
import styles from './about.module.css';
import { Link } from "react-router-dom";
const About = (props) => {
    return (
        <section className={styles.about}>
            <div className={styles.aboutInfo}>
                <div className={styles.aboutIntro}>
                    <h1 className={styles.aboutName}>민정후(JayMin)</h1>
                    <p className={styles.aboutYear}>Junior Developer(3years)</p>
                    <p className={styles.aboutDesc}>현재 4년차를 향해가는 열정 넘치는 개발자입니다.<br />
                    Front-End 부분 HTML ,CSS ,JAVASCRIPT 부터 Back-End 부분 JAVA ,Python ,Oracle 등 사용할 수 있습니다.<br />
                    아래 저의 포트폴리오를 확인해 주세요.</p>
                    <div className={styles.buttonField}>
                        <Link to="/portfolio" className={styles.link}><button className={styles.button}><i className="far fa-file-alt"></i>View Portfolio</button></Link>
                    </div>
                </div>
                <div className={styles.mariobackground}>
                    <div className={styles.welcome}>Welcome My Page!!</div>
                    <div className={styles.marioimage}></div>
                </div>

            </div>
            <div className={styles.aboutSkils}>
                <h2 className={styles.skilsTitle}>What I do</h2>
                <p className={styles.skilsDesc}>삼성전자 PLM 관련 프로젝트를 주로 참여했으며 ,그 외에 공기업 프로젝트 등을 경험했습니다.</p>
                <div className={styles.skilsList}>
                    <div className={styles.skilsInfo}>
                        <div>
                            <i className="card-icon fab fa-html5"></i>  <i className="card-icon fab fa-css3-alt"></i>
                        </div>
                        <h2 className={styles.skilsName}>HTML & CSS</h2>
                        <p>Html Markup을 활용하여 웹페이지의 틀을 만들 수 있고 Css를 통해 스타일링을 할 수 있습니다.</p>
                    </div>
                    <div className={styles.skilsInfo}>
                        <i className="fab fa-js-square"></i>
                        <h2 className={styles.skilsName}>JavaScript</h2>
                        <p>자바스크립트를 활용하여 페이지를 동적으로 만들고 스크롤, 마우스 클릭 등 다양한 이벤트를 구현할 수 있습니다.</p>
                    </div>
                    <div className={styles.skilsInfo}>
                        <i className="fab fa-java"></i>
                        <h2 className={styles.skilsName}>Java</h2>
                        <p>Spring FrameWork와 REST API를 이용하여 화면의 CRUD 기능을 구현할 수 있습니다.</p>
                    </div>
                    <div className={styles.skilsInfo}>
                        <i className="fab fa-react"></i>
                        <h2 className={styles.skilsName}>ReactJS</h2>
                        <p>Class ,Function 기반 및 ReactHook을 사용하여 개발할 수 있습니다.</p>
                    </div>
                    <div className={styles.skilsInfo}>
                        <i className="fab fa-python"></i>
                        <h2 className={styles.skilsName}>Python</h2>
                        <p>백엔드 Django프레임 워크를 활용하기 위해 스스로 사이드 프로젝트를 진행했습니다.</p>
                    </div>
                    <div className={styles.skilsInfo}>
                        <i className="fas fa-database"></i>
                        <h2 className={styles.skilsName}>Oracle & PostgreSQL</h2>
                        <p>주로 Oracle 11g 버전을 사용했고 그 외에 DB2 ,Postgresql ,Tibero 등을 사용해본 경험이 있습니다.</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About;