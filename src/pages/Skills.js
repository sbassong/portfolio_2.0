import SkillCard from "../components/SkillCard";
import { SkillData } from "../data";

const Skills = () => {
    return (
        <div id="skills">
            <h1>Skills &amp; Tech</h1>
            <h1 className="skills-h1">Languages</h1>
            <div className="skills-container">
                {
                    SkillData.filter(skill => skill.type === "languages").map((skill, index) => (
                        <SkillCard key={index} title={skill.title} photo={skill.photo} />
                    ))
                }
            </div>
            <h1 className="skills-h1">Frontend</h1>
            <div className="skills-container">
                {
                    SkillData.filter(skill => skill.type === "frontend").map((skill, index) => (
                        <SkillCard key={index} title={skill.title} photo={skill.photo} />
                    ))
                }
            </div>
            <h1 className="skills-h1">Backend &amp; Databases</h1>
            <div className="skills-container">
                {
                    SkillData.filter(skill => skill.type === "backend").map((skill, index) => (
                        <SkillCard key={index} title={skill.title} photo={skill.photo} />
                    ))
                }
            </div>
            <h1 className="skills-h1">Other</h1>
            <div className="skills-container">
                {
                    SkillData.filter(skill => skill.type === "other").map((skill, index) => (
                        <SkillCard key={index} title={skill.title} photo={skill.photo} />
                    ))
                }
            </div>
        </div>
    )
}

export default Skills