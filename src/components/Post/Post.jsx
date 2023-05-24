import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import beachImg from '../../img/beachImg.jpg';

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getPostCommentsFetch } from '../../store/slicers/postCommentsSlice/postCommentsSlice/postCommentsSlice';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Post = ({title, body, id, postId}) => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const handleTakeComments = (idPost) => {
    if(!isOpen){
      setIsOpen(true)
      dispatch(getPostCommentsFetch(idPost));
      console.log(id,store.postComments.comments);
    }
      setIsOpen(!isOpen);
  }

  return (
  <Card style={{ width: '18rem' }} className='position-relative'>

    <Card.Img title='Подробнее о пользователе' role="button" onClick={()=> navigate(`/about-user/${id}`)} variant="top" src={beachImg} />
    <Card.Body className='justify-content-between d-flex flex-column'>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
        <Button title='открыть/закрыть' className='d-flex justify-content-center position-relative' onClick={() => handleTakeComments(postId)} variant="primary">
          Коментарии
          {store.postComments.isLoading && <Spinner className='position-absolute end-0' animation="border" variant="info" size="sm"/>}
        </Button>
    </Card.Body>

    <div style={{zIndex:100}} className={`${isOpen ? 'd-flex flex-column position-absolute bg-info top-100 shadow-lg' : 'd-none'}`}>
        {store.postComments.isLoading ? '' : 
          (store.postComments.comments.map(e =>
            <div key={e.id} className='p-2 border-bottom border-secondary'>
              <p className='text-primary m-0'>{e.email}</p>
              <p className='m-0'>{e.body}</p>
            </div>)
          )
        }
    </div>
  </Card>
  )
};

export default Post;
