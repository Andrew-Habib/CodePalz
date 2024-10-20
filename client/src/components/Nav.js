import codepalz_logo from '../images/codepalz-logo.png'

const Nav = ({loggedin}) => {
    return (
        <nav>
            <div className="logo-div">
                <img className="logo" src={codepalz_logo} /> 
            </div>
            <a href="../dashboard" className="title-nav">CodePalz</a>
            {loggedin ? <div className="nav-links">
                <a href="./dashboard" className="nav-link">Dashboard</a>
                <a href="./palz" className="nav-link">Palz</a>
                <a href="./palzone" className="nav-link">PalZone</a>
                <a href="./profile" className="nav-link">Profile</a>
                <button className="nav-button-logout">Logout</button>
            </div> : <></>}
        </nav>
    )
}

export default Nav