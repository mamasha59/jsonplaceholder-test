import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserFetch } from "../../store/slicers/currentUserSlice/currentUserSlice";
import { getUserPostsFetch } from "../../store/slicers/userPostsSlicer/userPostsSlice";

import Post from "../Post/Post";

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const AboutUser = () => {
    const id = useParams(); // --- айди пользователя, берем из url

    const navigate = useNavigate();

    const userState = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => { // фетчим посты по апи
       dispatch(getUserFetch(id)); // фетчим конкретного юзера по айди
       dispatch(getUserPostsFetch(id)); // фетчим посты юзера по айди
    },[dispatch,id]);

    const user = { // создает обьект юзера
        name: userState.currentUser.user.name,
        adress: userState.currentUser.user.address?.city,
        phone: userState.currentUser.user?.phone,
        website: userState.currentUser.user?.website,
        email: userState.currentUser.user?.email,
    }

  return (
    <section className="container">
        {userState.currentUser.isLoading 
            ?<Spinner animation="grow" variant="info"/>
            :
            <>
                <Button onClick={() => navigate('/')} variant="info">Назад</Button>
                <div className="mb-5">
                    <h1>{user.name}</h1>
                    <ul className="list-group">
                        <li className="list-group-item">{user.adress}</li>
                        <li className="list-group-item">{user.phone}</li>
                        <li className="list-group-item">{user.website}</li>
                        <li className="list-group-item">{user.email}</li>
                    </ul>
                </div>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                    {userState.currentUserPosts.isLoading
                        ? <Spinner animation="grow" variant="info"/>
                        :  userState.currentUserPosts.userPosts
                        .map(e => <Post key={e.id} id={e.userId} postId={e.id} title={e.title} body={e.body}/>)
                    }
                </div>
            </>
        }
    </section>
  )
};

export default AboutUser;
