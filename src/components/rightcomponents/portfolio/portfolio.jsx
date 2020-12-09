import React from 'react';
import styles from './portfolio.module.css';
const Portfolio = (props) => {
    return (
        <section className={styles.portfolio}>
            <div className={styles.portfolioIntro}>
                <h1 className={styles.introTitle}>Portfolio</h1>
                <p>저는 삼성전자 PLM 분야 프로젝트에 주로 참여했습니다. Module BOM Proecess 부터 시작해서 회로 PDM , TEST Platform 프로젝트 등을 참여한 경력이 있고
                그 이외에도 코트라 해외전시 프로젝트도 진행했습니다.주로 JAVA와 Jquery 그리고 Oracle을 사용했기 때문에, 다른 스킬들을 더욱 쌓기위해 개인 프로젝트로 React.JS ,Python Django 등을 혼자서 개발했습니다.</p>
            </div>

            <ul className={styles.field}>
                <li className={styles.fieldName}>All</li>
                <li className={styles.fieldName}>Front-End</li>
                <li className={styles.fieldName}>Back-End</li>
            </ul>
            <div className={styles.projectList}>
                <div className={styles.project}>
                    <div className={styles.projectImg}></div>
                    <div className={styles.projectInfo}>
                        <h3 className={styles.projectTitle}>Project Heading</h3>
                        <p className={styles.projectDesc}>Project Description</p>
                        <p className={styles.projectClient}>Client: Samsung</p>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectImg}></div>
                    <div className={styles.projectInfo}>
                        <h3 className={styles.projectTitle}>Project Heading</h3>
                        <p className={styles.projectDesc}>Project Description</p>
                        <p className={styles.projectClient}>Client: Samsung</p>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectImg}></div>
                    <div className={styles.projectInfo}>
                        <h3 className={styles.projectTitle}>Project Heading</h3>
                        <p className={styles.projectDesc}>Project Description</p>
                        <p className={styles.projectClient}>Client: Samsung</p>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectImg}></div>
                    <div className={styles.projectInfo}>
                        <h3 className={styles.projectTitle}>Project Heading</h3>
                        <p className={styles.projectDesc}>Project Description</p>
                        <p className={styles.projectClient}>Client: Samsung</p>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectImg}></div>
                    <div className={styles.projectInfo}>
                        <h3 className={styles.projectTitle}>Project Heading</h3>
                        <p className={styles.projectDesc}>Project Description</p>
                        <p className={styles.projectClient}>Client: Samsung</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Portfolio;