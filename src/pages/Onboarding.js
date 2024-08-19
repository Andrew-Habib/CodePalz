import { useState } from 'react'
import Nav from '../components/Nav'

const Onboarding = () => {

    const handleChange = () => {
    }
    
    const handleSubmit = () => {
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
                            <input
                                id="dob-day"
                                type="number"
                                name="dob-day"
                                placeholder="DD"
                                required={true}
                                onChange={handleChange}
                            />
                            <input
                                id="dob-month"
                                type="number"
                                name="dob-month"
                                placeholder="MM"
                                required={true}
                                onChange={handleChange}
                            />
                            <input
                                id="dob-year"
                                type="number"
                                name="dob-year"
                                placeholder="YYYY"
                                required={true}
                                onChange={handleChange}
                            />
                        </div>

                        <label>Gender*</label>
                        <div>
                            <input
                                id="man"
                                type="radio"
                                name="man"
                                required={true}
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="man">Man</label>
                            <input
                                id="woman"
                                type="radio"
                                name="woman"
                                required={true}
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman">Woman</label>
                        </div>

                        <label htmlFor="bio">Bio</label>
                        <input
                            id="bio"
                            type="text"
                            name="bio"
                            placeholder="I love coding games in python..."
                            required={true}
                            onChange={handleChange}
                        />
                        <input type="submit"/>
                    </section>
                    <section>
                        <label htmlFor="profile">Profile</label>
                            <input
                                id="profile"
                                type="url"
                                name="profile"
                                required={true}
                                onChange={handleChange}
                            />
                    </section>
                </form>
                
            </div>
        </div>
    )
}

export default Onboarding