import { useState } from 'react'
import Nav from '../components/Nav'

// Coder name
// Noob Aight Decent GOAT

const Onboarding = () => {

    const [formData, setFormData] = useState({
        user_id: '',
        first_name: '',
        last_name: '',
        email: '',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        gender: 'man',
        github_url: '',
        linkedin_url: '',
        portfolio_url: '',
        location: '',
        profile_url: '',
        coder_name: '',
        bio: '',
        goals: '',
        languages: [],
        frameworks: [],
        dev_tools: [],
        areas_of_interest: [],
        hear_about_us: '',
        coder_pals: []
    })

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        console.log(value, name)
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    
    const handleSubmit = () => {
        console.log('submitted')
    }

    console.log(formData)

    return (
        <div>
            <Nav />
            <div className="onboarding">
                <h1 className="msg-ad-onboarding">Become a Code Pal</h1>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first-name">First Name*</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        <label htmlFor="last-name">Last Name*</label>
                        <input
                            id="last_name"
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            required={true}
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Email"
                            required={false}
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label>Birthday*</label>
                        <div>
                            <input className="dob"
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />
                            <input className="dob"
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}
                            />
                            <input className="dob"
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}
                            />
                        </div>

                        <label>Gender*</label>
                        <div className="gender-div">
                            <input
                                id="man"
                                type="radio"
                                name="gender"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender === 'man'}
                            />
                            <label className="gender-label" htmlFor="man">Man</label>
                            <input
                                id="woman"
                                type="radio"
                                name="gender"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender === 'woman'}
                            />
                            <label className="gender-label" htmlFor="woman">Woman</label>
                            <input
                                id="prefer-not"
                                type="radio"
                                name="gender"
                                value="prefer-not"
                                onChange={handleChange}
                                checked={formData.gender === 'prefer-not'}
                            />
                            <label className="gender-label" htmlFor="prefer-not">Prefer not to say</label>
                        </div>

                        <label htmlFor="github">GitHub Profile</label>
                        <input
                            id="github_url"
                            type="text"
                            name="github_url"
                            placeholder="GitHub URL"
                            required={false}
                            value={formData.github_url}
                            onChange={handleChange}
                        />

                        <label htmlFor="linkedin">LinkedIn Profile</label>
                        <input
                            id="linkedin_url"
                            type="text"
                            name="linkedin_url"
                            placeholder="LinkedIn URL"
                            required={false}
                            value={formData.linkedin_url}
                            onChange={handleChange}
                        />

                        <label htmlFor="portfolio">Portfolio Website</label>
                        <input
                            id="portfolio_url"
                            type="text"
                            name="portfolio_url"
                            placeholder="Portfolio URL"
                            required={false}
                            value={formData.portfolio_url}
                            onChange={handleChange}
                        />

                        <label htmlFor="location">Location</label>
                        <input
                            id="location"
                            type="text"
                            name="location"
                            placeholder="Location"
                            required={false}
                            value={formData.location}
                            onChange={handleChange}
                        />
                        
                        <label htmlFor="agreement">User Agreement*</label>
                        <div>
                            <input
                                id="agreement"
                                type="checkbox"
                                name="agreement"
                                value="linkedin"
                                required={true}
                                onChange={handleChange}
                            />
                            <label>By signing up, you agree to our Terms of Service and Privacy Policy.</label>
                        </div>
                        
                        <input type="submit" onSubmit={handleSubmit}/>
                    </section>
                    <section>
                        <label htmlFor="profile">Profile Picture</label>
                        <input
                            id="profile_url"
                            type="url"
                            name="profile_url"
                            required={false}
                            onChange={handleChange}
                        />
                        <div className="photo-container">
                            <img src={formData.profile_url} alt="Profile Pic Preview"/>
                        </div>
                        <label htmlFor="coder-name">Coder Name</label>
                        <input
                            id="coder_name"
                            type="text"
                            name="coder_name"
                            placeholder="CoderPal02"
                            required={false}
                            value={formData.coder_name}
                            onChange={handleChange}
                        />
                        <label htmlFor="bio">Bio</label>
                            <input
                                id="bio"
                                type="text"
                                name="bio"
                                placeholder="I love coding games in python..."
                                required={false}
                                value={formData.bio}
                                onChange={handleChange}
                            />
                        <label htmlFor="goals">Goals</label>
                        <input
                            id="goals"
                            type="text"
                            name="goals"
                            placeholder="I would like to begin a startup..."
                            required={false}
                            value={formData.goals}
                            onChange={handleChange}
                        />
                        <label htmlFor="languages">Languages</label>
                        <div>
                            <input className="languages-input"
                                id="languages_text"
                                type="text"
                                name="languages_text"
                                placeholder="Language"
                                required={false}
                                onChange={handleChange}
                            />
                            <select className="languages-input" id="languages_level" name="languages_level" defaultValue="Level" required={false} onChange={handleChange}>
                                <option value="noob">Noob</option>
                                <option value="aight">Aight</option>
                                <option value="decent">Decent</option>
                                <option value="goat">GOAT</option>
                            </select>
                            <input className="languages-input"
                                id="languages_button"
                                type="button"
                                name="languages_button"
                                value="Add"
                                required={false}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="frameworks">Frameworks</label>
                        <div>
                            <input className="frameworks-input"
                                id="frameworks_text"
                                type="text"
                                name="frameworks_text"
                                placeholder="Framework"
                                required={false}
                                onChange={handleChange}
                            />
                            <select className="frameworks-input" id="frameworks_level" name="frameworks_level" defaultValue="Level" required={false} onChange={handleChange}>
                                <option value="noob">Noob</option>
                                <option value="aight">Aight</option>
                                <option value="decent">Decent</option>
                                <option value="goat">GOAT</option>
                            </select>
                            <input className="frameworks-input"
                                id="frameworks_button"
                                type="button"
                                name="frameworks_button"
                                value="Add"
                                required={false}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="dev-tools">Developer Tools</label>
                        <div>
                            <input className="developer-input"
                                id="developer_text"
                                type="text"
                                name="developer_text"
                                placeholder="Tool"
                                required={false}
                                onChange={handleChange}
                            />
                            <select className="developer-input" id="developer_level" name="developer_level" defaultValue="Level" required={false} onChange={handleChange}>
                                <option value="noob">Noob</option>
                                <option value="aight">Aight</option>
                                <option value="decent">Decent</option>
                                <option value="goat">GOAT</option>
                            </select>
                            <input className="developer-input"
                                id="developer_button"
                                type="button"
                                name="developer_button"
                                value="Add"
                                required={false}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="interests">Areas of Interest</label>
                        <div>
                            <input className="interests-input"
                                id="interests_text"
                                type="text"
                                name="interests_text"
                                placeholder="Interest"
                                required={false}
                                onChange={handleChange}
                            />
                            <input className="interests-input"
                                id="interests_button"
                                type="button"
                                name="interests_button"
                                value="Add"
                                required={false}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="hear-about-us">How did you hear about us?</label>
                            <input
                                id="hear_about_us"
                                type="text"
                                name="hear_about_us"
                                required={false}
                                value={formData.hear_about_us}
                                onChange={handleChange}
                            />
                    </section>
                </form>
                
            </div>
        </div>
    )
}

export default Onboarding