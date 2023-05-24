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
  const [isOpen, setIsOpen] = useState(false); // состояние попапа с коментариями

  const store = useSelector(state => state); // состояние редакса коментарии (isLoading and comments)
  const dispatch = useDispatch(); // функция изменения состяния редакса

  const handleTakeComments = (idPost) => { // при клике на кнопку Коментарии
    if(!isOpen){
      setIsOpen(true)
      dispatch(getPostCommentsFetch(idPost));
    }
      setIsOpen(!isOpen);
  }

  return (
  <Card style={{ width: '18rem' }} className='position-relative'>

    <Card.Img title='Подробнее о пользователе' role="button" onClick={()=> navigate(`/about-user/${id}`)} variant="top" src={beachImg} />
    <Card.Body className='justify-content-between d-flex flex-column'>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
        <Button title='открыть/закрыть' onClick={() => handleTakeComments(postId)} variant="primary">
          Коментарии
        </Button>
    </Card.Body>

    <div style={{zIndex:100}} className={`${isOpen ? 'd-flex flex-column align-items-center w-100 position-absolute top-100 shadow-lg' : 'd-none'}`}>
        {store.postComments.isLoading 
        ? <Spinner className='d-flex justify-content-center' animation="border" variant="dark" size="lg"/>  
        : (store.postComments.comments.map(e =>
            <div key={e.id} className='p-2 border-bottom border-secondary bg-info'>
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
