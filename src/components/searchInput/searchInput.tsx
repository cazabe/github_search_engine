import { FormControl, Row, Col } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import './searchInput.css';

type SearchUserProfileProps = {
    onClick: (e: any) => void;
    inputRef: React.RefObject<HTMLInputElement>;
};

const SearchInput = ({ onClick, inputRef }: SearchUserProfileProps) => {
    return (
        <div className='mt-4'>
            <Row>
                <Col md={6} sm={12} className='mx-auto'>
                    <FormControl type="text" placeholder="Search user" className="mr-sm-2" ref={inputRef} />
                    <span onClick={onClick}><BiSearchAlt className='btn-icon' /></span>
                </Col>
            </Row>
        </div>
    )
};

export default SearchInput;