import React from 'react';
import { Container, Row, Col, Text, Spacer, Link, Tooltip } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder,faFileArrowDown} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Resume.module.css';
// import resume from '../../public/assets/pdfs/resume.pdf';

export default function Resume() {

  return (
    <Container md>
      <h1>Resume . . . <span><Tooltip content="Download It" color="primary"><Link href='/assets/pdfs/resume.pdf' target="_blank"><FontAwesomeIcon icon={faFileArrowDown} /></Link></Tooltip></span> </h1>
      <h2>Patrick. F. Ham</h2>
      <Row className='row-with-two-columns'>
        <Col className='col col-left'>
          <Container>
            <Text h6>Focused and determined full-stack developer.  Formerly a departmental music director, composer, arranger, and volunteer-team builder, there is a unique blend of skills, including creative, procedural, technical, and collaborative. The ability to independently focus on details, and collaboratively synergize.</Text>

            <Spacer x={3}></Spacer>

            <Text h5>Technical Skills</Text>
            <Text h6>FrontEnd:</Text>
            <Text>React, Javascript, HTML, CSS</Text>
            <Text h6>BackEnd:</Text>
            <Text>nodeJS, ExpressJS, MySQL, MongoDB</Text>
            
            <Spacer x={3}></Spacer>

            <Text h5>Recent Training</Text>
            <Text h6>Georgia Tech Coding Bootcamp</Text>
            <Text>Full-Stack Web Development</Text>
            <Text h6>Completed</Text>
            <Text>June 15, 2022</Text>
          </Container>
        </Col>
          
        <Col className='col col-right'>
          <Container>
            <Text h5>Contact Info</Text>
            <Text>156 Dixon Street</Text>
            <Text>Jonesboro, GA 30236</Text>
            <Text>(770)-596-2140</Text>
            <Text>patrick.f.ham@gmail.com</Text>
          </Container>

          <Spacer x={3}></Spacer>

          <Container>
            <Text h5>Online Presences</Text>
            <Text><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> - LinkedIn - <Link href="https://www.linkedin.com/in/patrickfham/" target="_blank">linkedin.com/in/PatrickFHam/ </Link></Text>
            <Text><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> - GitHub - <Link href="https://github.com/PatrickFHam" target="_blank">github.com/PatrickFHam </Link></Text>
            <Text><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> - Twitter - <Link href="https://twitter.com/PatrickFHam" target="_blank">twitter.com/PatrickFHham/ </Link></Text>
            <Text><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> - Facebook - <Link href="https://www.facebook.com/patrickfham/" target="_blank">facebook.com/PatrickFHam/ </Link></Text>
            <Text><FontAwesomeIcon icon={faFolder}></FontAwesomeIcon> - Portfolio - <Link href="#Portfolio" target="_blank"> UPDATE URL with new domain here. </Link></Text>
          </Container>

        </Col>
      </Row>

      <Spacer x={3}></Spacer>
      <Spacer x={3}></Spacer>
      <Spacer x={3}></Spacer>

      <Row>
        <Col>

          <Container>
            <Text h3>Education</Text>
            
            <Spacer y={0.5}></Spacer>
            
            <Text h4>Mercer University</Text>
            <Text h5>B.S., Information Technology and Informatics</Text>
            <Text h6>September 2003 - May 2006 , 3.87 GPA when transferred</Text>
            <Text h6>did not complete, plans to finish in May 2023</Text>
            
            <Spacer y={0.5}></Spacer>
            
            <Text h4>Georgia Tech Coding Bootcamp</Text>
            <Text h5>Certificate, Full Stack Web Development</Text>
            <Text h6>December 2021 - June 2022 , Grade Avg: A</Text>
            
            <Spacer y={0.5}></Spacer>
            
            <Text h4>Pensacola Christian College</Text>
            <Text h5>B.A., Music, Conducting</Text>
            <Text h6>September 2006 - December 2009 , +3.5 GPA</Text>
  
          </Container>
          
          <Spacer y={3}></Spacer>
          
          <Container>
            <Text h3>Relevant Projects</Text>
            
            <Spacer x={3}></Spacer>
            
            <Text h4>Re-Engage, by WWHAM!</Text>
            <Text h5>"...your neighborhood's best book-borrowing shelf."</Text>
            <Text h5>Repo:  <Link href="https://github.com/PatrickFHam/Re-Engage" target="_blank"> github.com/PatrickFHam/Re-Engage </Link></Text>
            <Text h5>Deployed:  <Link href="https://warm-gorge-10209.herokuapp.com/" target="_blank"> https://warm-gorge-10209.herokuapp.com/ </Link></Text>
            <Text h5>Tools and Languages:</Text>
            <Text h6>Handlebars, MySQL, Sequelize, Javascript, HTML, CSS, Bootstrap, Anime.js,jQuery, Node.js, Express.js, Popper.js</Text>
            
            <Spacer x={3}></Spacer>
            
            <Text h4>The Shelf, by the Good Neighbors</Text>
            <Text h5>"...your neighborhood's best book-borrowing shelf."</Text>
            <Text h5>Repo:  <Link href="https://github.com/PatrickFHam/Good-Neighbor" target="_blank"> github.com/PatrickFHam/Good-Neighbor </Link></Text>
            <Text h5>Deployed:  <Link href="https://pure-cliffs-09110.herokuapp.com/" target="_blank"> https://pure-cliffs-09110.herokuapp.com/ </Link></Text>
            <Text h5>Tools and Languages:</Text>
            <Text h6>Handlebars, MySQL, Sequelize, Javascript, HTML, CSS, Bootstrap, Anime.js,jQuery, Node.js, Express.js, Popper.js</Text>

            <Spacer x={3}></Spacer>

            <Text h4>SpeedRun Spectator</Text>
            <Text h5>"...the fastest way to keep track fo your favorite SpeedRunners."</Text>
            <Text h5>Repo:  <Link href="https://github.com/PatrickFHam/SpeedRunSpectator" target="_blank"> github.com/PatrickFHam/SpeedRunSpectator </Link></Text>
            <Text h5>Deployed:  <Link href="https://patrickfham.github.io/SpeedRunSpectator/" target="_blank"> patrickfham.github.io/SpeedRunSpectator/ </Link></Text>
            <Text h5>Tools and Languages:</Text>
            <Text h6>SpeedRun.com’s API, JavaScript, jQuery, HTML, CSS, Bootstrap</Text>

            <Spacer x={3}></Spacer>

            <Text h4>Weather Dashboard</Text>
            <Text h5>"...for quickly finding current and 5-day forecast weather data."</Text>
            <Text h5>Repo:  <Link href="https://github.com/PatrickFHam/WeatherDashboard" target="_blank">github.com/PatrickFHam/WeatherDashboard </Link></Text>
            <Text h5>Deployed:  <Link href="https://patrickfham.github.io/WeatherDashboard/" target="_blank">patrickfham.github.io/WeatherDashboard/ </Link></Text>
            <Text h5>Tools and Languages:</Text>
            <Text h6> OpenWeather API, JavaScript, jQuery, HTML, CSS, Bootstrap</Text>

            <Spacer x={3}></Spacer>

            <Text h4>Code Quiz</Text>
            <Text h5>"...for knowing how much you know about coding."</Text>
            <Text h5>Repo:  <Link href="https://github.com/PatrickFHam/CodeQuiz" target="_blank"> github.com/PatrickFHam/CodeQuiz </Link></Text>
            <Text h5>Deployed:  <Link href="https://patrickfham.github.io/CodeQuiz/" target="_blank"> patrickfham.github.io/CodeQuiz/ </Link></Text>
            <Text h5>Tools and Languages:</Text>
            <Text h6>Javascript, HTML, CSS</Text>

            <Spacer x={3}></Spacer>

            <Text h4>Workday Scheduler</Text>
            <Text h5>"... for keeping track of the current day's work activities."</Text>
            <Text h5>Repo:  <Link href="https://github.com/PatrickFHam/WorkdayScheduler" target="_blank"> github.com/PatrickFHam/SpeedRunSpectator </Link></Text>
            <Text h5>Deployed:  <Link href="https://patrickfham.github.io/WorkdayScheduler/" target="_blank"> patrickfham.github.io/WorkdayScheduler/ </Link></Text>
            <Text h5>Tools and Languages:</Text>
            <Text h6>SpeedRun.com’s API, JavaScript, jQuery, HTML, CSS, Bootstrap</Text>


            <Spacer x={3}></Spacer>
            <Spacer x={3}></Spacer>
            <Spacer x={3}></Spacer>

          </Container>
          
          <Container>
            <Text h3>Employment History</Text>

            <Spacer x={3}></Spacer>

            <Text h4>First Baptist Church -- Jonesboro, Georgia</Text>
            <Text h5>Director of Instrumental Music, Music Director, Arranger, Orchestrator</Text>
            <Text h5>September 2015 - Present</Text>
            <Text h6>Associate to the Worship Pastor, director of all instrumental groups including a 6-piece band and 72-piece orchestra, rehearsal conductor, service conductor, concert conductor, composer, arranger, performer, team-builder, music-tech director. Balanced the creative with technical, administrative, and collaborative activities, weekly.</Text>

            <Spacer x={3}></Spacer>

            <Text h4>P.T.Hutchins Ltd., Ribelin, Azelis Americas -- Covington, Georgia</Text>
            <Text h5>Laboratory Technician</Text>
            <Text h5>June 2010 - January 2016</Text>
            <Text h6>Planned and executed multi-seasonal schedules in materials-testing. Calendaring, collaborating with other researchers in remote labs, data-entry,data-manipulation, data-analysis, presentation of ﬁndings, mostly technical but somewhat creative and technical.</Text>

            <Spacer x={3}></Spacer>

            <Text h4>Belmont Baptist Church -- Conyers, Georgia</Text>
            <Text h5>Director of Music Ministries, Music Director, Arranger</Text>
            <Text h5>December 2010 - September 2015</Text>
            <Text h6>Director of all music groups including adult, students’, and children’s choirs, as well as instrumentalists. Creative, technical, and admininstrative.</Text>

            <Spacer x={3}></Spacer>
            <Spacer x={3}></Spacer>
            <Spacer x={3}></Spacer>

          </Container>
          
          
        </Col>
      </Row>
    </Container>
  );
}
