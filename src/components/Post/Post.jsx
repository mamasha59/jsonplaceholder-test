import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import beachImg from '../../img/beachImg.jpg';
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Post = ({title, body, id}) => {

  const navigate = useNavigate();

  return (
  <Card style={{ width: '18rem' }}>
    <Card.Img onClick={()=> navigate(`/about-user/${id}`)} className='custom-pointer' variant="top" src={beachImg} />
    <Card.Body className='justify-content-between d-flex flex-column'>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
      <Button variant="primary">Коментарии</Button>
    </Card.Body>
  </Card>
  )
};

export default Post;
