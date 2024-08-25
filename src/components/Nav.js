import placeholder_logo from '../images/placeholder-logo.png'

const Nav = () => {
    return (
        <nav>
            <div className="logo-div">
                <img className="logo" src={placeholder_logo} /> 
            </div>
            <h1 className="title-nav">CodePalz</h1>
        </nav>
    )
}

export default Nav