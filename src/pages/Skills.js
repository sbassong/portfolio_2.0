import SkillCard from "../components/SkillCard";
import { SkillData } from "../data";

const Skills = () => {
    return (
        <div id="skills">
            <h1>Skills &amp; Tech</h1>
            <div className="skills-container">
                {
                    SkillData.map((skill, index) => (
                        <SkillCard key={index} title={skill.title} photo={skill.photo} />
                    ))
                }
            </div>
        </div>
    )
}

export default Skills