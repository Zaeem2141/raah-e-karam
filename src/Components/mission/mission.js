import { Button, Card } from 'antd';
import './mission.css';
import { useNavigate } from 'react-router-dom';

const OurMission = () => {

  const navigate = useNavigate()
  
  const handleClick = () =>{
    navigate("/joinUs")
  }
  return (
    <div className="our-chapters-section">
      <h1 className="page-heading">Our Mission</h1>
      <Card className="custom-card-home" bordered={false}>
        <div className="card-content">
          <h2 className="card-title">Mission</h2>
          <p className="card-text">
          At Raah e Karam, we believe that no one should go to bed hungry, be denied access to education, or suffer due to a lack of medical care. Our mission is to uplift the underprivileged by providing essential resources like food, school fees, and medical aid. We are committed to bringing hope and support to those in need, ensuring that every contribution goes directly to making a tangible difference in their lives. Together, with the compassion of our community, we strive to create a future where everyone has the opportunity to thrive. Your generosity fuels this vision—join us in making a meaningful impact today.
          </p>
          <Button className="join-us-button" type="primary" onClick={handleClick}>
            Join Us →
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default OurMission;
