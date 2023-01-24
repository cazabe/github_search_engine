
import { useRef } from 'react';
import { useAppSelector } from '../redux/hooks';
import { selectSearchUser } from '../redux/search_user/searchUser.slice';
import SearchInput from '../components/searchInput/searchInput';
import ProfileCard from '../components/profile_card/profileCard';
import { Row, Col, Card, Nav, Image } from 'react-bootstrap';
import { BsGithub, BsStack } from 'react-icons/bs';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';
import { RiGitRepositoryCommitsFill } from 'react-icons/ri';
import jobSearching from '../assets/job-searching.svg';
import oops from '../assets/oops.svg';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { fetchUserData } from '../redux/search_user/searchUser.actions';

const UserProfileSearch = () => {
    const user = useAppSelector(selectSearchUser);
    // console.log('This is the user', user);
    const searchRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();
    const searchGithubUser = (e: any) => {
        e.preventDefault();
        console.log('the user profile to search ', searchRef.current!.value);
        dispatch(fetchUserData(searchRef.current!.value));
    }
    return (
        <>
            <h1>GithHub User Search <BsGithub /></h1>
            <div className='container mt-4'>
                <SearchInput inputRef={searchRef} onClick={searchGithubUser} />
                {user.login !== '' ? (
                    <>
                        <Row>
                            <Col md={3} sm={12}>
                                <ProfileCard data={user.public_repos} description='Repos' icon={BsStack} />
                            </Col>
                            <Col md={3} sm={12}>
                                <ProfileCard data={user.followers} description='Followers' icon={FiUsers} />
                            </Col>
                            <Col md={3} sm={12}>
                                <ProfileCard data={user.following} description='Following' icon={FiUserPlus} />
                            </Col>
                            <Col md={3} sm={12}>
                                <ProfileCard data={user.public_gists} description='Gist' icon={BsGithub} />
                            </Col>
                        </Row>
                        <Row className='mt-5 mb-5'>
                            <Col md={6} sm={12}>
                                <Card>
                                    <Card.Header>
                                        <Nav variant="tabs" defaultActiveKey="#first">
                                            <Nav.Item>
                                                <Nav.Link href="#first">Profile</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Header>
                                    <Card.Body className='profile-user-card-text'>
                                        <Image src={user.avatar_url} roundedCircle={true} width={100} />
                                        <div className='user-info mt-4'>
                                            <Card.Title>{user.name}</Card.Title>
                                            <p className='sub-text'>@{user.login}</p>
                                        </div>
                                        <div className='mt-4'>
                                            <p>{user.bio}</p>
                                            <ul className='bio-list'>
                                                <li><IoLocationSharp />{user.location}</li>
                                                {user.company ? <li><IoLocationSharp />{user.company}</li> : null}
                                                {user.repos_url ? <Link to='/user-repos' state={{ from: user.repos_url }}><li><RiGitRepositoryCommitsFill />Watch my repositories</li></Link> : null}
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={6} sm={12}>
                                {user.hireable ?
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>This user is looking for a job, be the first to reach out.</Card.Title>
                                            <Image src={jobSearching} width={245} />
                                        </Card.Body>
                                    </Card> : <Card>
                                        <Card.Body>
                                            <Card.Title>This user is looking for a job, be the first to reach out.</Card.Title>
                                            <Image src={jobSearching} width={245} />
                                        </Card.Body>
                                    </Card>
                                }
                            </Col>
                        </Row>
                    </>

                ) : <div><p>There are no users, please use the search input to look for new ones and be amaze!</p>
                    <Image src={oops} width={245} /></div>
                }
            </div>
        </>
    )
};

export default UserProfileSearch;