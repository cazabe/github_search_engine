import { useLocation } from 'react-router-dom'

const RepositorySearch = () => {
    const location = useLocation();
    const reposUrl = location.state?.from;
    console.log('This is the url i need for repos ', reposUrl);

    return (
        <h1>User repository</h1>
    )
}

export default RepositorySearch