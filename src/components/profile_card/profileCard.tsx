
import { Card } from 'react-bootstrap';
import './profileCard.css'
// import { IconType } from 'react-icons';
type UserProfileProps = {
    data: string
    description: string
    icon: any
    // icon: IconType
};
const ProfileCard = ({ data, description, icon }: UserProfileProps) => {
    return (
        <div className='container mt-4'>
            <Card className='card-info'>
                <Card.Body className='mx-auto'>
                    <div className='card-icon'>
                        {icon}
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