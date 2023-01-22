
import { useAppSelector } from '../redux/hooks';
import { selectSearchUser } from '../redux/search_user/searchUser.slice';
import SearchInput from '../components/button/button';
import ProfileCard from '../components/profile_card/profileCard';
import { Row, Col } from 'react-bootstrap';
import { BsGithub, BsStack } from 'react-icons/bs';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
const UserProfileSearch = () => {
    const user = useAppSelector(selectSearchUser)
    console.log('This is the user', user);
    return (
        <>
            <h1>GithHub User Search <BsGithub /></h1>
            <div className='container mt-4'>
                <SearchInput />
                {user.login !== '' ? (
                    <Row>
                        <Col md={3} sm={12}>
                            <ProfileCard data={user.public_repos} icon={<BsStack />} />
                        </Col>
                        <Col md={3} sm={12}>
                            <ProfileCard data={user.followers} icon={<FiUsers />} />
                        </Col>
                        <Col md={3} sm={12}>
                            <ProfileCard data={user.following} icon={<FiUserPlus />} />
                        </Col>
                        <Col md={3} sm={12}>
                            <ProfileCard data={user.public_gists} icon={<BsGithub />} />
                        </Col>
                    </Row>

                ) : <p>There are no repositories, please use the serach button to look for new ones</p>}
            </div>
        </>
    )
};

export default UserProfileSearch;