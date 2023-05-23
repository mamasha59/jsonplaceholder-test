import { useParams } from "react-router";
import { getUserFetch } from "../../store/slicers/currentUserSlice/currentUserSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPostsFetch } from "../../store/slicers/userPostsSlicer/userPostsSlice";
import Post from "../Post/Post";

const AboutUser = () => {
    const id = useParams() // --- айди пользователя, берем из url

    const userState = useSelector(state => state);
    console.log(userState);

    const dispatch = useDispatch();

    useEffect(() => { // фетчим посты по апи
       dispatch(getUserFetch(id));
       dispatch(getUserPostsFetch(id))
    },[dispatch,id]);

    const user = { // создает обьект юзера
        name: userState.currentUser.user.name,
        adress: userState.currentUser.user.address?.city,
        phone: userState.currentUser.user?.phone,
        website: userState.currentUser.user?.website,
        email: userState.currentUser.user?.email,
    }

  return (
    <>
    {userState.currentUser.isLoading 
        ? 'loading'
        :
        <section>
            <h1>{user.name}</h1>
            <ul className="list-group">
                <li className="list-group-item">{user.adress}</li>
                <li className="list-group-item">{user.phone}</li>
                <li className="list-group-item">{user.website}</li>
                <li className="list-group-item">{user.email}</li>
            </ul>
            <div className="d-flex gap-3 justify-content-center flex-wrap container">
                {userState.currentUserPosts.isLoading
                    ? 'loading'
                    :  userState.currentUserPosts.userPosts
                    .map(e => <Post key={e.id} id={e.userId} title={e.title} body={e.body}/>)
                }
            </div>
        </section>
    }
    </>
  )
};

export default AboutUser;
