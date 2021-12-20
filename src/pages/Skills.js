import SkillCard from "../components/SkillCard";
import { SkillData } from "../data";

const Skills = () => {
    return (
        <div id="skills">
            <h1>Stack</h1>
            <p>Techs I enjoy using regularly</p>
            <div className="skills-container">
                {
                    SkillData && SkillData.map((skill, index) => (
                        <SkillCard key={index} title={skill.title} photo={skill.photo} />
                    ))
                }
            </div>
        </div>
    )
}

export default Skills