import noProjectImage from '../assets/no-projects.png'


export default function NoProjectSelected(){
    return(
        <div>
            <img src={noProjectImage} alt="An empty task list" />
            <h2>No Project Selected</h2>
            <p>Select a project or get started with a new one</p>
            <p>
                <button>Create new Project</button>
            </p>
        </div>
    )
}