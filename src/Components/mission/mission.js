import { Button, Card } from 'antd';
import './mission.css';
import { useNavigate } from 'react-router-dom';

const OurMission = ({heading , title , text , isShowButton=true , page}) => {

  const navigate = useNavigate()
  
  const handleClick = () =>{
    navigate("/joinUs")
  }
  return (
    <div className="our-chapters-section">
      <h1 className={page==="about" ? "page-heading-about" : "page-heading"}>{heading}</h1>
      <Card className="custom-card-home" bordered={false}>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">
          {text}
          </p>
          {isShowButton && (<Button className="join-us-button" type="primary" onClick={handleClick}>
            Join Us →
          </Button>)}
        </div>
      </Card>
    </div>
  );
};

export default OurMission;
