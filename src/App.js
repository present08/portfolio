import 'animate.css';
import { useState } from 'react';
import './App.css';
import Particle from './Particle';
import noimg from './img/no_img.png';
import smarty_chatbot from './img/smarty_chatbot_quick.png';
import smarty_img from './img/smarty_main.png';
import srtReservation from './img/srt_reservation.png';

const init = [
  {
    project_name: 'Smarty',
    project_type: 'Multiple',
    img: smarty_img,
    github: 'https://github.com/present08/Smarty',
    site: 'http://www.smartyacademy.shop',
    read_more: 'https://eastern-citrus-892.notion.site/Smarty-1180573b9fca8096acf0ec357844e9e2?pvs=74',
    comment: '💬 학원 프로젝트인 복합문화체육시설 통합관리 시스템을 개발 하였습니다.',
    skills: ['react', 'spring', 'mybatis', 'mysql', 'docekr', 'aws', 'githubaction', 'ubuntu'],
    contribution: ["사이트 주요 시스템 개발", "팀 Github 총괄", "EC2 & Docker 배포"],
  },
  {
    project_name: 'Smarty_Chatbot',
    project_type: 'Single',
    img: smarty_chatbot,
    github: 'https://github.com/present08/Smarty_Chatbot',
    read_more: 'https://eastern-citrus-892.notion.site/1270573b9fca80efa186f994ba542448?v=1270573b9fca803995b5000cf34e4a6a',
    comment: '💬 Smarty 프로젝트의 Side 프로젝트 Chat-bot',
    skills: ['python', 'mysql'],
    contribution: ["Web Socket을 이용한 실시간 통신", "딥 러닝 기술을 이용하여 자가학습 기능 구현"],
  },
  {
    project_name: 'Smarty_QR Attendance',
    project_type: 'Single',
    img: noimg,
    github: 'https://github.com/present08/Smarty_QR',
    read_more: 'https://eastern-citrus-892.notion.site/1620573b9fca80edab0bc2e7799d0b28?v=085be88104124406a4e72ec5885b47f3',
    comment: '💬 Smarty 프로젝트의 Side 프로젝트 QR 출석시스템',
    skills: ['python', 'mysql'],
    contribution: ["OpenCV를 이용한 캠 화면 구현"],
  },
  {
    project_name: 'SRT_Reservation_Macro',
    project_type: 'Single',
    img: srtReservation,
    github: 'https://github.com/present08/SRT_reservation',
    read_more: 'https://github.com/present08/SRT_reservation/blob/main/Readme.md',
    comment: '💬 웹 크롤링 연습, SRT 예약 매크로 개발',
    skills: ['python'],
    contribution: ["예약 매크로", "웹 크롤링"],
  },
]

function App() {
  const [projectList, setProjectList] = useState(init);
  const [origin, setOrigin] = useState(init);
  const [projects, setProjects] = useState(['All', 'Single', 'Multiple'])
  const [prevItem, setPrevItem] = useState('');

  const filterList = (item) => {
    if (item != "All") {
      switch (prevItem) {
        case '':
          setProjectList(origin.filter(value => value.project_type == item));
          setPrevItem(item);
          break;
        case item:
          setPrevItem('');
          setProjectList(init);
          break;
        default:
          setPrevItem(item);
          setProjectList(origin.filter(value => value.project_type == item));
          break;
      }
    } else {
      setPrevItem('');
      setProjectList(init);
    }
  }

  return (
    <div className='bg'>
      <Particle />
      <div className='intro'>
        <h2>
          <span className="animate__animated animate__flash">'문제해결'</span> 및 <span className="animate__animated animate__flash">'다방향 소통'</span>이 가능한<br />
          <span className="animate__animated animate__flash">개발자, 조무암</span>입니다.
        </h2>
      </div>
      <div className='main'>
        <div className='top'>
          <div className='photo_card'>
            <div className='avatar'></div>
            <div style={{ width: '75%', marginLeft: '50px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '30px', marginBottom: '10px', textDecoration: "underline" }}>조무암 Jo Muam</h2>
              <p className='semi_title'>+82 10-9881-5248</p>
              <p className='semi_title'>present_08@naver.com</p>
              <p className='semi_title'><a href='https://github.com/present08' style={{ textDecoration: 'none', color: 'black' }}>github.com/present08</a></p>
              {/* <p className='semi_title'>Notion</p> */}
            </div>
          </div>
          <div className='text'>
            <h1 style={{ margin: "30px", marginLeft: 0, textAlign: 'right', fontSize: '35px' }}>👩🏻‍💻 PROFILE</h1>
            <h2 className='intro_title'>Intro</h2>
            <p> 저는 효율적이고 안정적인 서버 구조와 API 설계를 통해 웹 애플리케이션을 뒷받침하는 <br />
              <b>Back-End 개발자 조무암입니다. </b></p><br />
            {/* <p>저는 항상 새로운 기술을 배우고 적용하는 것을 즐기며,<br />이를 통해 시스템의 성능과 확장성을 개선하는 데에 끊임없이 노력합니다.</p> */}
            <p style={{ marginBottom: '100px' }}><strong>문제를 해결하려는 끊임없는 의지, 팀과의 협업을 통한 성과, 그리고 지속적인 자기 개발</strong><br />
              이 모든 요소들이 제 강점이며, 이를 바탕으로 안정적이고<br />확장 가능한 시스템을 구축하여 회사와 사용자에게 가치를 더하는 것이 제 목표입니다.</p>
            <div>
              <div className='section1'>
                <div>
                  <h2
                    className='intro_title'>Education</h2><br />
                  {/* <b style={{ fontSize: '1.1em' }}>진도실업고등학교 졸업</b><span style={{ color: 'gray', fontSize: '0.8em' }}><br />2015.02</span><br /> */}
                  <b style={{ fontSize: '1.1em' }}>웹 표준 실무 (html, css)</b><span style={{ color: 'gray', fontSize: '0.8em' }}><br />하이미디어컴퓨터학원 2019.03 ~ 2019.05</span><br />
                  <b style={{ fontSize: '1.1em' }}>웹 표준 실무 (javascript)</b><span style={{ color: 'gray', fontSize: '0.8em' }}><br />하이미디어컴퓨터학원 2019.05 ~ 2019.07</span><br />
                  <b style={{ fontSize: '1.1em' }}>노코드 기반 웹 실무</b><span style={{ color: 'gray', fontSize: '0.8em' }}><br />성남그린컴퓨터아카데미 2024.06 ~ 2025.01</span>
                </div>
                <div style={{ marginLeft: '30px' }}>
                  <h2
                    className='intro_title'>Skill</h2>
                  <div className='skills'>
                    <div style={{ marginRight: '30px' }}>
                      <h2><img src="https://img.icons8.com/ios/250/000000/settings.png" alt="server" /> BE</h2>
                      <div className='back'>
                        <div className='java logo'></div>
                        <div className='spring logo'></div>
                        <div className='mybatis logo'></div>
                        <div className='nodejs logo'></div>
                      </div>
                      <h2><img src="https://img.icons8.com/ios/250/000000/application-window.png" alt="web" /> FE</h2>
                      <div className='front'>
                        <div className='javascript logo'></div>
                        <div className='react logo'></div>
                        <div className='tailwind logo'></div>
                      </div>
                      <h2><img src="https://img.icons8.com/ios/250/000000/application-window.png" alt="web" /> Dev ops</h2>
                      <div className='front'>
                        <div className='docker logo'></div>
                        <div className='linux logo'></div>
                        <div className='ubuntu logo'></div>
                      </div>
                    </div>
                    <div>
                      <h2><img src="https://img.icons8.com/ios/250/000000/database.png" alt="db" /> Data Base</h2>
                      <div className='db'>
                        <div className='mysql logo'></div>
                        <div className='mariadb logo'></div>
                      </div>
                      <h2><img src="https://img.icons8.com/ios/250/000000/inbox.png" alt="tools" /> Tools</h2>
                      <div className='tools'>
                        <div className='git logo'></div>
                        <div className='github logo'></div>
                        <div className='notion logo'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='project'>
        <h1 style={{ textAlign: 'center', paddingTop: '30px', color: 'white', marginBottom: '50px' }}>👀 Project</h1>
        <div className='filter'>
          {projects.map(item => (<div onClick={() => filterList(item)} className='selector' style={{ color: prevItem == item ? "#999" : "#000" }} key={item.project_name}>{item}</div>))}
        </div>
        <div className='projects'>
          {projectList.map(item =>
          (<div className='screen' key={item}>
            <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
              <img className='screenshot' src={item.img} alt="main" />
            </div>
            <div className='btndata'>
              <div className='btnbg'></div>
              <h1>{item.project_name}</h1>
              <div style={{ backgroundColor: "white", padding: '2%', borderRadius: '10px' }}>
                <h3 style={{ marginBottom: '20px' }}>{item.comment}</h3>
                <h3 style={{ marginBottom: '10px' }}>✅ 사용기술 및 언어</h3>
                <div style={{ marginBottom: '20px' }}>
                  {item.skills.map(skill => (
                    <div className={`${skill} logo`}></div>
                  ))}
                </div>
                <h3 style={{ marginBottom: '5px' }}>⚙ 기여 내용</h3>
                <p>{item.contribution.map(con => (
                  <p>- {con}</p>
                ))}</p>
              </div>
              <div style={{ marginTop: '20px' }}>
                <button style={{ marginRight: '20px' }}><a href={item.github} target='_blank'>Github</a></button>
                <button><a href={item.read_more} target='_blank'>Read More</a></button>
                {item.site ? <button><a href={item.site} target="_blank">site</a></button> : <></>}
              </div>
            </div>
          </div>)
          )}
        </div>
      </div>
    </div >
  );
}

export default App;
