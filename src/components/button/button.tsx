import { useRef } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { fetchUserData } from '../../redux/search_user/searchUser.actions';
import { FormControl, Row, Col } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import './button.css';


const SearchInput = () => {
    const searchGithubuser = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch()

    const searchGithubUser = (e: any) => {
        e.preventDefault();
        console.log('the user profile to search ', searchGithubuser.current!.value);
        dispatch(fetchUserData(searchGithubuser.current!.value))
    }
    return (
        <div className='mt-4'>
            <Row>
                <Col md={6} sm={12} className='mx-auto'>
                    <FormControl type="text" placeholder="Search user" className="mr-sm-2" ref={searchGithubuser} />
                    <span onClick={searchGithubUser}><BiSearchAlt className='btn-icon' /></span>
                </Col>
            </Row>
        </div>
    )
};

export default SearchInput;