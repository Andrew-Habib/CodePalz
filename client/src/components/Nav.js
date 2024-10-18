import codepalz_logo from '../images/codepalz-logo.png'

const Nav = () => {
    return (
        <nav>
            <div className="logo-div">
                <img className="logo" src={codepalz_logo} /> 
            </div>
            <h1 className="title-nav">CodePalz</h1>
            <div className="nav-links">
                <a href="./dashboard" className="nav-link">Dashboard</a>
                <a href="./codepalz" className="nav-link">CodePalz</a>
                <a href="./palzone" className="nav-link">PalZone</a>
                <a href="./profile" className="nav-link">Profile</a>
                <button className="nav-button-logout">Logout</button>
            </div>
        </nav>
    )
}

export default Nav