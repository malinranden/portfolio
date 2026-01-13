
import Projectinfo from "./ProjectInfo.jsx";
import ProjectCard from './ProjectCard.jsx';
import './_projects.scss';
function Projects() {
    return (
        <>
            <div className="projects__content">
                {Projectinfo.map(project => (
                    <ProjectCard 
                        key={project.id}
                        project={project}
                    />
                ))}
  
            </div>
        </>
    )
}

export default Projects;