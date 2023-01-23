
import { useAppSelector } from '../redux/hooks';
import { selectSearchUser } from '../redux/search_user/searchUser.slice';
import SearchInput from '../components/button/button';
import ProfileCard from '../components/profile_card/profileCard';
import { Row, Col, Card, Nav, Image } from 'react-bootstrap';
import { BsGithub, BsStack } from 'react-icons/bs';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';
import { RiGitRepositoryCommitsFill } from 'react-icons/ri';
import jobSearching from '../assets/job-searching.svg';
import { Link } from 'react-router-dom';
const UserProfileSearch = () => {
    const user = useAppSelector(selectSearchUser)
    console.log('This is the user', user);
    return (
        <>
            <h1>GithHub User Search <BsGithub /></h1>
            <div className='container mt-4'>
                <SearchInput />
                {user.login !== '' ? (
                    <>
                        <Row>
                            <Col md={3} sm={12}>
                                <ProfileCard data={user.public_repos} description='Repos' icon={<BsStack />} />
                            </Col>
                            <Col md={3} sm={12}>
                                <ProfileCard data={user.followers} description='Followers' icon={<FiUsers />} />
                            </Col>
                            <Col md={3} sm={12}>
                                <ProfileCard data={user.following} description='Following' icon={<FiUserPlus />} />
                            </Col>
                            <Col md={3} sm={12}>
                                <ProfileCard data={user.public_gists} description='Gist' icon={<BsGithub />} />
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

                ) : <p>There are no repositories, please use the search input to look for new ones and be amaze!</p>}
            </div>
        </>
    )
};

export default UserProfileSearch;