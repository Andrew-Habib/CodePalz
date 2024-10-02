import codepalz_logo from '../images/codepalz-logo.png'

const Nav = () => {
    return (
        <nav>
            <div className="logo-div">
                <img className="logo" src={codepalz_logo} /> 
            </div>
            <h1 className="title-nav">CodePalz</h1>
        </nav>
    )
}

export default Nav