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
            <div className={styles.projectList}>
                <div className={styles.project}>
                    <div className={styles.projectImg}></div>
                    <h3 className={styles.projectTitle}>DS ModuleBOM</h3>
                    <div className={styles.projectInfo}>
                        <p className={styles.projectDesc}>Samsung 반도체 공정 설계단위 파트에서 수행하는 프로그램을 개발하는 프로젝트 입니다.</p>
                        <p className={styles.projectClient}>Client: Samsung</p>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectImg}></div>
                    <h3 className={styles.projectTitle}>SAMSUNG Circuit PDM</h3>
                    <div className={styles.projectInfo}>
                        <p className={styles.projectDesc}>Samsung 무선 사업부에서 사용되는 프로그램을 개발하는 프로젝트 입니다.</p>
                        <p className={styles.projectClient}>Client: Samsung</p>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectImg}></div>
                    <div className={styles.projectInfo}>
                        <p className={styles.projectDesc}>Samsung 반도체 기기 테스트 데이터를 관리하는 프로그램을 개발하는 프로젝트 입니다.</p>
                        <p className={styles.projectClient}>Client: Samsung</p>
                    </div>
                    <h3 className={styles.projectTitle}>Samsung DS TEST Platform</h3>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectImg1}></div>
                    <div className={styles.projectInfo}>
                        <p className={styles.projectDesc}>Kotra에서 해외전시를 관리하는 웹사이트를 개발하는 프로젝트 입니다.</p>
                        <p className={styles.projectClient}>Client: KOTRA</p>
                    </div>
                    <h3 className={styles.projectTitle}>KOTRA Abroad Exhibit</h3>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectImg}></div>
                    <div className={styles.projectInfo}>
                        <p className={styles.projectDesc}>Samsung 자재들의 환경 관련 물질들을 관리하는 프로그램을 개발하는 프로젝트 입니다.</p>
                        <p className={styles.projectClient}>Client: Samsung</p>
                    </div>
                    <h3 className={styles.projectTitle}>Samsung Ecims</h3>
                </div>
            </div>
        </section>
    )
};

export default Portfolio;