import { useState } from 'react'
import Nav from '../components/Nav'

// Coder name
// Noob Aight Decent GOAT

const Onboarding = () => {

    const handleChange = () => {
        console.log('changed')
    }
    
    const handleSubmit = () => {
        console.log('submitted')
    }

    return (
        <div>
            <Nav />
            <div className="onboarding">
                <h1 className="msg-ad-onboarding">Become a Code Pal</h1>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first-name">First Name*</label>
                        <input
                            id="first-name"
                            type="text"
                            name="first-name"
                            placeholder="First Name"
                            required={true}
                            onChange={handleChange}
                        />
                        <label htmlFor="last-name">Last Name*</label>
                        <input
                            id="last-name"
                            type="text"
                            name="last-name"
                            placeholder="Last Name"
                            required={true}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Email"
                            required={false}
                            onChange={handleChange}
                        />

                        <label>Birthday*</label>
                        <div>
                            <input className="dob"
                                id="dob-day"
                                type="number"
                                name="dob-day"
                                placeholder="DD"
                                required={true}
                                onChange={handleChange}
                            />
                            <input className="dob"
                                id="dob-month"
                                type="number"
                                name="dob-month"
                                placeholder="MM"
                                required={true}
                                onChange={handleChange}
                            />
                            <input className="dob"
                                id="dob-year"
                                type="number"
                                name="dob-year"
                                placeholder="YYYY"
                                required={true}
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
                                checked={false}
                            />
                            <label className="gender-label" htmlFor="man">Man</label>
                            <input
                                id="woman"
                                type="radio"
                                name="gender"
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label className="gender-label" htmlFor="woman">Woman</label>
                            <input
                                id="prefer-not"
                                type="radio"
                                name="gender"
                                value="prefer-not"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label className="gender-label" htmlFor="prefer-not">Prefer not to say</label>
                        </div>

                        <label htmlFor="github">GitHub Profile</label>
                        <input
                            id="github"
                            type="text"
                            name="github"
                            placeholder="GitHub URL"
                            required={false}
                            onChange={handleChange}
                        />

                        <label htmlFor="linkedin">LinkedIn Profile</label>
                        <input
                            id="linkedin"
                            type="text"
                            name="linkedin"
                            placeholder="LinkedIn URL"
                            required={false}
                            onChange={handleChange}
                        />

                        <label htmlFor="portfolio">Portfolio Website</label>
                        <input
                            id="portfolio"
                            type="text"
                            name="portfolio"
                            placeholder="Portfolio URL"
                            required={false}
                            onChange={handleChange}
                        />

                        <label htmlFor="location">Location</label>
                        <input
                            id="location"
                            type="text"
                            name="location"
                            placeholder="Location"
                            required={false}
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
                            id="profile"
                            type="url"
                            name="profile"
                            required={false}
                            onChange={handleChange}
                        />
                        <label htmlFor="coder-name">Coder Name</label>
                        <input
                            id="coder-name"
                            type="text"
                            name="coder-name"
                            placeholder="CoderPal02"
                            required={false}
                            onChange={handleChange}
                        />
                        <label htmlFor="bio">Bio</label>
                            <input
                                id="bio"
                                type="text"
                                name="bio"
                                placeholder="I love coding games in python..."
                                required={false}
                                onChange={handleChange}
                            />
                        <label htmlFor="goals">Goals</label>
                        <input
                            id="goals"
                            type="text"
                            name="goals"
                            placeholder="I would like to begin a startup..."
                            required={false}
                            onChange={handleChange}
                        />
                        <label htmlFor="languages">Languages</label>
                        <div>
                            <input className="languages-input"
                                id="languages-text"
                                type="text"
                                name="languages-text"
                                placeholder="Language"
                                required={false}
                                onChange={handleChange}
                            />
                            <select className="languages-input" id="languages-level" name="languages-level" defaultValue="Level" required={false} onChange={handleChange}>
                                <option value="noob">Noob</option>
                                <option value="aight">Aight</option>
                                <option value="decent">Decent</option>
                                <option value="goat">GOAT</option>
                            </select>
                            <input className="languages-input"
                                id="languages-button"
                                type="button"
                                name="languages-button"
                                value="Add"
                                required={false}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="frameworks">Frameworks</label>
                        <div>
                            <input className="frameworks-input"
                                id="frameworks-text"
                                type="text"
                                name="frameworks-text"
                                placeholder="Framework"
                                required={false}
                                onChange={handleChange}
                            />
                            <select className="frameworks-input" id="frameworks-level" name="frameworks-level" defaultValue="Level" required={false} onChange={handleChange}>
                                <option value="noob">Noob</option>
                                <option value="aight">Aight</option>
                                <option value="decent">Decent</option>
                                <option value="goat">GOAT</option>
                            </select>
                            <input className="frameworks-input"
                                id="frameworks-button"
                                type="button"
                                name="frameworks-button"
                                value="Add"
                                required={false}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="dev-tools">Developer Tools</label>
                        <div>
                            <input className="developer-input"
                                id="developer-text"
                                type="text"
                                name="developer-text"
                                placeholder="Tool"
                                required={false}
                                onChange={handleChange}
                            />
                            <select className="developer-input" id="developer-level" name="developer-level" defaultValue="Level" required={false} onChange={handleChange}>
                                <option value="noob">Noob</option>
                                <option value="aight">Aight</option>
                                <option value="decent">Decent</option>
                                <option value="goat">GOAT</option>
                            </select>
                            <input className="developer-input"
                                id="developer-button"
                                type="button"
                                name="developer-button"
                                value="Add"
                                required={false}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="interests">Areas of Interest</label>
                        <div>
                            <input className="interests-input"
                                id="interests-text"
                                type="text"
                                name="interests-text"
                                placeholder="Interest"
                                required={false}
                                onChange={handleChange}
                            />
                            <input className="interests-input"
                                id="interests-button"
                                type="button"
                                name="interests-button"
                                value="Add"
                                required={false}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="hear-about-us">How did you hear about us?</label>
                            <input
                                id="hear-about-us"
                                type="text"
                                name="hear-about-us"
                                required={false}
                                onChange={handleChange}
                            />
                    </section>
                </form>
                
            </div>
        </div>
    )
}

export default Onboarding