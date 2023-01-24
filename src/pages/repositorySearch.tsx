import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SearchInput from '../components/searchInput/searchInput';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchRepositoryData, fetchUserRepositoryData } from '../redux/search_repository/searchRepository.actions';
import { selectRepository } from '../redux/search_repository/searchRepository.slice';

const RepositorySearch = () => {
    const location = useLocation();
    let reposUrl = location.state?.from;
    const repo = useAppSelector(selectRepository)
    console.log('This is the url i need for repos ', reposUrl);
    console.log('This is are the repos ', repo);

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
        if (reposUrl || reposUrl == null) {
            searchUserGithubRepos();
        }
        return;
    }, [])

    return (
        <div>
            <h1>User repository</h1>
            <SearchInput inputRef={searchRef} onClick={searchGithubRepos} />
        </div>
    )
}

export default RepositorySearch