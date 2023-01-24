import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserAstronaut } from 'react-icons/fa'
import { MdDocumentScanner } from 'react-icons/md'
const HomePage = () => {
    return (
        <div className="home-page mt-4">
            <h1>Welcome To GitHub Search Engine</h1>
            <h3>Search users or repositories around the world an be inspired</h3>
            <Row className="mt-4">
                <Col md={6} sm={12} className='btn-info'>
                    <Link to='/user-profile' className="action-btn mt-4">
                        Search users <FaUserAstronaut />
                    </Link>
                    <Link to='/user-repos' className="action-btn mt-4">
                        Search repositories <MdDocumentScanner />
                    </Link>
                </Col>
                <Col md={6} sm={12}>
                    <iframe src="https://giphy.com/embed/mf8UbIDew7e8g" title="world" width="480" height="411" className="giphy-embed" allowFullScreen></iframe>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage;