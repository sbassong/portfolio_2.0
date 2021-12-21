import { VscGithubAlt } from "react-icons/vsc"
import { AiOutlineLinkedin} from "react-icons/ai"
import { MdOutlineEmail } from "react-icons/md"

const BottomNav = () => {

    return (
        <div className="bottom-nav-container">
            <div className="bottom-nav-wrap">
                <nav className="bottom-nav" >
                    <a href="https://www.linkedin.com/in/sambassong/" rel="noreferrer" target="_blank"><AiOutlineLinkedin /></a>
                    <a href="https://github.com/sbassong" rel="noreferrer" target="_blank"><VscGithubAlt /></a>
                    <a href="#contact"><MdOutlineEmail /></a>
                </nav>
            </div>
        </div>
    )
}

export default BottomNav