
import { Card } from 'react-bootstrap';
// import { IconType } from 'react-icons';
type UserProfileProps = {
    data: string
    icon: any
    // icon: IconType
};
const ProfileCard = ({ data, icon }: UserProfileProps) => {
    return (
        <div className='container mt-4'>
            <Card>
                <Card.Body>
                    {icon}
                    <Card.Text className='float-right'>
                        {data}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

export default ProfileCard;