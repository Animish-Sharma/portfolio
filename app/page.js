"use client"
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
            <title>Animish Sharma</title>
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.paper}>
          <div className={styles.news}>
              <div className={styles.i}>
                  <span>
                      <p className={styles.newstext}>Vol-7 Num-76</p>
                      <h1>The Animish Sharma</h1>
                      <p className={styles.newstext}>March 10, 2023</p>
                  </span>
              </div>
          </div>
          <h1><TypeAnimation
            
            sequence={[
              'Animish Sharma',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'App Developer',
              1000,
              'Web Designer',
              1000,
              'Web Developer',
              1000,
            ]}
            wrapper="span"
            speed={25}
            deletionSpeed={90}
            style={{ fontSize: '2.5em', display: 'inline-block' }}
            repeat={Infinity}
          /></h1>
          <div className={styles.box}>
            <div>
              <h2>Who am I ?</h2>
              <span className={styles.idiv}>
                <Image width={400} height={500} src="/images/as.jpg" />
                <p className={styles.itext}>{`I'm a passionate web developer with a keen interest in exploring the fascinating realms of machine learning and artificial intelligence. With a solid foundation in web development technologies and frameworks, I thrive on crafting engaging and user-friendly digital experiences.As a web developer, I specialize in front-end and back-end development, utilizing languages such as HTML, CSS, JavaScript, and frameworks like React.js and Django. I enjoy turning design concepts into functional, responsive websites and applications, striving for both aesthetic appeal and seamless functionality.Driven by a curiosity for emerging technologies, I've recently embarked on a journey into the world of machine learning and AI. Eager to expand my skill set, I'm currently immersing myself in courses, tutorials, and hands-on projects to deepen my understanding of algorithms, neural networks, and data analysis.`}</p>
              </span>
            </div>
            <div>
                <h2>Skills</h2>
                <span>
                  <h3>1. React (NEXT JS)</h3>
                  <h3>2. Vue js</h3>
                  <h3>2. Django</h3>
                  <h3>3. Golang</h3>
                  <h3>4. Flutter</h3>
                  <h3>5. Express.js</h3>
                  <h3>6. Both MERN and MEVN Stack</h3>
                  <h3>7. SQL and MangoDB</h3>
                </span>
            </div>
            <div>
                <h2>Projects</h2>
                <Link target="_blank" href="https://github.com/Animish-Sharma/RavenStore">Raven Store</Link>
                <Link target="_blank" href="https://cirious.netlify.app/">Cirious</Link>
                <Link target="_blank" href="https://password-manager-cirious.web.app/">Password Manager</Link>
                <Link target="_blank" href="https://github.com/Animish-Sharma/node-react-chat">Chat App</Link>
                <Link target="_blank" href="https://github.com/Animish-Sharma/GoBlogX">Blog</Link>
                <div>
                  <h2>Reach me on Social Media</h2>
                  <Link target="_blank" href="https://instagram.com/animishxsharma/">Instagram</Link>
                  <Link target="_blank" href="https://x.com/animishxsharma/">Twitter (X)</Link>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}
