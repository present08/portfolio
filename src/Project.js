import React, { useState } from 'react';
import jindoms from './img/jindoms.png';
import magabox from './img/magabox.png';
import supermoon from './img/supermoon.png';

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFilterClick = (filter) => {
    if (filter === activeFilter) return; // 이미 클릭된 필터는 다시 클릭하지 않음

    setIsAnimating(true); // 애니메이션 시작

    setTimeout(() => {
      setActiveFilter(filter); // 필터 변경
      setIsAnimating(false); // 애니메이션 종료
    }, 300);
  };

  const img = [magabox, jindoms, supermoon]

  return (
    <section id="work">
      <h1>Work</h1>
      <h3>Project</h3>
      <div className="work__btn">
        <button
          className={`work__menu ${activeFilter === '*' ? 'active' : ''}`}
          onClick={() => handleFilterClick('*')}
          data-filter="*"
        >
          All
        </button>
        <button
          className={`work__menu ${activeFilter === 'PC' ? 'active' : ''}`}
          onClick={() => handleFilterClick('PC')}
          data-filter="PC"
        >
          PC
        </button>
        <button
          className={`work__menu ${activeFilter === 'Mobile' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Mobile')}
          data-filter="Mobile"
        >
          Mobile
        </button>
        <button
          className={`work__menu ${activeFilter === 'Responsive' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Responsive')}
          data-filter="Responsive"
        >
          Responsive Web
        </button>
      </div>

      <ul className={`work__project ${isAnimating ? 'anim-out' : ''}`}>
        {['Magabox', '진도중학교 홈페이지 PC', 'Super Moon'].map((project, index) => (
          <li
            key={index}
            className={`project__list main ${activeFilter === '*' || activeFilter === project ? '' : 'invisible'}`}
            data-type={project}
          >
            <a href="#" target="_blank">
              <div className="project__description">
                <h3>{project}</h3>
                <span>{`${project} 설명`}</span>
                <div className="desBtn">
                  <button>
                    <a href="#" target="_blank">Demo</a>
                  </button>
                  <button>
                    <a href="#" target="_blank">Code</a>
                  </button>
                </div>
              </div>
              <img src={img[index]} alt={project} />
            </a>
          </li>
        ))}
      </ul>

      <h3 className="mini_title">Mine Project</h3>
      <div className="work__mini">
        <ul className="work__project">
          <li className="project__list">
            <a href="#" target="_blank">
              <div className="project__description">
                <h3>Text Typing</h3>
                <span>Typing Effect</span>
                <div className="desBtn">
                  <button>
                    <a href="https://present08.github.io/portfolio/text-typing/index.html" target="_blank">
                      Demo
                    </a>
                  </button>
                  <button>
                    <a href="https://github.com/present08/portfolio/tree/ac9755ea3e0b9ab055da80f6033426f88a8ad669/text-typing" target="_blank">
                      Code
                    </a>
                  </button>
                </div>
              </div>
              <img src="img/text_typing.png" alt="img" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Project;
