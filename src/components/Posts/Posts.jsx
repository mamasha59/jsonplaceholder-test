import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { useEffect } from "react";
import { getPostsFetch } from "../../store/slicers/postSlice/postSlice";

const Posts = () => {
    const store = useSelector(state => state.posts);

    const dispatch = useDispatch();

    useEffect(()=>{ // фетчи посты по апи
        dispatch(getPostsFetch());
    },[dispatch]);

  return (
    <main className='d-flex gap-3 justify-content-center flex-wrap container'>
       {store.isLoading 
        ? 'loading'
        :  store.posts.map(e => <Post key={e.id} id={e.userId} title={e.title} body={e.body}/>)
       }
    </main>
  )
};

export default Posts;
