const PalCard = ({name="Anonymous", 
    coder_name="anonymous", 
    bio="Ready to collaborate...", 
    status="Available", 
    location="unknown", 
    languages=[], 
    frameworks=[], 
    dev_tools=[], 
    skill_level="Beginner", 
    availability="Anytime", 
    project_match_mode=false, 
    project_name="none", 
    project_description="No Description", 
    owner="Anonymous", 
    collaborators=[], 
    expected_skill="Beginner", 
    timeline="none", 
    tags=[]}) => {
    return (
        <div className="pal-card">
            {project_match_mode ? (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-2 text-purple-400">{project_name}</h2>
                    <p className="text-m text-gray-400 mb-2">Owner: <span className="text-white">{owner}</span></p>
                    <p className="text-base text-white mb-4">{project_description}</p>
                    <div className="flex flex-wrap justify-between mb-4">
                        <div className="w-full sm:w-1/2 mb-4">
                            <p className="text-m text-gray-400 mb-2">Expected Skill Level: <span className="text-white">{expected_skill}</span></p>
                        </div>
                        <div className="w-full sm:w-1/2 mb-4">
                            <p className="text-m text-gray-400 mb-2">Timeline: <span className="text-white">{timeline}</span></p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between mb-4">
                        <div className="w-full sm:w-1/2 mb-4">
                            <h3 className="text-lg font-semibold mb-2 text-pink-500">Collaborators</h3>
                            <ul className="list-disc list-inside text-white">
                                {collaborators.length > 0 ? (
                                    collaborators.map((collaborator, index) => (
                                        <li key={index}>{collaborator}</li>
                                    ))
                                ) : (
                                    <li>No collaborators yet</li>
                                )}
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/2 mb-4">
                            <h3 className="text-lg font-semibold mb-2 text-pink-500">Tags</h3>
                            <ul className="list-disc list-inside text-white">
                                {tags.length > 0 ? (
                                    tags.map((tag, index) => (
                                        <li key={index}>{tag}</li>
                                    ))
                                ) : (
                                    <li>No tags provided</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-2 text-purple-400">{name}</h2>
                    <p className="text-m text-gray-400 mb-2">Coder Name: <span className="text-white">{coder_name}</span></p>
                    <p className="text-base text-white mb-4">{bio}</p>
                    <div className="flex flex-wrap justify-between mb-4">
                        <div className="w-full sm:w-1/2 mb-4">
                            <p className="text-m text-gray-400 mb-2">Status: <span className="text-white">{status}</span></p>
                            <p className="text-m text-gray-400 mb-2">Location: <span className="text-white">{location}</span></p>
                        </div>
                        <div className="w-full sm:w-1/2 mb-4">
                            <p className="text-m text-gray-400 mb-2">Skill Level: <span className="text-white">{skill_level}</span></p>
                            <p className="text-m text-gray-400 mb-4">Availability: <span className="text-white">{availability}</span></p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between mb-4">
                        <div className="w-full sm:w-1/3 mb-4">
                            <h3 className="text-lg font-semibold mb-2 text-pink-500">Languages</h3>
                            <ul className="list-disc list-inside text-white">
                                {languages.length > 0 ? (
                                    languages.map((language, index) => (
                                        <li key={index}>{language}</li>
                                    ))
                                ) : (
                                    <li>No languages listed</li>
                                )}
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/3 mb-4">
                            <h3 className="text-lg font-semibold mb-2 text-pink-500">Frameworks</h3>
                            <ul className="list-disc list-inside text-white">
                                {frameworks.length > 0 ? (
                                    frameworks.map((framework, index) => (
                                        <li key={index}>{framework}</li>
                                    ))
                                ) : (
                                    <li>No frameworks listed</li>
                                )}
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/3 mb-4">
                            <h3 className="text-lg font-semibold mb-2 text-pink-500">Development Tools</h3>
                            <ul className="list-disc list-inside text-white">
                                {dev_tools.length > 0 ? (
                                    dev_tools.map((tool, index) => (
                                        <li key={index}>{tool}</li>
                                    ))
                                ) : (
                                    <li>No dev tools listed</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PalCard