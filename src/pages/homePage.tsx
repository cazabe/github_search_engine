import { Link } from "react-router-dom";
const HomePage = () => {
    return (
        <div>
            <h1>Welcome To GitHub Search Engine</h1>
            <h3>What would you like to find?</h3>
            <Link to='/user-profile'>
                Search users
            </Link>
            <Link to='/user-repos'>
                Search repositories
            </Link>
        </div>
    )
}

export default HomePage;