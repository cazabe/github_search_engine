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

    const searchRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();

    const searchGithubRepos = (e: any) => {
        reposUrl = null
        e.preventDefault();
        dispatch(fetchRepositoryData(searchRef.current!.value));
    }

    const searchUserGithubRepos = () => {
        dispatch(fetchUserRepositoryData(reposUrl))
    }


    useEffect(() => {
        if (reposUrl || reposUrl !== null) {
            searchUserGithubRepos();
        }
        return;
    }, [])

    if (repos == null) {
        return alert('there was a problem with your request, please try again later');
    }

    return (
        <div className='container mt-4'>
            <h1>GitHub Repository Search <BsGithub /></h1>
            <SearchInput inputRef={searchRef} onClick={searchGithubRepos} />
            <div className='counter'>
                <span>Count: {repos.data.length} Github Repositories</span>
            </div>
            <Row>
                {repos.data.map((repo) => {
                    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    return (
                        <Col key={repo.id} md={3} sm={12} className='mt-4'>
                            <RepositoryCard name={repo.name} full_name={repo.full_name} description={repo.description} language={repo.language} color={randomColor} />
                        </Col>
                    )
                })}

            </Row>
        </div>
    )
}

export default RepositorySearch