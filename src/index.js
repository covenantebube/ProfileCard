import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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

  return (
    <div >
<img className ="avatar" src= "profile-image.jpg" alt= "ProfileImage"/>
    </div>
    );

}
function Intro(){

  return (
    <div >
<h1>Covenant Ebube</h1>
<p>Full-stack Web developer. I code with React And ASP.NET </p>
    </div>
    )

}

function SkillList(){
  return (
    <div className = "skill-list"> 
      <Skill
        Skill = "HTML+CSS"
        Color = "blue"
        emoji = "💪"
        />
        <Skill 
        Skill = "JavaScript"
        Color = "Yellow"
        emoji = "💪"
        />
        <Skill 
        Skill = "ASP.NET"
        Color = "Green"
        emoji = "💪"
        />
         <Skill 
        Skill = "GIT and GitHub"
        Color = "red"
        emoji = "👍"
        />
         <Skill 
        Skill = "React"
        Color = "orange"
        emoji = "💪"
        />
    </div>
  )
}

function Skill(props){

  return (
    
    <div  className = "skill" style={{backgroundColor: props.Color}}>
<span>{props.Skill} </span>
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
