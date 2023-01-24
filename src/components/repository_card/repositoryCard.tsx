import { Card, Image } from 'react-bootstrap'
import githubLogo from '../../assets/github-mark.svg';
import './repository_card.css';
type UserRepositoryProps = {
    name: string
    full_name: string
    description: string
    language: string
};
const RepositoryCard = ({ name, full_name, description, language }: UserRepositoryProps) => {
    return (
        <div>
            <Card style={{ height: '25rem' }} className='mb-4'>
                <Card.Header><Image src={githubLogo} /></Card.Header>
                <Card.Body>
                    <Card.Title className='repository-title'>{name}</Card.Title>
                    <Card.Text className='repository-sub-text'>
                        {full_name}
                    </Card.Text>
                    <Card.Text className='repository-text'>
                        {description}
                    </Card.Text>
                    <Card.Text className='repository-languages'>
                        {language}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RepositoryCard