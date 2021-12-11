const SkillCard = ( {title, photo} ) => {
    return (
        <div>
            <img src={photo} alt=""/>
            <p>{title}</p>
        </div>
    )
}

export default SkillCard