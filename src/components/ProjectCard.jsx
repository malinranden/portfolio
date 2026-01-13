// import './_projects.scss' // testade ta bort denna - tror den länkar i Projects.jsx
import './_projects.scss';
function ProjectCard({project, onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card__top">
                <img src={project.img} alt={project.title} className="card__img"/>
            </div>
            <div className="card__bottom">
                <h2 className="card__title">{project.title}</h2>
                <p>{project.info}</p>
                <p className="card__tags">{project.tags}</p>
            </div>
            <p className="card__more">click to read more</p>
        </div>
    )
}
export default ProjectCard;