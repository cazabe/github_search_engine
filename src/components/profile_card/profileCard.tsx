
import { Card } from 'react-bootstrap';
import { IconType } from 'react-icons/lib';
import './profileCard.css'
type UserProfileProps = {
    data: string
    description: string
    icon: IconType
};
const ProfileCard = ({ data, description, icon: Icon }: UserProfileProps) => {
    return (
        <div className='container mt-4'>
            <Card className='card-info'>
                <Card.Body className='mx-auto'>
                    <div className='card-icon'>
                        {<Icon />}
                    </div>
                    <Card.Text className='card-text'>
                        {data}
                    </Card.Text>
                </Card.Body>
                <p className='card-sub-text'>{description}</p>
            </Card>
        </div>
    )
};

export default ProfileCard;