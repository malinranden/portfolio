function ProjectCard({project, onClick}) {
    return (
        <div className="projectDiv" onClick={onClick}>
            <div className="projectDiv-top">
                <img src={project.img} alt={project.title} className="img"/>
            </div>
            <div className="projectDiv-bottom">
                <h2 className="projectTitle">{project.title}</h2>
                <p className="projectText">{project.tags}</p>
            </div>
        </div>
    )
}
export default ProjectStructure;