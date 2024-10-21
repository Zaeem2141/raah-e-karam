import { Button, Card } from 'antd';
import './joinUSCard.css';
import join from '../../images/j.png';

const JoinUsCard = () => {
  const handleClick = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfTC1VsJcbU3jUVv-nSrMf_tR_L-H09ikLxBVPck0LSl7ukzA/viewform',
      '_blank'
    ); // Replace with your form link
  };

  return (
    <div className="join-us-card-container">
      <Card className="join-us-card" bordered={false}>
        <div className="join-us-content">
          <h2>Join Us in Making a Difference</h2>
          <p>Be a part of <strong>Raah e Karam</strong> to bring positive change.<br/> Click below to get started!</p>
          <Button className="join-us-button" type="primary" onClick={handleClick}>
            Join Us →
          </Button>
        </div>
        <div className="join-us-image">
          <img src={join} alt="Join Us" />
        </div>
      </Card>
    </div>
  );
};

export default JoinUsCard;
