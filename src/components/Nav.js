import placeholder_logo from '../images/placeholder-logo.png'

const Nav = ({authToken}) => {
    return (
        <nav>
            <div className="logo-div">
                <img className="logo" src={placeholder_logo}></img> 
            </div>
            <h1 className="title-nav">CodePalz</h1>
            {/* {<button className="nav-button">Log in</button>} */}
        </nav>
    )
}
// add source for logo Go back to 35 mins
export default Nav