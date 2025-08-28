import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>PDM University</h5>
              </div>
              <h3>2022-2025</h3>
            </div>
            <p>
              Currently pursuing BCA with focus on programming, data structures, 
              and software development. Gained foundational knowledge in computer 
              science principles and practical programming skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Prompt Engineer (Internship)</h4>
                <h5>YAL.ai (Remote)</h5>
              </div>
              <h3>Apr-Jun 2025</h3>
            </div>
            <p>
              Designed optimized prompts for ChatGPT workflows and automated tasks with 
              Python & Google Workspace APIs. Created Custom GPTs for internal workflows 
              and gained hands-on experience with VPS for automation scripting.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Associate (Full-time)</h4>
                <h5>YAL.ai (Remote)</h5>
              </div>
              <h3>Jul 2025 - Present</h3>
            </div>
            <p>
              Currently handling data processing, cleaning, and organizing for AI systems. 
              Developing Python automation tools with PyAutoGUI, Selenium, and Google 
              Workspace integration. Working on cloud development with AWS VPS & RDP servers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
