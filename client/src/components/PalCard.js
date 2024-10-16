import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const PalCard = ({ onIconClick,
    name="Anonymous", 
    coder_name="anonymous", 
    bio="Ready to collaborate...", 
    status="Available", 
    location="unknown", 
    languages=[], 
    frameworks=[], 
    dev_tools=[], 
    skill_level="Beginner", 
    availability="Anytime", 
    project_match_mode=true, 
    project_name="none", 
    project_description="No Description", 
    owner="Anonymous", 
    collaborators=[], 
    expected_skill="Beginner", 
    timeline="none", 
    tags=[]}) => {
    return (
        <div className="pal-card">
            <FaCheckCircle className="check-icon" onClick={() => onIconClick('check')}/>
            <FaTimesCircle className="x-icon" onClick={() => onIconClick('x')}/>
            <div className={`card-label ${project_match_mode ? 'card-label-project' : 'card-label-connect'}`}>
            {project_match_mode ? 'Project' : 'Connect'}
        </div>
            <div className="text-center">
                <h2 className="card-title">{project_match_mode ? project_name : name}</h2>
                <p className="small-headings">{project_match_mode ? "Owner: " : "CoderName: "}<span className="text-white">{project_match_mode ? owner : coder_name}</span></p>
                <p className="small-content">{project_match_mode ? project_description : bio}</p>
                <div className="flex-containers">
                    <div className="sub-containers">
                        <p className="small-headings">{project_match_mode ? "Expected Skill Level: " : "Status: "} <span className="small-content">{project_match_mode ? expected_skill : status}</span></p>
                        <p className="small-headings">{project_match_mode ? "Collaborators: " : "Location: "}<span className="small-content">{project_match_mode ? (collaborators.length > 0 ? collaborators.join(', ') : "No collaborators yet") : location}</span></p>
                    </div>
                    <div className="sub-containers">
                        <p className="small-headings">{project_match_mode ? "Timeline: " : "Skill Level: "}<span className="small-content">{project_match_mode ? timeline : skill_level}</span></p>
                        <p className="small-headings">{project_match_mode ? "Tags: " : "Availability: "} <span className="small-content">{project_match_mode ? (tags.length > 0 ? tags.join(', ') : "No tags provided") : availability}</span></p>
                    </div>
                </div>
                <div className="flex-containers">
                    <div className="tech-sub-containers">
                        <h3 className="tech-headings">Languages</h3>
                        <ul className="tech-lists">
                            {languages.length > 0 ? (
                                languages.map((language, index) => (
                                    <li key={index}>{language}</li>
                                ))
                            ) : (<li>No languages listed</li>)}
                        </ul>
                    </div>
                    <div className="tech-sub-containers">
                        <h3 className="tech-headings">Frameworks</h3>
                        <ul className="tech-lists">
                            {frameworks.length > 0 ? (
                                frameworks.map((framework, index) => (<li key={index}>{framework}</li>))
                            ) : (<li>No frameworks listed</li>)}
                        </ul>
                    </div>
                    <div className="tech-sub-containers">
                        <h3 className="tech-headings">Development Tools</h3>
                        <ul className="tech-lists">
                            {dev_tools.length > 0 ? (
                                dev_tools.map((tool, index) => (
                                    <li key={index}>{tool}</li>
                                ))
                            ) : (<li>No dev tools listed</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PalCard