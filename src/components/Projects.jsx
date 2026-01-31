
import Projectinfo from "./ProjectInfo.jsx";
import ProjectCard from './ProjectCard.jsx';
import './_projects.scss';
import { useState, useEffect } from 'react';
import PopupCard from "./PopupCard.jsx";
import './_PopupCard.scss'
function Projects() {
    // const [projectInfo, setProjectInfo] = useState(null);// tog bort null, verkar funka?
    const [selectedProject, setSelectedProject] = useState(null);

    // added via AI 
    useEffect(() => {
        document.body.style.overflow =
        selectedProject ? "hidden" : "auto";

        // cleanup in case component unmounts
        return () => {
        document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    return (
        <>
            <div className="projects__content">
                {Projectinfo.map(project => (
                    <ProjectCard 
                        key={project.id}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                    />
                    
                ))}

                {selectedProject && (
                    <PopupCard 
                        popupContent={selectedProject}
                        onClose={() => setSelectedProject(null)} // tog bort null, verkar funka? två ställen
                    />
                )}

            </div>
        </>
    )
}

export default Projects;