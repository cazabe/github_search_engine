import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SearchInput from '../components/searchInput/searchInput';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchRepositoryData, fetchUserRepositoryData } from '../redux/search_repository/searchRepository.actions';
import { selectRepository } from '../redux/search_repository/searchRepository.slice';
import RepositoryCard from '../components/repository_card/repositoryCard';
import { Col, Row } from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs'

const RepositorySearch = () => {

    const location = useLocation();
    let reposUrl = location.state?.from;
    const repos = useAppSelector(selectRepository)
    console.log('This is the url i need for repos ', reposUrl);
    console.log('This is are the repos ', repos);
    console.log('This is are the repos with data', repos.data);

    const searchRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();

    const searchGithubRepos = (e: any) => {
        reposUrl = null
        e.preventDefault();
        console.log('the user profile to search ', searchRef.current!.value);
        dispatch(fetchRepositoryData(searchRef.current!.value));
    }

    const searchUserGithubRepos = () => {
        console.log('the user profile to search ', reposUrl);
        dispatch(fetchUserRepositoryData(reposUrl))
    }

    useEffect(() => {
        if (reposUrl || reposUrl !== null) {
            searchUserGithubRepos();
        }
        return;
    }, [])

    return (
        <div className='container mt-4'>
            <h1>GitHub Repository Search <BsGithub /></h1>
            <SearchInput inputRef={searchRef} onClick={searchGithubRepos} />
            <Row>
                {repos.data.map((repo) => {
                    return (
                        <Col key={repo.id} md={3} sm={12} className='mt-4'>
                            <RepositoryCard name={repo.name} full_name={repo.full_name} description={repo.description} language={repo.language} />
                        </Col>
                    )
                })}

            </Row>
        </div>
    )
}

export default RepositorySearch