import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(){
  return <div className="image">
    <img className="avatar" src="pizzas/shubham_pic4.jpg" alt=""/>
  </div>
}
function Intro(){
  return <div>
    <h1>Shubham Maurya</h1>
    <p>Working on DSA and front-end Development and currentlly learning react</p>
  </div>

}
function SkillList(){
  return (
    <div className="skill-list">
      <Skill skill="C/C++" emoji="😄" color="orange"></Skill>
      <Skill skill="HTML+CSS" emoji="😄" color="orangered"></Skill>
      <Skill skill="Javascript" emoji="😄" color="yellow"></Skill>
      <Skill skill="Learning React" emoji="😃" color="green"></Skill>
    </div>
  )
}

function Skill(props){
  return (
    <div className="skill" style={{backgroundColor:props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

