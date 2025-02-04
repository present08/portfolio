import 'animate.css';
import { useState } from 'react';
import './App.css';
import smarty_chatbot from './img/smarty_chatbot_mockup.png';
import smarty_img from './img/smarty_mockup.png';
import smarty_QR from './img/smarty_QR_mockup.png';
import srtReservation from './img/SRT_mockup.png';

const init = [
  {
    project_name: 'Smarty',
    project_logo: 'smarty_logo',
    project_type: 'Multiple',
    period: '2024. 10 ~ 2024. 12 (3개월)',
    dev_personnel: 6,
    platform: "Web",
    img: smarty_img,
    github: 'https://github.com/present08/Smarty',
    site: 'http://www.smartyacademy.shop',
    read_more: 'https://eastern-citrus-892.notion.site/Smarty-1180573b9fca8096acf0ec357844e9e2?pvs=74',
    comment: '💬 복합문화체육시설 통합 예약 시스템',
    skills: ['javascript', 'java', 'python'],
    library: ['react', 'spring', 'mybatis'],
    database: ['mysql'],
    devops: ['docker', 'aws', 'githubaction', 'ubuntu', 'git', 'gradle'],
    contribution: ["사이트 주요 시스템 개발", "팀 Git 관리", "AWS & Docker 배포"],
  },
  {
    project_name: 'Smarty_Chatbot',
    project_logo: 'smarty_logo',
    project_type: 'Single',
    period: '2024. 10 ~ 2024. 11 (약 3주)',
    dev_personnel: 1,
    platform: "Web",
    img: smarty_chatbot,
    github: 'https://github.com/present08/Smarty_Chatbot',
    read_more: 'https://eastern-citrus-892.notion.site/1270573b9fca80efa186f994ba542448?v=1270573b9fca803995b5000cf34e4a6a',
    comment: '💬 Smarty 프로젝트의 Side 프로젝트 - Chat-bot',
    skills: ['python'],
    library: ['tensorflow', 'keras', 'numpy', 'pytorch'],
    database: ['mysql'],
    devops: ['git'],
    contribution: ["Web Socket을 이용한 실시간 통신", "딥 러닝 기술을 이용하여 자가학습 기능 구현"],
  },
  {
    project_name: 'Smarty_QR Attendance',
    project_logo: 'smarty_logo',
    project_type: 'Single',
    period: '2024. 11 ~ 2024. 11 (약 2주)',
    dev_personnel: 1,
    platform: "Web",
    img: smarty_QR,
    github: 'https://github.com/present08/Smarty_QR',
    read_more: 'https://eastern-citrus-892.notion.site/1620573b9fca80edab0bc2e7799d0b28?v=085be88104124406a4e72ec5885b47f3',
    comment: '💬 Smarty 프로젝트의 Side 프로젝트 - QR 출석시스템',
    skills: ['python'],
    library: ['opencv', 'zbar'],
    database: ['mysql'],
    devops: ['git'],
    contribution: ["OpenCV를 이용한 캠 화면 구현", "z-bar를 이용한 바코드 스캔 및 DB 데이터 저장"],
  },
  {
    project_name: 'SRT_Reservation_Macro',
    project_logo: 'srt_logo',
    project_type: 'Single',
    period: '2024.10 ~ 2024.12(3개월)',
    dev_personnel: 6,
    platform: "Web",
    img: srtReservation,
    github: 'https://github.com/present08/SRT_reservation',
    read_more: 'https://github.com/present08/SRT_reservation/blob/main/Readme.md',
    comment: '💬 웹 크롤링, SRT 취소표 예약 매크로',
    skills: ['python'],
    library: ['selenium'],
    database: ['mysql'],
    devops: ['git'],
    contribution: ["취소표를 잡는 예약 매크로", "Selenium을 이용한 웹 크롤링"],
  },
]

function App() {
  const [projectList, setProjectList] = useState(init);
  return (
    <div className='bg'>
      {/* <Particle /> */}
      {/* <div className='filter'>
          {projects.map(item => (<div onClick={() => filterList(item)} className='selector' style={{ color: prevItem == item ? "#999" : "#000" }} key={item.project_name}>{item}</div>))}
        </div> */}
      {projectList.map(item =>
      (<div className='screen' key={item}>
        <div className='infomation'>
          {/* 제목 */}
          <div className='title'>
            {/* <img src=''/> */}
            <div className={item.project_logo} style={{ display: "inline-block" }}></div>
            <div className='black_bar'></div>
            <span>{item.comment}</span>
          </div>
          {/* 개발정보 */}
          <div className='info'>
            <div><strong>개발기간</strong><span>{item.period}</span></div>
            <div><strong>플랫폼</strong><span>{item.platform}</span></div>
            <div><strong>개발인원</strong><span>{item.dev_personnel} 명</span></div>
            <div><strong>기여내용</strong><span>{item.contribution.map(con => (<p style={{ color: "#555" }}>{con}</p>))}</span></div>
          </div>
          {/* 개발환경 */}
          <div className='environ'>
            <div><strong>언어</strong><span>{item.skills.map(skill => (
              <div className={`${skill} logo`}></div>
            ))}</span></div>
            <div><strong>프레임워크<br />& 라이브러리</strong><span>{item.library.map(skill => (
              <div className={`${skill} logo`}></div>
            ))}</span></div>
            <div><strong>데이터베이스</strong><span>{item.database.map(skill => (
              <div className={`${skill} logo`}></div>
            ))}</span></div>
            <div><strong>Devops</strong><span>{item.devops.map(skill => (
              <div className={`${skill} logo`}></div>
            ))}</span></div>
          </div>
          <div className='btndata'>
            <button><a href={item.github} target='_blank'>Github</a></button>
            <button><a href={item.read_more} target='_blank'>Read More</a></button>
            {item.site ? <button><a href={item.site} target="_blank">Demo Site</a></button> : <></>}
          </div>
        </div>
        <div className='mockup'>
          <img src={item.img} />
        </div>
      </div>)
      )}
    </div>
  );
}

export default App;
