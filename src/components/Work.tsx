import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>ChatGPT Automation Tool</h4>
                  <p>AI Automation</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Selenium, PyAutoGUI, Google Sheets/Docs</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="ChatGPT Automation Tool" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>IPTV LiveTV & OTT Platform</h4>
                  <p>Full-Stack Web App</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Flask, REST API, HTML/CSS/JS, IPTV Integration</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="IPTV Platform" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Telegram Utility Bots</h4>
                  <p>Bot Development</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Telethon, FastAPI, Media Processing</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Telegram Bots" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Chippo AI Assistant</h4>
                  <p>Android AI App (Paused)</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>AI Integration, Android Development, Voice Processing</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Chippo AI Assistant" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>Bash Script Encrypter</h4>
                  <p>Security Tool</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Shell Scripting, Encryption, CLI Interface</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Bash Script Encrypter" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>Memory Tools Suite</h4>
                  <p>System Utilities</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>C & C++, Memory Dumper, Memory Patcher</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Memory Tools" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
