
import { useAppSelector } from '../redux/hooks';
import { selectSearchUser } from '../redux/search_user/searchUser.slice';
import SearchInput from '../components/button/button';
import ProfileCard from '../components/profile_card/profileCard';
import { Row, Col, Card, Nav, Image } from 'react-bootstrap';
import { BsGithub, BsStack } from 'react-icons/bs';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5'
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
                                    <Image src={user.avatar_url} roundedCircle={true} width={100} />
                                    <Card.Body>
                                        <Card.Title>{user.name}</Card.Title>
                                        <p>@{user.login}</p>
                                        <p>{user.bio}</p>
                                        <ul>
                                            <li><IoLocationSharp />{user.location}</li>
                                            {user.company === '' ? <li><IoLocationSharp />{user.company}</li> : null}

                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={6} sm={12}>
                                <Card>
                                    <Card.Header>
                                        <Nav variant="tabs" defaultActiveKey="#first">
                                            <Nav.Item>
                                                <Nav.Link href="#first">Followers</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </>

                ) : <p>There are no repositories, please use the serach button to look for new ones</p>}
            </div>
        </>
    )
};

export default UserProfileSearch;